import React from "react";
import TodoList from "./TodoList";
import Form from "./Form";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          name: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          name: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleSubmit(name) {
    const todo = {
      name,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }
  handleToggle(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  }
  handleClear() {
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} onToggle={this.handleToggle} />
        <Form onSubmit={this.handleSubmit} />
        <button onClick={this.handleClear}>Clear Completed</button>
      </div>
    );
  }
}
