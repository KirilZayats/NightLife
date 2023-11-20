using Microsoft.AspNetCore.Mvc;

namespace NightLife.API.Controllers
{
    [Route("[controller]")]
    [ApiController]

    public class CommentController : ControllerBase
    {
        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            return Ok();
        }

    }
}
