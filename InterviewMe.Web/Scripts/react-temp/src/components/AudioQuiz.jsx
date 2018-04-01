import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/audio.css';

class AudioQuiz extends Component {

    render() {
        return (
            <React.Fragment>
                <div className='btnContainer'>
                    <h3>{this.topic}</h3>
                    {/* <ProgressBar /> */}
                </div>

                <section className="section">
                    <div className='bg1 row'>
                        <h2 className='questionServed'>{this.question}</h2>
                        <div className="card mb-3">                
                            <div className="card-body">
                                <button 
                                type="button" 
                                disabled
                                className="btn-text"
                                onClick={this.toggleRec}> Start</button>
                                <button 
                                type="button"
                                disabled
                                className="btn-text"
                                onClick={this.toggleRec}> Stop</button>
                                <span 
                                content-editable 
                                style={{width:'200px', height: '200px', display:"block"}}> {} </span>
                                
                            </div>
                        </div>
                    </div>
                </section>

                <div className='btnContainer'>
                    <button
                    type="button"
                    style={{display: 'none'}}
                    className="card-text"
                    onClick={this.skipQuestion}> Skip >> </button>
                    <button
                    type="button"
                    style={{display: 'none'}}
                    className="card-text"
                    onClick={this.nextQuestion}> Sumbit </button>
                </div>
            </React.Fragment>
        )
    }
}
export default AudioQuiz;