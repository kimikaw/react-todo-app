import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed);

  return (
    <label className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
      />
      <p className={completed ? "completed" : null}>{item.text}</p>
      <button>Edit</button>
      <button>Delete</button>
    </label>
  );
};

export default TodoItem;
