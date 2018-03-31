using InterviewMe.Data;
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
    }
}
