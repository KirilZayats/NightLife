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
        public async Task<IActionResult> GetAll([FromQuery] SearchParams searchParams)=>
            Ok(_palceService.GetAll(searchParams));

        [HttpGet]
        [Route("pictures/{uuid}")]
        public async Task<IActionResult> GetPictures([FromRoute] string uuid) =>
            Ok(await _palceService.GetPictures(uuid));

        [HttpPost]
        [Route("new")]
        public IActionResult AddNew([FromBody] PlaceCreate place)
        {
            _palceService.CreatePlace(place);
            return NoContent();
        }

    }
}
