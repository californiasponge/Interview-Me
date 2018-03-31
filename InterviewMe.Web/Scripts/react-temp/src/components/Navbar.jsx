import React, { Component } from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';
import { Logo } from '../css/img/InterviewMe-Logo-red.png';

class Navi extends Component {

    render() {
        return (
            <div>
                <div className="custom-nav row">
                    <Link className="nav-logo" to='/home'><img className="logo" src={Logo} alt="logo" /></Link>
                    <Link className="nav-home" to='/home'> HOME </Link>
                    <Link className="nav-quiz" to='/quiz'> QUIZ </Link>
                    <Link className="nav-audio" to='/audioquiz'> AUDIO </Link>
                    <Link className="nav-meetup" to='/meetups'> AUDIO </Link>
                    <Link className="nav-contact" to='/contact'> AUDIO </Link>
                    <Link className="nav-logout" to='/login'> LOGOUT </Link>
                </div>
            </div>
        )
    }
}
export default Navi;