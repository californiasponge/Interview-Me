using AngleSharp.Parser.Html;
using InterviewMe.Models.Domain;
using InterviewMe.Models.Requests;
using InterviewMe.Services;
using Newtonsoft.Json;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ScraperConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            string url = "https://career.guru99.com/top-27-ssis-interview-questions/";
            string type = "Question";
            ChromeOptions options = new ChromeOptions();
            options.AddArgument("--headless");
            options.AddArgument("--incognito");
            options.AddArgument("--ignore-certificate-errors");
            IWebDriver chromeDriver = new ChromeDriver(options);
            chromeDriver.Url = url;
            var html = chromeDriver.PageSource;
            var parser = new HtmlParser();
            var doc = parser.Parse(html);

            if (type == "Question")
            {
                var questions = doc.QuerySelectorAll("p > strong");

                for (int i = 0; i < questions.Length; i++)
                {
                    try
                    {
                        var question = new QuestionRequest();
                        string str = questions[i].TextContent;
                        if (str.Length > 3 && str.Contains("?"))
                        {
                            var result = str.Substring(str.IndexOf(")") + 1);
                            question.Question = result;
                            question.Subject = "SQL Server";
                            Create(question);
                        }

                    }
                    catch (SqlException sqlex) when (sqlex.Number == 2601)
                    {
                        continue;
                    }
                }
                void Create(QuestionRequest req)
                {
                    using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InterviewMeConnection"].ConnectionString))
                    {
                            SqlCommand cmd = con.CreateCommand();
                            cmd.CommandText = "Questions_insert";
                            cmd.CommandType = System.Data.CommandType.StoredProcedure;
                            con.Open();
                            cmd.Parameters.AddWithValue("@question", req.Question);
                            cmd.Parameters.AddWithValue("@subject", req.Subject);
                            cmd.Parameters.Add("@id", SqlDbType.Int).Direction = ParameterDirection.Output;
                            cmd.ExecuteNonQuery();
                    }
                }
            }

            else
            {
                var listings = doc.QuerySelectorAll(".mtq_question");
                void Create(QuizRequest req)
                {
                    using (var con = new SqlConnection(ConfigurationManager.ConnectionStrings["InterviewMeConnection"].ConnectionString))
                    {
                        SqlCommand cmd = con.CreateCommand();
                        cmd.CommandText = "Quizzes_insert";
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;

                        con.Open();
                        cmd.Parameters.AddWithValue("@question", req.Question);
                        cmd.Parameters.AddWithValue("@answer", req.Answer);
                        cmd.Parameters.AddWithValue("@answers", JsonConvert.SerializeObject(req.Answers));
                        cmd.Parameters.AddWithValue("@subject", req.Subject);
                        cmd.Parameters.AddWithValue("@answer_type", req.AnswerType);
                        cmd.Parameters.Add("@id", SqlDbType.Int).Direction = ParameterDirection.Output;
                        cmd.ExecuteNonQuery();
                    }
                }

                for (int i = 0; i < listings.Length; i++)
                {
                    var quiz = new QuizRequest();
                    var listing = listings[i];
                    quiz.Question = listing.QuerySelector(".mtq_question_text").TextContent;

                    var answers = new List<string>();
                    var choices = listing.QuerySelectorAll(".mtq_clickable");
                    for (int j = 0; j < choices.Length; j++)
                    {
                        answers.Add(choices[j].QuerySelector("div.mtq_answer_text").TextContent);
                        if (choices[j].QuerySelector("div.mtq_correct_marker") != null)
                        {
                            quiz.Answer = choices[j].QuerySelector("div.mtq_answer_text").TextContent;
                        }
                    }
                    quiz.Answers = answers;
                    quiz.AnswerType = "Multiple Choice";
                    quiz.Subject = "JavaScript";
                    Create(quiz);
                }
            }

        }
    }
}
