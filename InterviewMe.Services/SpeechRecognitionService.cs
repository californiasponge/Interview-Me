using InterviewMe.Data.Providers;
using InterviewMe.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Speech.Recognition;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Services
{
    public class SpeechRecognitionService
    {
        readonly IConfiguration config;
        readonly IDataProvider dataProvider;
        readonly IS3UploaderService s3;

        public SpeechRecognitionService (IConfiguration config, IDataProvider dataProvider, IS3UploaderService s3)
        {
            this.dataProvider = dataProvider;
            this.config = config;
            this.s3 = s3;
        }

        Request
            HttpContent.
            Read Header read incoming header from api controller
        public 
    }
}
