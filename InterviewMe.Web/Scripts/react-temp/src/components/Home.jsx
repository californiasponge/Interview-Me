import React, {Component} from 'react';
import '../assets/css/main.css';
import '../assets/css/home.css';
import Ready from '../assets/img/AreYouReady.png';
import ReadyVideo from '../assets/video/Interview-Me.mp4'
import Po from '../components/po';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <div className='row'>
                    <div className='landing'>
                        <div className='ready'>
                            <img src={Ready} alt=''/>
                        </div>
                        <div className='ready-video'>
                            <video className='active-video' autoPlay loop muted>
                                <source src={ReadyVideo} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                </div>

                <section className="section section-dark">
                    <h2>practice Practice PRACTICE</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>
                </section>

                <section className="section section-light">
                    <h2>Lets meet up!</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>
                </section>

                <section className="section section-dark">            
                    <h2>Interview Us</h2>
                        
                        <Po />
                                                
                </section>

            </div >
        )
    }
}
export default Home;