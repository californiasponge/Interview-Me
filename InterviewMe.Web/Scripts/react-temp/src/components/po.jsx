import React, {Component} from 'react';
import '../assets/css/po.css';
import '../assets/css/main.css';
import Ionicon from 'react-ionicons';
import Am from '../assets/img/am.jpg';
import Kl from '../assets/img/kl.jpg';
import Ak from '../assets/img/ak.jpg';
import Lt from '../assets/img/LT.jpg';

class Po extends Component {
    render() {
        return (
            <div className='po'>
                <div className='row'>

                    <div className="card">
                        <div className="card-image">
                            <img src={Am}/>  
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>
                                    Arian Motavasseli
                                </h3>
                            </div>
                            <div className="card-exceprt">
                                <Ionicon icon="ios-mail-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    amotavasseli@gmail.com
                                </p>
                                <Ionicon icon="ios-call-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    (310)-591-6601
                                </p>
                                <Ionicon icon="logo-linkedin" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    <span className='linked'> linkedin.com/in/arianmotavasseli </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={Ak}/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>
                                    Andrew
                                    <br/>
                                    Kim
                                </h3>
                            </div>
                            <div className="card-exceprt">
                                <Ionicon icon="ios-mail-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    andrewkyukim89@gmail.com
                                </p>
                                <Ionicon icon="ios-call-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    (404)-333-1941
                                </p>
                                <Ionicon icon="logo-linkedin" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    linkedin.com/in/andrewkyukim
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={Kl} />
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>
                                    Karre 
                                    <br/>
                                    Lawson
                                </h3>
                            </div>
                            <div className="card-exceprt">
                                <Ionicon icon="ios-mail-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    karrelawson@gmail.com
                                </p>
                                <Ionicon icon="ios-call-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    (240)-249-7172
                                </p>
                                <Ionicon icon="logo-linkedin" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    linkedin.com/in/karrelawson
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={Lt}/>
                        </div>
                        <div className="card-body">
                            <div className="card-title">
                                <h3>
                                    Lawrence Tucker
                                </h3>
                            </div>
                            <div className="card-exceprt">
                                <Ionicon icon="ios-mail-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    ltimin@gmail.com
                                </p>
                                <Ionicon icon="ios-call-outline" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    (202)-200-0007
                                </p>
                                <Ionicon icon="logo-linkedin" fontSize="35px" color="#C9C9C9"/>
                                <p>
                                    <span className='linked'> linkedin.com/in/lawrencetucker </span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Po;
