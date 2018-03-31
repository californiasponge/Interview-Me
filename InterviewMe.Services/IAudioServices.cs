using System.Collections.Generic;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;

namespace InterviewMe.Services
{
    public interface IAudioServices
    {
        List<Audio> GetAll();
        Audio GetById(int id);
        int Create(AudioRequest req);
        void Update(AudioUpdateRequest req);
        void Delete(int id);
    }
}