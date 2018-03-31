import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/home.css';
import Ready from '../assets/img/AreYouReady.png';
import ReadyVideo from '../assets/video/Interview-Me.mp4'

class Home extends Component {
    render() {
        return (
            <div>
                <div className='row'>
                    <div className='landing'>
                        <div className='ready'>
                            <img src={Ready} alt='' />
                        </div>
                        <div className='ready-video'>
                            <video className='active-video' autoPlay loop muted>
                                <source src={ReadyVideo} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="match-stats card">
                        <h4 className="card-title">Leaderboard</h4>
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped">
                                    <thead>
                                        <tr className='headings'>
                                            <th>#</th>
                                            <th>Username</th>
                                            <th>Total Score</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='rankings' role="row">
                                            <td></td>
                                            <td>SomeGuy</td>
                                            <td>100</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;