import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/css/navbar.css';
import Logo from '../assets/img/InterviewMe-Logo.png';
import Ionicon from 'react-ionicons';

class Navi extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <Link className='logo' to='/home'> <img src={Logo} className='logo' /> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="custom-toggler navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbarNav">
                            <ul>
                                <Link className="nav-item navlinks" to='/home'> HOME </Link>
                                <Link className="nav-item navlinks" to='/quiz'> QUIZ </Link>
                                <Link className="nav-item navlinks" to='/meetups'> MEETUPS </Link>
                                <Link className="nav-item navlinks" to='/contact'> CONTACT </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment >
        )
    }
}
export default Navi;