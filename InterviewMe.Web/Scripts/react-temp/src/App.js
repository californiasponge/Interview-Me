import React, { Component } from 'react';
import Routes from './Routes';
import Navi from './components/Navbar';
import './assets/css/main.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Navi />
                <Routes />
            </div>
        );
    }
}

export default App;
