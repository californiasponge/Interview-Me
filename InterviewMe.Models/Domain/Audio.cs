using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Models.Domain
{
    public class Audio
    {
        public int Id { get; set; }
        public string Url { get; set; }
        public int AudioQuestionId { get; set; }
        public int? Rating { get; set; }
        public int? TotalRatings { get; set; }
    }
}
