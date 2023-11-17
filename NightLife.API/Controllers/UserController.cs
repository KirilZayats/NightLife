using Microsoft.AspNetCore.Mvc;
using NightLife.API.Models;

namespace NightLife.API.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        [HttpPost]
        [Route("SignUp")]
        public async Task<IActionResult> SignUp([FromBody] SignUp user)
        {
            return Ok();
        }


        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] SignIn user)
        {
            return Ok();
        }

       
    }
}
