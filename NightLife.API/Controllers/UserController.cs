using Microsoft.AspNetCore.Mvc;
using NightLife.API.Models;
using NightLife.API.Services.User;

namespace NightLife.API.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService) {
            _userService = userService;
        }


        [HttpPost]
        [Route("SignUp")]
        public IActionResult SignUp([FromBody] SignUp user)
        {
            _userService.AddUser(user);
            return Ok();
        }

        [HttpPost]
        [Route("Check")]
        public async Task<IActionResult> Check([FromBody] SignIn user) =>
            Ok(await _userService.Check(user.Sub));

        [HttpPost]
        [Route("SignIn")]
        public async Task<IActionResult> SignIn([FromBody] SignIn user) =>
           Ok(await _userService.GetUser(user.Sub));
               
    }
}
