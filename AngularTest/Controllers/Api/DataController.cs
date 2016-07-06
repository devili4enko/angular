using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Web.Http;

namespace AngularTest.Controllers.Api
{
    public class DataController : ApiController
    {
        [Route("api/user")]
        public string GetUser()
        {
            Thread.Sleep(3000);
            return "User" + Guid.NewGuid();
        }
    }
}
