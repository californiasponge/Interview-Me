import React, {Component} from 'react';
import '../assets/css/main.css';
import '../assets/css/quiz.css';
import Ionicon from 'react-ionicons';
import $ from 'jquery';

class Quiz extends Component {
    state = {
        questions: []
    }

    render() {
        return (
            <div className='quiz'>
                <section className="section section-dark">
                    <h2>Lets Get It!</h2>
                    <div className='row'>                   
                        <div class="slideUp actions card col-xs-3">
                            <div class="card-body">
                                <div className='icons'>
                                <Ionicon icon="ios-add-circle-outline" fontSize="35px" color="#4257b2"/>
                                </div>
                                <a>Add New Questions</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-3">
                            <div class="card-body">
                                <div className='icons'>
                                <Ionicon icon="ios-card-outline" fontSize="35px" color="#4257b2"/>
                                </div>
                                <a>Flash Cards</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-3">
                            <div class="card-body">
                                <div className='icons'>
                                <Ionicon icon="ios-paper-outline" fontSize="35px" color="#4257b2"/>
                                </div>
                                <a>Quiz</a>
                            </div>
                        </div>
                        <div class="actions card col-xs-3">
                            <div class="card-body">
                                <div className='icons'>
                                <Ionicon icon="ios-microphone-outline" fontSize="35px" color="#4257b2"/>
                                </div>
                                <a>Audio Test</a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section section-light">
                    <h2 className='sectionName'>Study Sets</h2>
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">C# / ASP.NET Fundamentals</h5>
                            <p class="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classes and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" class="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#4257b2"/></a>
                            <a href="#" class="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#4257b2"/></a>
                        </div>
                    </div>

                     <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title"> Angular</h5>
                            <p class="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classes and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" class="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#4257b2"/></a>
                            <a href="#" class="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#4257b2"/></a>
                        </div>
                    </div>

                     <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">React</h5>
                            <p class="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classes and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" class="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#4257b2"/></a>
                            <a href="#" class="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#4257b2"/></a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">React Native</h5>
                            <p class="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classes and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" class="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#4257b2"/></a>
                            <a href="#" class="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#4257b2"/></a>
                        </div>
                    </div>

                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">SQL Server 2016</h5>
                            <p class="card-text">C# Fundamentals with C# 5.0. It’s designed to help you get everything you need to become a productive C# developer on the .NET platform, and covers things like the syntax of C#, which is similar to Java, JavaScript, and C++, classes and objects in C#, and types and assemblies.
                            </p>
                            <a href="#" class="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#4257b2"/></a>
                            <a href="#" class="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#4257b2"/></a>
                        </div>
                    </div>

                </section>

            </div>
        )
    }
}
export default Quiz;