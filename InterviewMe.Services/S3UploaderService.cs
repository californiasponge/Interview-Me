using Amazon;
using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using InterviewMe.Data.Providers;
using InterviewMe.Models.Domain;
using InterviewMe.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace InterviewMe.Services
{
    public class S3UploaderService : IS3UploaderService
    {
        readonly IConfiguration config;
        readonly IDataProvider dataProvider;

        public S3UploaderService(IDataProvider dataProvider, IConfiguration config)
        {
            this.dataProvider = dataProvider;
            this.config = config;
        }

        public UploadCompletedModel Upload(HttpPostedFile file)
        {

            string fileUrl = null;

            using (AmazonS3Client client = new AmazonS3Client(config.AWSAccessKey,
                                                              config.AWSSecretKey,
                                                              Amazon.RegionEndpoint.USEast1))
            {
                PutObjectRequest request = new PutObjectRequest();
                string keyId = Guid.NewGuid().ToString();
                request.Key = keyId;
                request.InputStream = file.InputStream;
                request.BucketName = "interview-me-audio";
                request.ContentType = file.ContentType;
                client.PutObject(request);
                fileUrl = "	https://s3-us-west-1.amazonaws.com/interview-me-audio/" + keyId;
            }
            SqlParameter idParam = null;

            dataProvider.ExecuteNonQuery(
                "Audio_insert",
                delegate (SqlParameterCollection parameters)
                {
                    parameters.AddWithValue("@url", fileUrl);
                    idParam = parameters.Add("@id", SqlDbType.Int);
                    idParam.Direction = ParameterDirection.Output;
                });

            return new UploadCompletedModel // property initialization syntax
            {
                Id = (int)idParam.Value,
                Url = fileUrl
            };
        }
    }
}
