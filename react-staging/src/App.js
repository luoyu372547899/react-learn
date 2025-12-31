import React from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';

export default class App extends React.Component {
  state = {
    todos: [
      { id: 1, name: 'Learn React', done: false },
      { id: 2, name: 'Build a app', done: true },
      { id: 3, name: "Learn JavaScript", done: true }
    ]
  }
  addTodo = (name) => {
    const newTodo = { id: Date.now(), name, done: false };
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }
  updateToDo = (id, done) => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, done } : todo
      )
    });
  }
  deleteToDo = (id) => {
    if (window.confirm("确定删除吗？")) {
      const { todos } = this.state;
      const newToDos = todos.filter(todo => todo.id !== id)
      this.setState({
        todos: newToDos
      })
    }
  }
  handleCheckAll = (done)=>{
    this.setState({
      todos: this.state.todos.map(todo => ({ ...todo, done }))
    })
  }
  render() {
    const {todos} = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo} />
        <List todos={todos} updateToDo={this.updateToDo} deleteToDo={this.deleteToDo} />
        <Footer todos={todos} handleCheckAll={this.handleCheckAll}/>
      </div>
    )
  }
}

