import React, { Component } from 'react';
import '../assets/css/main.css';
import '../assets/css/home.css';
import Ready from '../assets/img/AreYouReady.png';
import ReadyVideo from '../assets/video/Interview-Me.mp4'

class Home extends Component {
    render() {
        return (
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
                              
                <section className="section section-dark">   
                <h2>Study Sets</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>                              
                </section>

                <section className="section section-light">
                    <h2 className='sectionName'></h2>           
                    <div class="card mb-3">
                        <img class="card-img-top" src="..." alt="Card image cap"/>
                        <div class="card-body">
                        <h5 class="card-title">Audio Page</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            </p>                            
                        </div>
                    </div>        
                </section>

                <section className="section section-dark">   
                <h2>Schedule MeetUps</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium,
                        quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi
                    </p>                              
                </section>              
            </div >
        )
    }
}
export default Home;