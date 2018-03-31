import React, {Component} from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';
import Quiz from './components/Quiz';
import AudioQuiz from './components/AudioQuiz';


class App extends Component {
  render() {
    return (
      <Router>
      <Switch>  
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>     
          <Route exact path='/quiz' component={Quiz} />    
          <Route exact path='/audioquiz' component={AudioQuiz} />            
      </Switch>
    </Router>
    );
  }
}

export default App;
