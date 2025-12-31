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
    handleDelete = (id)=>{
        return ()=>{
            this.props.deleteToDo(id);
        }
    }
    render() {
        const { todo } = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#f5f5f5' : 'transparent'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                {/* 使用 checked 使其成为受控组件，确保状态同步 */}
                <input type="checkbox" checked={todo.done} onChange={this.handleCheck(todo.id)} />
                <span>{todo.name}</span>
                <button onClick={this.handleDelete(todo.id)} style={{display: mouse ? 'inline' : 'none'}}>删除</button>
            </li>
        )
    }
}