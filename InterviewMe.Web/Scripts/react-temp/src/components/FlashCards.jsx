import React, {Component} from 'react';
import '../assets/css/flashcards.css';
import * as fcservices from '../services/fcservices';

class FlashCards extends Component {
    state = {
        cards: null,
        cc: 0
    }

    componentWillMount() {
        fcservices
            .getAll().then(
            response => {
                this.cards = response.data.items;
                this.setState({ currentCard: this.cards[this.state.cc]});
                console.log(response.data.items)
            },
            err => {
                console.log('error')
            }
            )
    }
    handleLeft = () => {
        this.setState({
            cc: this.state.cc - 1 < 0 ? this.state.cc : this.state.cc - 1,
            currentCard: this.cards[this.state.cc]
        })
        console.log(this.state.cc);
    }
    handleRight = () => {
        this.setState({
            cc: this.state.cc + 2 > this.cards ? this.state.cc : this.state.cc + 1,
            currentCard: this.cards[this.state.cc]
        })
        console.log(this.state.cc);
    }

    render() {
        return (
            <div className='flashcards'>
                {
                    this.state.currentCard &&
                    <div className='row'>
                        <div className="card">
                            <div className="content">
                                <div className="front">
                                    {/* <p>Questions: </p> */}
                                    <p>{this.state.currentCard.question}</p>
                                </div>

                                <div className="back">
                                    {/* <p>Answer: </p> */}
                                    {this.state.currentCard.answer}
                                </div>
                            </div>
                        </div>
                        <span><button type="button" className="btn btn-primary" onClick={this.handleLeft}>L</button><button type="button" className="btn btn-primary" onClick={this.handleRight}>R</button></span>
                    </div>

                }

             

            </div>
        )
    }
}
export default FlashCards;