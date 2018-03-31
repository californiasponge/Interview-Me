import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/main.css';
import '../assets/css/navbar.css';
import Logo from '../assets/img/InterviewMe-Logo.png';

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
        console.log('working')
        this.setState({ display: 'none' });
    }

    render() {
        return (
            <React.Fragment>
                <div style={{ display: this.state.display }}>
                    <nav className='navbar-primary'>
                        <div className="d-flex justify-content-between">
                            <div className='col-lg-3'>
                                <Link className='nav-logo' to='/home'><img src={Logo} className='logo' alt='' /></Link>
                            </div>
                            <div className='custom-nav col-lg-12'>
                                <Link to='/home' className={this.state.activeTab === 0 ? 'activeTab' : ''} onClick={() => this.tabClick(0)}><div className="nav-home col">HOME</div> </Link>

                                <Link to='/quiz' className={this.state.activeTab === 1 ? 'activeTab' : ''} onClick={() => this.tabClick(1)}><div className="nav-quiz col" >QUIZ</div></Link>

                                <Link to='/audio' className={this.state.activeTab === 2 ? 'activeTab' : ''} onClick={() => this.tabClick(2)}><div className="nav-audio col" to='/audio'>AUDIO</div></Link>

                                <Link to='/meetups' className={this.state.activeTab === 3 ? 'activeTab' : ''} onClick={() => this.tabClick(3)}><div className="nav-meetup  col" >MEETUPS</div></Link>

                                <Link to='/contact' className={this.state.activeTab === 4 ? 'activeTab' : ''} onClick={() => this.tabClick(4)}><div className="nav-contact col" >CONTACT</div></Link>

                                <Link to='/login' onClick={() => this.removeNav()}><div className="nav-logout col" >LOGOUT</div></Link>
                            </div>
                        </div>
                    </nav>
                </div>

                {/*                 
            <div class="row d-flex flex-lg-column flex-row">
                <aside className="col-2 col-lg-12 h-md-100 p-0 bg-dark fixed-top">
                    <nav className="navbar navbar-expand navbar-dark bg-dark py-2 px-0 px-lg-2">
                        <div className="collapse navbar-collapse" id="nav">
                            <ul className="flex-column flex-lg-row navbar-nav w-100 justify-content-center align-items-center align-items-sm-start text-left text-lg-center">  
                            
                            <Link className='nav-logo' to='/home'><img src={Logo} className='logo'/></Link>                            
                                <li className="nav-item w-100">
                                    <Link to='/quiz' className={this.state.activeTab === 1 ? 'activeTab' : ''} onClick={() => this.tabClick(1)}><div className="nav-quiz col" >QUIZ</div></Link>
                                </li>                                
                                <li className="nav-item w-100">
                                    <Link to='/audio' className={this.state.activeTab === 2 ? 'activeTab' : ''} onClick={() => this.tabClick(2)}><div className="nav-audio col" to='/audio'>AUDIO</div></Link>
                                </li>
                                <li className="nav-item w-100">                                   
                                    <Link to='/meetups' className={this.state.activeTab === 3 ? 'activeTab' : ''} onClick={() => this.tabClick(3)}><div className="nav-meetup  col" >MEETUPS</div></Link>
                                </li>
                                <li className="nav-item w-100">
                                    <Link to='/contact' className={this.state.activeTab === 4 ? 'activeTab' : ''} onClick={() => this.tabClick(4)}><div className="nav-contact col" >CONTACT</div></Link>
                                </li>                                    
                            </ul>
                        </div>
                    </nav>
                </aside>   
            </div>        */}
            </React.Fragment >
        )
    }
}
export default Navi;