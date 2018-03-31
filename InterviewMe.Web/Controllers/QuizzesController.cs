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
    public class QuizzesController : ApiController
    {
        readonly IQuizzesService qService; 

        public QuizzesController(IQuizzesService qService)
        {
            this.qService = qService;
        }

        [HttpGet, Route("api/quizzes")]
        public HttpResponseMessage GetAll()
        {
            List<Quiz> quizzes = qService.GetAll();

            ItemsResponse<Quiz> response = new ItemsResponse<Quiz>();
            response.Items = quizzes;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpGet, Route("api/quizzes/{id}")]
        public HttpResponseMessage GetById(int id)
        {
            Quiz quiz = qService.GetById(id);

            ItemResponse<Quiz> response = new ItemResponse<Quiz>();
            response.Item = quiz;

            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost, Route("api/quizzes")]
        public HttpResponseMessage Create(QuizRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }

            int id = qService.Create(req);
            ItemResponse<int> response = new ItemResponse<int>();

            response.Item = id;
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }

        [HttpPut, Route("api/quizzes/{id}")]
        public HttpResponseMessage Update(QuizUpdateRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            qService.Update(req);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }
        [HttpDelete, Route("api/quizzes/{id}")]
        public HttpResponseMessage Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            qService.Delete(id);
            SuccessResponse response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

    }
}