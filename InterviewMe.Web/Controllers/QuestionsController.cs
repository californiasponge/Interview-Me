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
    public class QuestionsController : ApiController
    {
        readonly IQuestionsService questionsService;

        public QuestionsController(IQuestionsService questionsService)
        {
            this.questionsService = questionsService;
        }

        [HttpGet, Route("api/questions")]
        public HttpResponseMessage GetAll()
        {
            List<Questions> questions = questionsService.GetAll();

            ItemsResponse<Questions> response = new ItemsResponse<Questions>();
            response.Items = questions;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpGet, Route("api/questions/{id}")]
        public HttpResponseMessage GetById(int id)
        {
            Questions question = questionsService.GetById(id);

            ItemResponse<Questions> response = new ItemResponse<Questions>();
            response.Item = question;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
        [HttpGet, Route("api/questions/{subject}")]
        public HttpResponseMessage GetBySubject(string subject)
        {
            List<Questions> questions = questionsService.GetBySubject(subject);

            ItemsResponse<Questions> response = new ItemsResponse<Questions>();
            response.Items = questions;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost, Route("api/questions")]
        public HttpResponseMessage Create(QuestionRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            int id = questionsService.Create(req);
            ItemResponse<int> response = new ItemResponse<int>();

            response.Item = id;
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }

        [HttpPut, Route("api/questions/{id}")]
        public HttpResponseMessage Update(QuestionsUpdateRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            questionsService.Update(req);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
        [HttpDelete, Route("api/questions/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            questionsService.Delete(id);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }


    }
}