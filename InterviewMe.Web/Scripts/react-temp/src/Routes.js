import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Audio from './components/AudioQuiz';
import MeetUps from './components/MeetUps';
import Contact from './components/Contact';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/home' component={Home} />
                    <Route path='/quiz' component={Quiz} />
                    <Route path='/audio' component={Audio} />
                    <Route path='/meetups' component={MeetUps} />
                    <Route path='/contact' component={Contact} />
                    <Route path='/login' component={Login} />
                </Switch>
            </div>
        )
    }
}
export default Routes;