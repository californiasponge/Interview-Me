using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Models.Domain
{
    public class QuizRequest
    {
        public string Question { get; set; }
        public string Answer { get; set; }
        public List<string> Answers { get; set; }
        public string Subject { get; set; }
        public string AnswerType { get; set; }
    }
}
