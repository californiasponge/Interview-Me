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
    public class UsersService : IUsersService
    {
        readonly IDataProvider dataProvider; 

        public UsersService(IDataProvider dataProvider)
        {
            this.dataProvider = dataProvider;
        }

        public List<User> GetAll()
        {
            List<User> users = null;

            dataProvider.ExecuteCmd(
                "Users_getall",
                null,
                delegate (IDataReader reader, short resultIndex)
                {
                    User user = new User();
                    user.Id = reader.GetInt32(0);
                    user.FirstName = reader.GetString(1);
                    user.LastName = reader.GetString(2);
                    user.Email = reader.GetString(3);
                    user.Password = reader.GetString(4);
                    user.Admin = reader.GetBoolean(5);
                    if(users == null)
                    {
                        users = new List<User>();
                    }
                    users.Add(user);
                });
            return users;
        }

        public User GetById(int id)
        {
            User user = null; 
            dataProvider.ExecuteCmd(
                "Users_getbyid",
                delegate(SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", id);

                },
                delegate (IDataReader reader, short resultIndex)
                {
                    user = new User();
                    user.Id = reader.GetInt32(0);
                    user.FirstName = reader.GetString(1);
                    user.LastName = reader.GetString(2);
                    user.Email = reader.GetString(3);
                    user.Password = reader.GetString(4);
                    user.Admin = reader.GetBoolean(5);
                });
            return user;
        }

        public int Create(UserRequest req)
        {
            int id = 0;
            dataProvider.ExecuteNonQuery(
                "Users_insert",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@first_name", req.FirstName);
                    parameter.AddWithValue("@last_name", req.LastName);
                    parameter.AddWithValue("@email", req.Email);
                    parameter.AddWithValue("@password", req.Password);
                    parameter.AddWithValue("@admin", req.Admin);
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
        public void Update(UserUpdateRequest req)
        {
            dataProvider.ExecuteNonQuery(
                "Users_insert",
                delegate (SqlParameterCollection parameter)
                {
                    parameter.AddWithValue("@id", req.Id);
                    parameter.AddWithValue("@first_name", req.FirstName);
                    parameter.AddWithValue("@last_name", req.LastName);
                    parameter.AddWithValue("@email", req.Email);
                    parameter.AddWithValue("@password", req.Password);
                    parameter.AddWithValue("@admin", req.Admin);
                }
                );
        }
    }
}
