using NightLife.API.Models;

namespace NightLife.API.Services.User
{
    public interface IUserService
    {
        Task<bool> Check(string uuid);
        void AddUser(SignUp user);
        Task<SignUp> GetUser(string uuid);
    }
}
