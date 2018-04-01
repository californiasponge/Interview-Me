import React, { Component } from 'react';
import * as QuizService from '../services/QuizService';
import '../assets/css/main.css';
import '../assets/css/takequiz.css';

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

        //let question = [Math.floor(Math.random() * questions.length)];
        // console.log(question);
        // let answers = [Math.floor(Math.random() * question.answers.length)]
        // console.log(answers);

    }
    handleAnswer = (question, answer) => {
        console.log(question);
        console.log(answer);
        let id = question.id;
        const response = {
            userId: 1,
            questionId: question.id
        }
        if(question.answer == answer){
            response.isCorrect = true;
        } else {
            response.isCorrect = false;
        }
        this.state.viewCard.shift();
        this.results.push(response);
        console.log(this.results);
        console.log(this.state.viewCard);


        
        
        
    }

    render() {

        return (
            <div>
                {
                    this.state.viewCard && this.state.viewCard.map((question, index) => 
                        <div key={question.id}>
                            <h3>Question: {question.question}
                            </h3>
                            {
                                question.answers.map((answer, index) =>
                                
                                    <li key={index}><a onClick= {() => this.handleAnswer(question, answer)}><i>{answer}</i></a></li>
                            )
                            }
                            
                        </div> 
                    )
                    
                }

            </div>
        )
    }

}
export default TakeQuiz;