using System.Collections.Generic;
using InterviewMe.Models.Domain;

namespace InterviewMe.Services
{
    public interface IAudioServices
    {
        List<Audio> GetAll();
        Audio GetById(int id);
    }
}