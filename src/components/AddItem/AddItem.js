import React, { Component } from "react";
import "./AddItem.css";

class AddItem extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleBtnClick = e => {
    const { text } = this.state;
    e.preventDefault();
    this.props.onAddItem({
      id: +new Date(),
      text,
      completed: false
    });
  };

  render() {
    const { text } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={text}
          className="add-todo"
          placeholder="What needs to be done?"
          onChange={this.handleChange}
        />
        <button className="add-button" onClick={this.handleBtnClick}>
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
