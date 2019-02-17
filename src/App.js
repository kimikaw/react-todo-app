import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import todosData from "./todosData";

class App extends Component {
  state = {
    todos: todosData
  };

  render() {
    const todoItems = this.state.todos.map(todoItem => (
      <TodoItem key={todoItem.id} item={todoItem} />
    ));

    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
