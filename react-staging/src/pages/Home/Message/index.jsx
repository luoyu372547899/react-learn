import React, { Component } from 'react'
import Detail from './Detail'
import { Route,Switch,Redirect,Link } from 'react-router-dom'
export default class Message
  extends Component {
  state = {
    messages:[
      {id:1,title:'Message1'},
      {id:2,title:'Message2'},
      {id:3,title:'Message3'},
    ]
  }
  render() {
    return (
      <div>
        <ul>
          {
            this.state.messages.map(msg=>(
              <li key={msg.id}>
                <Link to={`/home/message/detail/${msg.id}/${msg.title}`}>{msg.title}</Link>
              </li>
            ))
          }
        </ul>
        <Switch>
          <Route path="/home/message/detail/:id/:title" component={Detail} />
          <Redirect to="/home/message/1" />
        </Switch>
      </div>
    )
  }
}
