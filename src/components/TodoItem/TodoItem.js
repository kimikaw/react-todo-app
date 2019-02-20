import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  state = {
    completed: false,
    editing: false,
    changedText: this.props.item.text
  };

  handleEditItem = e => {
    this.setState({ editing: !this.state.editing });
  };

  handleEditingChange = e => {
    const changedText = e.target.value;
    this.setState({ changedText });
  };

  handleDeleteItem = () => {
    const { id } = this.props.item;
    this.props.onDeleteItem(id);
  };

  render() {
    const { completed, editing } = this.state;

    return (
      <div className="todo-item">
        <div>
          <label className="label-input">
            <input
              type="checkbox"
              checked={completed}
              className="checkbox"
              onChange={() => this.setState({ completed: !completed })}
            />
            {editing ? (
              <input
                type="text"
                value={this.state.changedText}
                onChange={this.handleEditingChange}
              />
            ) : (
              <p className={completed ? "completed" : null}>
                {this.state.changedText}
              </p>
            )}
          </label>
        </div>
        <div className="btn-container">
          <button onClick={this.handleEditItem} className="btn-edit">
            Edit
          </button>
          <button onClick={this.handleDeleteItem}>Delete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
