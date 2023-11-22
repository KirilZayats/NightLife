using Dapper;
using NightLife.API.Models;
using Npgsql;
using NpgsqlTypes;
using System.Data;

namespace NightLife.API.Repositories.Places
{
    public class PlacesRepository : IPlacesRepository
    {
        private readonly NpgsqlConnection _connection;


        public PlacesRepository(IDbConnection connection)
        {
            _connection = (NpgsqlConnection)connection;
            _connection.Open();
        }


        public async void AddImages(string uuid, List<ImageCreate> images)
        {
            try
            {
                var cmd = new NpgsqlCommand($@"CREATE TABLE IF NOT EXISTS public.key_{uuid.Replace('-', '_')}(
                                            id serial primary key,
                                            image_name text NOT NULL,
                                            image bytea
                                            )", _connection);
                await cmd.ExecuteNonQueryAsync();

                foreach (var image in images)
                {
                    var addCmd = new NpgsqlCommand($@"INSERT INTO public.key_{uuid.Replace('-', '_')}(                                          
                                            image_name, image) VALUES(@image_name, @image)", _connection);
                    addCmd.Parameters.AddWithValue("@image", image.Files);
                    addCmd.Parameters.AddWithValue("@image_name", image.Name);
                    await addCmd.ExecuteNonQueryAsync();
                }
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddImages() - {e.Message}");
            }
        }

        public async Task<string> AddPlace(string sub, string coords, string info, double raiting)
        {
            try
            {
                var cmd = $@"INSERT INTO public.places (sub, coords, raiting, info)                                                
                                                VALUES ('{sub}', '{coords}', {raiting}, '{info}'::jsonb) RETURNING id as string";
                return (await _connection.QueryAsync<string>(cmd)).First();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
                return "";
            }
        }

        public async Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams)
        {
            IEnumerable<PlaceResponse> places = null;
            try
            {
                var cmd = $@"SELECT * FROM public.places WHERE ((info->'name')::text LIKE '%' || '{searchParams.SearchTerm ?? ""}' || '%')
                                                LIMIT {searchParams.PageSize} OFFSET {(searchParams.PageNumber - 1) * searchParams.PageSize}";
                places = (await _connection
                           .QueryAsync<PlaceResponse>(cmd));
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }

            return places;
        }

        public async Task<IEnumerable<ImageCreate>> GetPictures(string uuid)
        {
            IEnumerable<ImageCreate> places = new List<ImageCreate>();
            try
            {
                var cmd = $@"SELECT * FROM public.{uuid.Replace('-', '_')}";
                var dr = (await _connection
                          .QueryAsync(cmd));

                return dr.Select(img =>
                {
                    byte[] productImageByte = null;
                    productImageByte = (byte[])img.image;
                    return new ImageCreate()
                    {
                        Files = productImageByte,
                        Name = (string)img.name,
                    };

                });

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }
            return places;
        }
    }
}
