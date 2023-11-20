using NightLife.API.Models;
using NightLife.API.Repositories.User;

namespace NightLife.API.Services.User
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        public UserService(IUserRepository userRepository) {
            _repository = userRepository;
        }

        public void AddUser(SignUp user)=>
            _repository.AddUser(user);

        public async Task<bool> Check(string uuid) =>
            await _repository.Check(uuid);

        public async Task<SignUp> GetUser(string uuid)=>
            await _repository.GetUser(uuid);
    }
}
