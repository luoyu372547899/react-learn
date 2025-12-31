import React from "react";

export default class Footer extends React.Component {
    handleCheckAll = (event) => {
        this.props.handleCheckAll(event.target.checked)
    }
    render() {
        const {todos} = this.props;
        const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const totalCount = todos.length
        return (
            <div>
                <label>
                    <input type="checkbox" checked={doneCount === totalCount && totalCount > 0} onChange={this.handleCheckAll}/>
                </label>
                <span>已完成{doneCount}</span>/<span>全部{totalCount}</span>
                <button>清除已完成</button>
            </div>
        );
    }
}