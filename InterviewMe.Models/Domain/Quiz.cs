using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Models.Domain
{
    public class Quiz
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }
        public object Answers { get; set; }
        public string Subject { get; set; }
        public string AnswerType { get; set; }
    }
}
