using System.Collections.Generic;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;

namespace InterviewMe.Services
{
    public interface IUsersService
    {
        List<User> GetAll();
        User GetById(int id);
        int Create(UserRequest req);
        void Update(UserUpdateRequest req);
    }
}