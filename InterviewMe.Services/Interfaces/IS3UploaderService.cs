using System.Web;
using InterviewMe.Models.Domain;

namespace InterviewMe.Services
{
    public interface IS3UploaderService
    {
        UploadCompletedModel Upload(HttpPostedFile file);
    }
}