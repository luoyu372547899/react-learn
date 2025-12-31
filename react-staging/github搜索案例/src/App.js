import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import List from './components/List';
// import Footer from './components/Footer'; // 未找到 Footer 组件，暂时注释

export default class App extends Component {
  state = {
    users: [],
    isFirst: true,
    isLoading: false,
    error:''
  }
  updateState = (data) => {
    this.setState(data)
  }
  render() {
    const { users } = this.state;
    return (
      <div>
        <Search updateState={this.updateState} />
        <List {...this.state} />
      </div>
    )
  }
}
