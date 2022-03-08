import React from "react";

export default class Todo extends React.Component {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.onToggle(this.props.todo.id)}
        />
        {this.props.todo.name}
      </li>
    );
  }
}
