using NightLife.API.Models;

namespace NightLife.API.Repositories.User
{
    public interface IUserRepository
    {
        Task<bool> Check(string uuid);
        Task<SignUp> GetUser(string uuid);
        void AddUser(SignUp user);
    }
}
