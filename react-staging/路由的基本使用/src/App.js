import React, { Component } from 'react';
import { BrowserRouter as Router, Route ,Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
export default class App extends Component {

  render() {
    return (
        <div>
          <div id='head'>RactRouteDemo</div>
          <div id='menu'>
            <Link to="/home">Home</Link>
            <br/>
            <Link to="/about">About</Link>
          </div>
          <div id='content'>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
    )
  }
}
