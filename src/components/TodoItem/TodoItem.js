import React from "react";
import "./TodoItem.css";

const TodoItem = ({ item }) => (
  <div className="todo-item">
    <input
      type="checkbox"
      checked={item.completed}
      onChange={() => console.log("Clicked")}
    />
    <p>{item.text}</p>
  </div>
);

export default TodoItem;
