using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace InterviewMe.Web.Controllers
{
    [AllowAnonymous]
    public class SpeechController : ApiController
    {
       
        // POST api/<controller>
        public void Post([FromBody]string value)
        {
            var myReq = new Request()
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }
        
    }
}