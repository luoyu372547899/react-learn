import React from "react";
import Item from "../Item";
import PropTypes from "prop-types";

export default class List extends React.Component {
    static propTypes = {
        todos: PropTypes.array.isRequired,
        updateToDo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired
    }
    render() {
        const { todos, updateToDo, deleteToDo } = this.props;
        return (
            <ul>
                {todos.map(todo => (
                    <Item key={todo.id} todo={{ ...todo }} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
                ))}
            </ul>
        )
    }
}