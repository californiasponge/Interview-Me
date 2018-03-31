using InterviewMe.Models.Domain;

namespace InterviewMe.Services
{
    public interface IQuizzesService
    {
        int Create(QuizRequest req);
    }
}