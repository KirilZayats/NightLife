using Microsoft.AspNetCore.Mvc;
using NightLife.API.Models;

namespace NightLife.API.Services.Places
{
    public interface IPlacesService
    {
        void CreatePlace(PlaceCreate place);
        Task<IEnumerable<PlaceResponse>> GetAll(SearchParams searchParams);
        Task<IEnumerable<MemoryStream>> GetPictures(string uuid);
    }
}
