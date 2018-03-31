using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Models.Requests
{
    public class AudioRequest
    {
        public string Url { get; set; }
        public int AudioQuestionId { get; set; }
        public int? Rating { get; set; }
        public int? TotalRatings { get; set; }
    }
}
