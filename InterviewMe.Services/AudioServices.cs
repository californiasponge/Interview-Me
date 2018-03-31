using InterviewMe.Data;
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
    public class AudioServices : IAudioServices
    {
        readonly IDataProvider dataProvider;

        public AudioServices(IDataProvider dataProvider)
        {
            this.dataProvider = dataProvider;
        }

        public List<Audio> GetAll()
        {
            List<Audio> list = null;
            dataProvider.ExecuteCmd(
                "Audio_getall",
                null,
                delegate (IDataReader reader, short resultIndex)
                {
                    Audio audio = new Audio();
                    audio.Id = reader.GetInt32(0);
                    audio.Url = reader.GetString(1);
                    audio.AudioQuestionId = reader.GetInt32(2);
                    audio.Rating = reader.GetSafeInt32(3);
                    audio.TotalRatings = reader.GetSafeInt32(4);
                   

                    if (list == null)
                    {
                        list = new List<Audio>();
                    }
                    list.Add(audio);
                });
            return list;

        }

        public Audio GetById(int id)
        {
            Audio audio = new Audio();
            dataProvider.ExecuteCmd(
                "Audio_getbyid",
                delegate(SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                },
                delegate (IDataReader reader, short resultIndex)
                {
                    audio.Id = reader.GetInt32(0);
                    audio.Url = reader.GetString(1);
                    audio.AudioQuestionId = reader.GetInt32(2);
                    audio.Rating = reader.GetSafeInt32(3);
                    audio.TotalRatings = reader.GetSafeInt32(4);
                });
            return audio;

        }

        public int Create(AudioRequest req)
        {
            int id = 0; 
            dataProvider.ExecuteNonQuery(
                "Audio_insert",
                delegate(SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@url", req.Url);
                    parameter.AddWithValue("@audio_question_id", req.AudioQuestionId);
                    parameter.AddWithValue("@rating", req.Rating);
                    parameter.AddWithValue("@total_ratings", req.TotalRatings);
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

        public void Update(AudioUpdateRequest req)
        {
            dataProvider.ExecuteNonQuery(
                "Audio_update",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", req.Id);
                    parameter.AddWithValue("@url", req.Url);
                    parameter.AddWithValue("@audio_question_id", req.AudioQuestionId);
                    parameter.AddWithValue("@rating", req.Rating);
                    parameter.AddWithValue("@total_ratings", req.TotalRatings);
                });
        }

        public void Delete(int id)
        {
            dataProvider.ExecuteNonQuery(
                "Audio_delete",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);
                });
        }
    }
}
