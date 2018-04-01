import React, { Component } from 'react';
import * as QuizService from '../services/QuizService';
import '../assets/css/main.css';
import '../assets/css/takequiz.css';
import { TweenMax } from 'gsap';

class TakeQuiz extends Component {
    state = {
        viewCard: null,
    }
    results = [];

    componentWillMount() {
        console.log(this.props.match.path)
        const subject = this.props.match.path.slice(1);
        console.log(subject);
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
        this.setState({ viewCard: questions });
    }
    handleAnswer = (question, answer) => {
        console.log(question);
        console.log(answer);
        let id = question.id;
        const response = {
            userId: 1,
            questionId: question.id
        }
        if (question.answer == answer) {
            response.isCorrect = true;
        } else {
            response.isCorrect = false;
        }
        this.state.viewCard.shift();
        this.results.push(response);
        console.log(this.results);
        console.log(this.state.viewCard);
    }
    answeredQuestion = (answer) => {
        let el = document.querySelector('#transition-card');
        TweenMax.to(el, .5, { x: -window.innerWidth });
        setTimeout(() => { this.bringNewCard(); }, 2000);
    }
    bringNewCard = () => {
        let el = document.querySelector('#transition-card');
        TweenMax.to(el, .7, { x: -window.innerWidth * 2, xPercent: -50 });
    }

    render() {

        return (
            <div className='forMargins'>
                <div className='container'>
                    <div className='quiz-card shadow-the-back-sm' id='transition-card'>
                        {
                            this.state.viewCard && this.state.viewCard.map((question, index) =>
                                <div className='row'>
                                    <div key={question.id}>
                                        <div className='row'>
                                            <div className='col-lg-12 quiz-question'>
                                                <h3>Question: {question.question}
                                                </h3>
                                            </div>
                                        </div>
                                        {
                                            question.answers.map((answer, index) =>
                                                <div className='row'>
                                                    <div className='col-lg-12 quiz-answers'>
                                                        <li key={index}><a onClick={() => this.handleAnswer(question, answer)}><i>{answer}</i></a></li>
                                                    </div>
                                                    <button onClick={() => this.answeredQuestion('first')}>
                                                        Done
                                                        </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div >
        )
    }
}
export default TakeQuiz;