using Microsoft.AspNetCore.Mvc;

namespace NightLife.API.Controllers
{
    public class CommentController : ControllerBase
    {
        [HttpPost]
        [Route("GetAll")]
        public async Task<IActionResult> GetAll()
        {
            return Ok();
        }

    }
}
