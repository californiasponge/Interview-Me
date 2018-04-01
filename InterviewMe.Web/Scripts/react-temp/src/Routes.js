import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import TakeQuiz from './components/TakeQuiz';
import Audio from './components/AudioQuiz';
import MeetUps from './components/MeetUps';
import Contact from './components/Contact';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import FlashCards from './components/FlashCards';

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
                    <Route path='/flashcards' component={FlashCards} />

                    <Route path='/c' component={TakeQuiz} />
                    <Route path='/angular.js' component={TakeQuiz} />
                    <Route path='/asp.net' component={TakeQuiz} />
                    <Route path='/ado.net' component={TakeQuiz} />
                    <Route path='/data structures' component={TakeQuiz} />
                    <Route path='/oop' component={TakeQuiz} />
                    <Route path='/react' component={TakeQuiz} />
                    <Route path='/sql server' component={TakeQuiz} />
                    <Route path='/javascript' component={TakeQuiz} />
                    <Route path='/html' component={TakeQuiz} />
                    <Route path='/ajax' component={TakeQuiz} />
                </Switch>
            </div>
        )
    }
}
export default Routes;