using InterviewMe.Data.Providers;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterviewMe.Services
{
    public class QuestionsService
    {
        readonly IDataProvider dataProvider; 

        public QuestionsService(IDataProvider dataProvider)
        {
            this.dataProvider = dataProvider;
        }

        public List<Questions> GetAll()
        {
            List<Questions> questions = null;

            dataProvider.ExecuteCmd(
                "Questions_getall",
                null,
                delegate (IDataReader reader, short resultIndex)
                {
                    var question = new Questions();
                    question.Id = reader.GetInt32(0);
                    question.Question = reader.GetString(1);
                    question.Subject = reader.GetString(2);

                    if (questions == null)
                    {
                        questions = new List<Questions>();
                    }
                    questions.Add(question);
                });
            return questions;
        }
        public List<Questions> GetBySubject(string sub)
        {
            List<Questions> questions = null;

            dataProvider.ExecuteCmd(
                "Questions_getbysubject",
                delegate(SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@subject", sub);
                },
                delegate (IDataReader reader, short resultIndex)
                {
                    var question = new Questions();
                    question.Id = reader.GetInt32(0);
                    question.Question = reader.GetString(1);
                    question.Subject = reader.GetString(2);

                    if (questions == null)
                    {
                        questions = new List<Questions>();
                    }
                    questions.Add(question);
                });
            return questions;
        }

        public Questions GetById(int id)
        {
            var question = new Questions();
            dataProvider.ExecuteCmd(
                "Questions_getbyid",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                },
                delegate (IDataReader reader, short resultIndex)
                {
                    
                    question.Id = reader.GetInt32(0);
                    question.Question = reader.GetString(1);
                    question.Subject = reader.GetString(2);
                });
            return question;
        }

        public int Create(QuestionRequest req)
        {
            int id = 0; 
            dataProvider.ExecuteNonQuery(
                "Questions_insert",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@question", req.Question);
                    parameter.AddWithValue("@subject", req.Subject);
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
        public void Update(QuestionsUpdateRequest req)
        {
            dataProvider.ExecuteNonQuery(
                "Question_update",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", req.Id);
                    parameter.AddWithValue("@question", req.Question); ;
                    parameter.AddWithValue("@subject", req.Subject);

                }
                );
            
        }
        public void Delete(int id)
        {
            dataProvider.ExecuteNonQuery(
                "Question_delete",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                }
                );

        }
    }
}
