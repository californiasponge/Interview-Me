import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import '../assets/css/flashcards.css';
import * as fcservices from '../services/fcservices';

class FlashCards extends Component {
    state = {
        questions: []
    }

    componentWillMount () {
        fcservices
        .getAll().then(
            response =>{
                this.setState({questions: response.data.items})
                console.log(response.data.items)
            },
            err =>{
                console.log('error')
            }
        )
    }

    render() {
        return (
            <div className='flashcards'>
                                
                {this.state.questions.map((items, index) =>
                    <div key={items.id}>
                    {
                    (items.id == 46) &&  
                    <div className='row'>                   
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    {/* <p>Questions: </p> */}
                                    <p>{items.question}</p>
                                </div>

                                <div className="back">
                                    {/* <p>Answer: </p> */}
                                    {items.answer}
                                </div>
                            </div>
                        </div>
                    </div>                      
                    }
                    </div>
                )}
                                    
            </div>   
        )
    }
}
export default FlashCards;