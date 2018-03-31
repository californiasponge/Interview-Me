using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Services.Interfaces
{
    public interface IConfiguration
    {
        string AWSAccessKey { get; }
        string AWSSecretKey { get; }
    }
}
