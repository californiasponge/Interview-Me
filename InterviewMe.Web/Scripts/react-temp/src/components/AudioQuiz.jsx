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
                        <h2 className='sectionName'>Interview Me</h2>
                        <div className="card mb-3">                
                            <div className="card-body">
                                <h5 className="card-title">Study Sets</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                            </div>
                                                                                   
                        </div>
                    </div>
                </section>

            <div className='btnContainer'>
                <button> Skip >> </button>
                <button> Sumbit </button>
            </div>
            </React.Fragment>
        )
    }
}
export default AudioQuiz;