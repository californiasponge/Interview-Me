using System.Collections.Generic;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;

namespace InterviewMe.Services
{
    public interface IQuestionsService
    {
        int Create(QuestionRequest req);
        void Delete(int id);
        List<Questions> GetAll();
        Questions GetById(int id);
        List<Questions> GetBySubject(string sub);
        void Update(QuestionsUpdateRequest req);
    }
}