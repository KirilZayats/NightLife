using NightLife.API.Models;

namespace NightLife.API.Repositories.Places
{
    public interface IPlacesRepository
    {
        Task<string> AddPlace(string sub, string coords, string info, double raiting);
        void AddImages(string uuid, List<ImageCreate> images);
        Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams);
        Task<IEnumerable<ImageCreate>> GetPictures(string uuid);
    }
}
