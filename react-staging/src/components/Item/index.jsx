import React from "react";

export default class Item extends React.Component {
    state= {mouse:false}
    handleMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }
    handleCheck = (id)=>{
        return (event)=>{
            this.props.updateToDo(id, event.target.checked);
        }
    }
    render() {
        const { todo, updateToDo } = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#f5f5f5' : 'transparent'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <input type="checkbox" defaultChecked={todo.done} onChange={this.handleCheck(todo.id)} />
                <span>{todo.name}</span>
                <button style={{display: mouse ? 'inline' : 'none'}}>删除</button>
            </li>
        )
    }
}