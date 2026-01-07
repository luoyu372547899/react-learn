import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createAddPersonAction } from '../redux/action/pserson_action'


class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value.trim()
    const age = this.ageNode.value.trim()
    const id = nanoid()
    this.props.addPerson({id, name, age})
    this.nameNode.value = ''
    this.ageNode.value = ''
  }
  render() {
    return (
      <div>
        <h1>我是Person组件, 上方Count组件求和:{this.props.count}</h1>
        <input ref={c => this.nameNode = c} type="text" placeholder="请输入姓名" />
        <input ref={c => this.ageNode = c} type="text" placeholder="请输入年龄" />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {this.props.persons.map(person => (
            <li key={person.id}>{person.name} - {person.age}</li>
          ))}
        </ul>
      </div>
    )
  }
}
export default connect(state => ({count:state.count, persons: state.person }), {addPerson:createAddPersonAction})(Person)
