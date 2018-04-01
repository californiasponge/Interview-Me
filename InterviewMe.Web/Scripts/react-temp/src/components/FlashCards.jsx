import React, {Component} from 'react';
import Ionicon from 'react-ionicons';
import '../assets/css/flashcards.css';
import * as fcservices from '../services/fcservices';

class FlashCards extends Component {
    state = {
        questions: []
    }

    componentDidMount () {
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
                                
                {this.state.questions.map((items) =>

                    <div key={items.id}>
                    {
                        (items.subject == 'ASP.NET') &&  
                    <div className='row'>                   
                    <label>                            
                        <input type="checkbox"/>
                        <div className="card">
                            <div className="front">
                                <h3>Question: </h3>
                                <p>{items.question}</p>
                            </div>

                            <div className="back">
                                <h3>Answer: </h3>
                                <p>{items.answer}</p>
                            </div>
                        </div>                            
                    </label> 
                    </div>                      
                    }
                    </div>
                )}
                                    
            </div>   
        )
    }
}
export default FlashCards;