import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/css/navbar.css';
import Logo from '../assets/img/InterviewMe-Logo-red.png';

class Navi extends Component {
    state = {
        activeTab: 0,
        display: ''
    }
    tabClick = (index) => {
        this.setState({ activeTab: index });
        const tabs = ['.nav-home', '.nav-quiz', '.nav-audio', '.nav-meetup', '.nav-contact'];
        document.querySelector(tabs[index]).scrollIntoView({
            behavior: 'smooth'
        });
    };

    removeNav = () => {
        this.setState({ display: 'none' });
    }

    render() {
        return (
            <div className="custom-nav row" style={{ display: this.state.display }}>
                <Link className='nav-logo col-lg-4' to='/home'><img src={Logo} className='logo' alt='' /></Link>

                <Link to='/home' className={this.state.activeTab === 0 ? 'activeTab' : ''} onClick={() => this.tabClick(0)}><div className="nav-home col-lg-1">HOME</div> </Link>

                <Link to='/quiz' className={this.state.activeTab === 1 ? 'activeTab' : ''} onClick={() => this.tabClick(1)}><div className="nav-quiz col-lg-1" >QUIZ</div></Link>

                <Link to='/audio' className={this.state.activeTab === 2 ? 'activeTab' : ''} onClick={() => this.tabClick(2)}><div className="nav-audio col-lg-1" to='/audio'>AUDIO</div></Link>

                <Link to='/meetups' className={this.state.activeTab === 3 ? 'activeTab' : ''} onClick={() => this.tabClick(3)}><div className="nav-meetup  col-lg-1" >MEET UPS</div></Link>

                <Link to='/contact' className={this.state.activeTab === 4 ? 'activeTab' : ''} onClick={() => this.tabClick(4)}><div className="nav-contact col-lg-1" >CONTACT</div></Link>

                <Link to='/login' className="nav-logout col-xs-3 col-lg-3 push-lg-2" onClick={() => this.removeNav()}><div className="nav-logout col-lg-3" >LOGOUT</div></Link>
            </div >
        )
    }
}
export default Navi;