import React, {Component} from 'react';
import Navi from './Navbar';
import '../css/quiz.css'

class Quiz extends Component {
    state = {
        questions: []
    }

    render() {
        return (
            <div>
                <Navi/>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Cras justo odio</li>
                </ul>

                <div className="blog-card spring-fever">
                    <div className="title-content">
                        <h3>SPRING FEVER</h3>
                        <hr/>
                        <div className="intro">Yllamco laboris nisi ut aliquip ex ea commodo.</div>
                    </div>

                    <div className="card-info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                    </div>

                    <div className="utility-info">
                        <ul className="utility-list">
                            <li className="comments">12</li>
                            <li className="date">03.12.2015</li>
                        </ul>
                    </div>

                    <div className="gradient-overlay"></div>
                    <div className="color-overlay"></div>
                </div>

            </div>
        )
    }
}
export default Quiz;