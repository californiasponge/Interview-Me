using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;
using System.Collections.Generic;

namespace InterviewMe.Services
{
    public interface IQuizzesService
    {
        List<Quiz> GetAll();
        Quiz GetById(int id);
        int Create(QuizRequest req);
        void Update(QuizUpdateRequest req);
        void Delete(int id);
    }
}