using InterviewMe.Data.Providers;
using InterviewMe.Models.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Services
{
    public class QuizzesService : IQuizzesService
    {
        readonly IDataProvider dataProvider;
        public QuizzesService(IDataProvider dataProvider)
        {
            this.dataProvider = dataProvider;
        }

        public int Create(QuizRequest req)
        {
            int id = 0;
            dataProvider.ExecuteNonQuery(
                "Quizzes_insert",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@question", req.Question);
                    parameter.AddWithValue("@answer", req.Answer);
                    parameter.AddWithValue("@answers", req.Answers.ToString());
                    parameter.AddWithValue("@subject", req.Subject);
                    parameter.AddWithValue("@answer_type", req.AnswerType);
                    SqlParameter newId = new SqlParameter("@id", SqlDbType.Int);
                    newId.Direction = ParameterDirection.Output;
                    parameter.Add(newId);
                }, returnParameters: delegate (SqlParameterCollection param)
                {
                    id = (int)param["@id"].Value;
                }
                );
            return id;
        }
    }
}
