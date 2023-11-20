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
                    await formFile.CopyToAsync(memoryStream);

                    files.Add(new ImageCreate
                    {
                        Name = formFile.Name,
                        Files = memoryStream.ToArray()
                    });
                }
            }
            var uuid = await _placesRepository.AddPlace(place.Sub, place.Coords, place.Info, place.Raiting);
            _placesRepository.AddImages(uuid, files);
        }

        public async Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams)=>
            await _placesRepository.GetAll(searchParams);

        public async Task<IEnumerable<IFormFile>> GetPictures(string uuid)
        {
            var collaction = new List<IFormFile>();
            var pictures = await _placesRepository.GetPictures(uuid);
            foreach (var file in pictures)
            {
                using var ms = new MemoryStream(file.Files);
                collaction.Add(new FormFile(ms, 0, file.Files.Length, file.Name, file.Name));
            }
            return collaction;
        }
    }
}
