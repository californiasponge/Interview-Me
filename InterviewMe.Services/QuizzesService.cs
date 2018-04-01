using InterviewMe.Data.Providers;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
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

        public List<Quiz> GetAll()
        {
            List<Quiz> quizzes = null;
            dataProvider.ExecuteCmd(
                "Quizzes_getall",
                null,
                delegate (IDataReader reader, short resultIndex)
                {
                    Quiz quiz = new Quiz();
                    quiz.Id = reader.GetInt32(0);
                    quiz.Question = reader.GetString(1);
                    quiz.Answer = reader.GetString(2);
                    quiz.Answers = JsonConvert.DeserializeObject(reader.GetString(3));
                    quiz.Subject = reader.GetString(4);
                    quiz.AnswerType = reader.GetString(5);

                    if (quizzes == null)
                    {
                        quizzes = new List<Quiz>();
                    }
                    quizzes.Add(quiz);
                });
            return quizzes;
        }
        public List <Quiz> GetBySubject(string subject)
        {
            List<Quiz> quizzes = null ;
            dataProvider.ExecuteCmd(
                "Quizzes_getbysubject",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@subject", subject);
                },
                delegate (IDataReader reader, short resultIndex)
                {
                    Quiz quiz = new Quiz();
                    quiz.Id = reader.GetInt32(0);
                    quiz.Question = reader.GetString(1);
                    quiz.Answer = reader.GetString(2);
                    quiz.Answers = JsonConvert.DeserializeObject(reader.GetString(3));
                    quiz.Subject = reader.GetString(4);
                    quiz.AnswerType = reader.GetString(5);

                    if (quizzes == null)
                    {
                        quizzes = new List<Quiz>();
                    }
                    quizzes.Add(quiz);
                });
            return quizzes;
        }

        public Quiz GetById(int id)
        {
            Quiz quiz = new Quiz();
            dataProvider.ExecuteCmd(
                "Quizzes_getbyid",
                delegate(SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                },
                delegate (IDataReader reader, short resultIndex)
                {
                    
                    quiz.Id = reader.GetInt32(0);
                    quiz.Question = reader.GetString(1);
                    quiz.Answer = reader.GetString(2);
                    quiz.Answers = JsonConvert.DeserializeObject(reader.GetString(3));
                    quiz.Subject = reader.GetString(4);
                    quiz.AnswerType = reader.GetString(5);
                });
            return quiz;
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
                    parameter.AddWithValue("@answers", JsonConvert.SerializeObject(req.Answers));
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

        public void Update(QuizUpdateRequest req)
        {
            dataProvider.ExecuteNonQuery(
               "Quizzes_update",
               delegate (SqlParameterCollection parameter)
               {
                   parameter.AddWithValue("@id", req.Id);
                   parameter.AddWithValue("@question", req.Question);
                   parameter.AddWithValue("@answer", req.Answer);
                   parameter.AddWithValue("@answers", JsonConvert.SerializeObject(req.Answers));
                   parameter.AddWithValue("@subject", req.Subject);
                   parameter.AddWithValue("@answer_type", req.AnswerType);
               });

        }

        public void Delete(int id)
        {
            dataProvider.ExecuteNonQuery(
                "Quizzes_delete",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                });
        }

        public List<Quiz> GetBySubject()
        {
            throw new NotImplementedException();
        }
    }
}
