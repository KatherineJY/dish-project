import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import './assets/css/index.css'

import Home from './component/Home';
import Pcontent from './component/Pcontent'
import Login from './component/Login';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}></Route>
          <Route path="/login" component={Login} />
          <Route path="/pcontent/:id" component={Pcontent}></Route>
          
        </div>
      </Router>
    );
  }
}

export default App;
