using NightLife.API.Models;
using NightLife.API.Repositories.Places;

namespace NightLife.API.Services.Places
{
    public class PlacesService : IPlacesService
    {
        private readonly IPlacesRepository _placesRepository;
        public PlacesService(IPlacesRepository placesRepository)
        {
            _placesRepository = placesRepository;
        }

        public async void CreatePlace(PlaceCreate place)
        {
            var files = new List<ImageCreate>();
            foreach (var formFile in place.Images)
            {
                if (formFile.Length > 0)
                {
                    using var memoryStream = new MemoryStream();
                    formFile.CopyTo(memoryStream);

                    files.Add(new ImageCreate
                    {
                        Name = formFile.Name,
                        Files = memoryStream.ToArray()
                    });
                }
            }
            var uuid = await _placesRepository.AddPlace(place.Sub, place.Coords, place.Info, place.Raiting);
            _placesRepository.AddImages("key_0232cd", files);
        }

        public async Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams)=>
            await _placesRepository.GetAll(searchParams);

        public async Task<IEnumerable<MemoryStream>> GetPictures(string uuid)
        {
            var collaction = new List<MemoryStream>();
            var pictures = await _placesRepository.GetPictures(uuid);
            foreach (var file in pictures)
            {
                collaction.Add(new MemoryStream(file.Files));
            }
            return collaction;
        }
    }
}
