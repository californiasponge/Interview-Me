import React, { Component } from 'react';
import * as QuizService from '../services/QuizService';
import '../assets/css/main.css';
import '../assets/css/takequiz.css';

class TakeQuiz extends Component {
    state = {
        viewCard: null
    }
    componentWillMount() {
        console.log(this.props.match.path)
        const subject = this.props.match.path.slice(1);
        console.log(subject);
        QuizService.getSubject(subject).then(
            response => {
                let e = response.data.items;
                console.log(e);
                this.showCards(e);
            }
        )
    }

    showCards = (questions) => {
        let question = [Math.floor(Math.random() * questions.length)];
        // console.log(question);
        // let answers = [Math.floor(Math.random() * question.answers.length)]
        // console.log(answers);
        this.setState({ viewCard: question })
    }

    render() {

        return (
            <div>
                <h5>Hello</h5>
            </div>
        )
    }
}
export default TakeQuiz;