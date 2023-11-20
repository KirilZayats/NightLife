using Dapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.SignalR;
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
        }


        public void AddImages(string uuid, List<ImageCreate> images)
        {
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = new NpgsqlCommand($@"CREATE TABLE IF NOT EXISTS public.{uuid.Replace('-', '_')}(
                                            id serial primary key,
                                            image_name text NOT NULL,
                                            image bytea
                                            )", _connection, transaction);
                cmd.ExecuteNonQuery();

                foreach (var image in images)
                {
                    var addCmd = new NpgsqlCommand($@"INSERT INTO public.{uuid}(                                          
                                            image_name, image) VALUES(?, ?)", _connection, transaction);
                    addCmd.Parameters.Add(new NpgsqlParameter("image", NpgsqlDbType.Bytea)
                    { Value = image.Files });
                    addCmd.Parameters.Add(new NpgsqlParameter("image_name", NpgsqlDbType.Text)
                    { Value = image.Name });
                    cmd.ExecuteNonQuery();
                }
                transaction.Commit();
            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }
        }

        public async Task<string> AddPlace(string sub, string coords, string info, double raiting)
        {
            string uuid = "";
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = new NpgsqlCommand($@"INSERT INTO public.places (sub, coords, raiting, info)
                                                OUTPUT Inserted.id
                                                VALUES ('{sub}', '{coords}', {raiting}, '{info}'::jsonb)", _connection, transaction);
                uuid =  await cmd.ExecuteScalarAsync() as string ?? "";
                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }
            return uuid;
        }

        public async Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams)
        {
            IEnumerable<PlaceResponse> places = null;
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = $@"SELECT * FROM public.places WHERE ('{searchParams.SearchTerm ?? ""}' LIKE '%' || info->'name' || '%')
                                                LIMIT {searchParams.PageSize} OFFSET {(searchParams.PageNumber - 1) * searchParams.PageSize}";
                places = (await _connection
                           .QueryAsync<PlaceResponse>(cmd, transaction: transaction));

                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }

            return places;
        }

        public async Task<IEnumerable<ImageCreate>> GetPictures(string uuid)
        {            
            IEnumerable<ImageCreate> places = null;
            try
            {
                _connection.Open();
                using var transaction = _connection.BeginTransaction();
                var cmd = $@"SELECT * FROM public.{uuid.Replace('-', '_')}";
                var dr = (await _connection
                          .QueryAsync(cmd, transaction: transaction));

                places = dr.Select(img =>
                {
                    byte[] productImageByte = null;
                    productImageByte = (byte[])img.image;
                    return new ImageCreate()
                    {
                        Files = productImageByte,
                        Name = (string)img.name,
                    };

                });
                transaction.Commit();

            }
            catch (Exception e)
            {
                Console.WriteLine($"Error AddPlace() - {e.Message}");
            }
            finally
            {
                _connection?.Close();
                _connection?.Dispose();
            }
            return places;
        }
    }
}
