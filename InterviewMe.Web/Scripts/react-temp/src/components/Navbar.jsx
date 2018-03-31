import React, {Component} from 'react';
import '../css/navbar.css'
import { Link } from 'react-router-dom';

class Navi extends Component {

    render(){
        return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="logo" to="/home"> InterviewMe</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="custom-toggler navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbarNav">                       
                            <Link className="nav-item navlinks" to='/home'> HOME </Link>
                            <Link className="nav-item navlinks" to='/quiz'> QUIZ </Link>
                            <Link className="nav-item navlinks" to='/audioquiz'> AUDIO </Link>  
                            <Link className="nav-item navlinks" to='/home'> LOGOUT </Link>                      
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navi;