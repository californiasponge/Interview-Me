import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Ionicon from 'react-ionicons';
import '../assets/css/main.css';
import '../assets/css/quiz.css';

class Quiz extends Component {
    state = {
        questions: [],
        subject: null,
        didMount: false
    }

    getQuizzes = (subject) => {
        this.setState({didMount: true});
    };
    render() {
        return (
            <div className='quiz'>
                <section className="section section-dark">
                    <h2 className='sectiontitle'>Study Sets</h2>
                    <div className='row'>

                        <div className="actions card col-xs-2">
                            <div className="card-body">
                                <div className='icons'>
                                    <Ionicon
                                        icon="ios-add-circle-outline"
                                        fontSize="35px"
                                        color="rgb(52, 128, 124)"/>
                                </div>
                                <object>Add New Questions</object>
                            </div>
                        </div>

                        <div className="actions card col-xs-2">
                            <Link to='/flashcards'>
                                <div className="card-body">
                                    <div className='icons'>
                                        <Ionicon icon="ios-card-outline" fontSize="35px" color="rgb(52, 128, 124)"/>
                                    </div>
                                    <object>Flash Cards</object>
                                </div>
                            </Link>
                        </div>

                        <div className="actions card col-xs-2">
                            <div className="card-body">
                                <div className='icons'>
                                    <Ionicon icon="ios-paper-outline" fontSize="35px" color="rgb(52, 128, 124)"/>
                                </div>
                                <object>Quiz</object>
                            </div>
                        </div>

                        <div className="actions card col-xs-2">
                            <div className="card-body">
                                <div className='icons'>
                                    <Ionicon
                                        icon="ios-microphone-outline"
                                        fontSize="35px"
                                        color="rgb(52, 128, 124)"/>
                                </div>
                                <object>Audio Test</object>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="section section-light">
                    <Link to='/c' onClick={() => this.getQuizzes('C')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">C#</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                    <Link to='/angular.js' onClick={() => this.getQuizzes('Angular')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">Angular</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >

                    <Link to='/asp.net' onClick={() => this.getQuizzes('ASP.NET')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">ASP.NET Fundamentals</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                    <Link to='/react' onClick={() => this.getQuizzes('React')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >

                    <Link to='/sql server' onClick={() => this.getQuizzes('SQL Server')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">SQL Server 2016</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                    <Link to='/javascript' onClick={() => this.getQuizzes('JavaScript')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">JavaScript</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div>
                    </Link>

                    <Link to='/oop' onClick={() => this.getQuizzes('OOP')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">OOP</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div>
                    </Link >

                    <Link to='/data structures' onClick={() => this.getQuizzes('Data Structures')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">Data Structures</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div>
                    </Link >

                    <Link to='/ado.net' onClick={() => this.getQuizzes('ADO.NET')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">ADO.NET</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                    <Link to='/html' onClick={() => this.getQuizzes('HTML')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">HTML</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,class and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                    <Link to='/ajax' onClick={() => this.getQuizzes('Ajax')}>
                        <div className="card col-lg 3">
                            <div className="card-body">
                                <h5 className="card-title">Ajax</h5>
                                <p className="card-text">C# Fundamentals with C# 5.0. It’s designed to help you
                                    get everything you need to become a productive C# developer on the .NET
                                    platform, and covers things like the syntax of C#, which is similar to Java,
                                    JavaScript, and C++,classNamees and objects in C#, and types and assemblies.
                                </p>
                                <object href="#" className="card-link"><Ionicon icon="ios-star-outline" fontSize="20px" color="#3AAFA9"/></object>
                                <object href="#" className="card-link"><Ionicon icon="md-volume-up" fontSize="20px" color="#3AAFA9"/></object>
                            </div>
                        </div >
                    </Link >
                </div >

            </div >
        )
    }
}
export default Quiz;