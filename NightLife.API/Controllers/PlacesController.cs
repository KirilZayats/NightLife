using Microsoft.AspNetCore.Mvc;
using NightLife.API.Models;
using NightLife.API.Services.Places;

namespace NightLife.API.Controllers
{
    public class PlacesController : ControllerBase
    {
        private readonly IPlacesService _palceService;

        public PlacesController(IPlacesService placesService)
        {
            _palceService = placesService;
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAll(SearchParams searchParams)=>
            Ok(await _palceService.GetAll(searchParams));

        [HttpGet]
        [Route("pictures/{uuid}")]
        [Consumes("multipart/form-data")]
        public async Task<IActionResult> GetPictures([FromRoute] string uuid) =>
            (await _palceService.GetPictures(uuid)).Select(file => File(file, "image/png", "img.png")).First();

        [HttpPost]
        [Route("new")]
        [Consumes("multipart/form-data")]
        public IActionResult AddNew(PlaceCreate place)
        {
            _palceService.CreatePlace(place);
            return NoContent();
        }

    }
}
