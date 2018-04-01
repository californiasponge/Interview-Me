import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/audio.css';

class AudioQuiz extends Component {

    render() {
        return (
            <React.Fragment>
            <div className='btnContainer'>
                <h3>{this.topic}</h3>
                <ProgressBar />
            </div>

            <div className='btnContainer'>
            </div>

            <div className='btnContainer'>
                <button> Skip >> </button>
                <button> Sumbit </button>
            </div>
            </React.Fragment>
        )
    }
}
export default AudioQuiz;