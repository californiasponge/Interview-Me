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
    public class UsersController : ApiController
    {
        readonly IUsersService usersService; 

        public UsersController(IUsersService usersService)
        {
            this.usersService = usersService;
        }

        [HttpGet, Route("api/users")]
        public HttpResponseMessage GetAll()
        {
            List<User> users = usersService.GetAll();
            ItemsResponse<User> response = new ItemsResponse<User>();
            response.Items = users;
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpGet, Route("api/users/{id")]
        public HttpResponseMessage GetById(int id)
        {
            User user = usersService.GetById(id);
            ItemResponse<User> response = new ItemResponse<User>();
            response.Item = user;
            return Request.CreateResponse(HttpStatusCode.OK, response);
        }

        [HttpPost, Route("api/users")]
        public HttpResponseMessage Create(UserRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            ItemResponse<int> response = new ItemResponse<int>();
            int id = usersService.Create(req);
            response.Item = id;
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }

        [HttpPut, Route("api/users/{id}")]
        public HttpResponseMessage Update(UserUpdateRequest req)
        {
            if (!ModelState.IsValid)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ModelState);
            }
            usersService.Update(req);
            var response = new SuccessResponse();
            return Request.CreateResponse(HttpStatusCode.Created, response);
        }




    }
}