import React, { Component } from 'react';
import * as QuizService from '../services/QuizService';
import '../assets/css/main.css';
import '../assets/css/takequiz.css';
import { TweenMax } from 'gsap';
import { Link } from 'react-router-dom';

class TakeQuiz extends Component {
    state = {
        viewCard: null,
    }
    results = [];

    componentWillMount() {
        const subject = this.props.match.path.slice(1);
        QuizService.getSubject(subject).then(
            response => {
                let e = response.data.items;
                this.showCards(e);
            }
        )
    }

    shuffle = items => {
        let j = 0;
        let temp = 0;
        for (let i = items.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1));
            temp = items[i];
            items[i] = items[j];
            items[j] = temp;
        }
    }

    showCards = (questions) => {
        for (let i = 0; i < questions.length; i++) {
            this.shuffle(questions[i].answers);
        }
        this.shuffle(questions);
        this.questionDeck = questions;
        const firstQuestion = this.questionDeck.shift();
        this.setState({ viewCard: firstQuestion });
    }
    handleAnswer = (question, answer) => {
        let el = document.querySelector('#transition-card');
        TweenMax.to(el, .05, { x: -window.innerWidth });
        setTimeout(() => { this.bringNewCard(); }, 450);

        setTimeout(() => {
            let id = question.id;
            const response = {
                userId: 1,
                questionId: question.id
            }
            if (question.answer === answer) {
                response.isCorrect = true;
            } else {
                response.isCorrect = false;
            }
            this.results.push(response);
            if (this.questionDeck.length != 0) {
                const nextQuestion = this.questionDeck.shift();
                this.setState({
                    viewCard: nextQuestion
                });
            } else {
                let correct = 0;
                for (let i = 0; i < this.results.length; i++) {
                    if (this.results[i].isCorrect)
                        correct++;

                }
                let finalScore = this.results.length / correct;
                console.log(finalScore);
                this.setState({
                    viewCard: finalScore
                });
            };
        }, 200)

    }
    answeredQuestion = (answer) => {
        let el = document.querySelector('#transition-card');
        TweenMax.to(el, .1, { x: -window.innerWidth });
        setTimeout(() => { this.bringNewCard(); }, 2000);
    }
    bringNewCard = () => {
        let el = document.querySelector('#transition-card');
        TweenMax.to(el, .1, { x: window.innerWidth / 2, xPercent: -58 });
    }

    render() {

        return (
            <div className='forMargins'>
                <div className='container'>
                    <div className='quiz-card shadow-the-back-sm' id='transition-card'>

                        {
                            this.state.viewCard &&
                            <div>
                                <div className='d-flex justify-content-end button-quit'>
                                    <Link to='/home'><button className='btn btn-danger '>Quit?</button></Link>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12 quiz-question'>
                                        <h3 className='tq-question'>{this.state.viewCard.question}
                                        </h3>
                                    </div>
                                </div>
                                <div className='row'>
                                    {
                                        this.state.viewCard.answers.map((answer, index) =>
                                            <div className='col-lg-12 quiz-answers' key={index}>
                                                <h2 onClick={() => this.handleAnswer(this.state.viewCard, answer)} className='tq-answer'>{answer}</h2>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div >
        )
    }
}
export default TakeQuiz;