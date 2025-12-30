import React from "react";
import PropTypes from "prop-types";

export default class Header extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    
    handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.props.addTodo(e.target.value);
      e.target.value = '';
    }
  }

  render() {
    return (
        <input type="text" placeholder="What needs to be done?" onKeyDown={this.handleKeyDown}/>
    )
  }
}