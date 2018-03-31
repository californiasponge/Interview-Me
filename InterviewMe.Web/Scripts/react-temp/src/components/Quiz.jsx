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
            

            </div>
        )
    }
}
export default Quiz;