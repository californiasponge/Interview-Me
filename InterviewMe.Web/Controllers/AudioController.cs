using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;
using InterviewMe.Models.Responses;
using InterviewMe.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InterviewMe.Web.Controllers
{
    [AllowAnonymous]
    public class AudioController : ApiController
    {
        readonly IAudioServices audioServices; 

        public AudioController(IAudioServices audioServices)
        {
            this.audioServices = audioServices;
        }

        public HttpResponseMessage GetAll()
        {
            List<Audio> audio = audioServices.GetAll();
            ItemsResponse<Audio> response = new ItemsResponse<Audio>();
            response.Items = audio;
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        public HttpResponseMessage GetById(int id)
        {
            Audio audio = audioServices.GetById(id);
            ItemResponse<Audio> response = new ItemResponse<Audio>();
            response.Item = audio;
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
        
        public HttpResponseMessage Create(AudioRequest req)
        {
            if (!ModelState.IsValid)
            {
                Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            int id = audioServices.Create(req);
            ItemResponse<int> response = new ItemResponse<int>();
            response.Item = id;
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }

        public HttpResponseMessage Update(AudioUpdateRequest req)
        {
            if (!ModelState.IsValid)
            {
                Request.CreateErrorResponse(HttpStatusCode.OK, ModelState);
            }
            audioServices.Update(req);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        public HttpResponseMessage Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                Request.CreateErrorResponse(HttpStatusCode.OK, ModelState);
            }
            audioServices.Delete(id);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

    }
}