import React, { Component } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem/TodoItem";
import todosData from "./todosData";
import AddItem from "./components/AddItem/AddItem";

class App extends Component {
  state = {
    todos: todosData
  };

  handleAddItem = data => {
    const nextTodo = [data, ...this.state.todos];
    this.setState({ todos: nextTodo });
  };

  handleDeleteItem = id => {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  };

  render() {
    const todoItems = this.state.todos.map(todoItem => (
      <TodoItem
        key={todoItem.id}
        item={todoItem}
        onDeleteItem={this.handleDeleteItem}
      />
    ));

    return (
      <div className="todo-list">
        <AddItem onAddItem={this.handleAddItem} />
        {todoItems}
      </div>
    );
  }
}

export default App;
