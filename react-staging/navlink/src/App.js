import React, { Component } from 'react';
import {Route ,NavLink} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'
export default class App extends Component {

  render() {
    return (
        <div>
          <Header/>
          <div id='menu'>
            {/* <NavLink activeStyle={{color:'red'}} to="/home">Home</NavLink> */}
            <br/>
            <MyNavLink to="/home">Home</MyNavLink>
            <br/>
            <MyNavLink to="/about">About</MyNavLink>
          </div>
          <div id='content'>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </div>
    )
  }
}
