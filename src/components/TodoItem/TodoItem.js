import React, { useState } from "react";
import "./TodoItem.css";

const TodoItem = ({ item }) => {
  const [completed, setCompleted] = useState(item.completed);

  return (
    <div className="todo-item">
      <div>
        <label className="label-input">
          <input
            type="checkbox"
            checked={completed}
            className="checkbox"
            onChange={() => setCompleted(!completed)}
          />
          <p className={completed ? "completed" : null}>{item.text}</p>
        </label>
      </div>
      <div className="btn-container">
        <button className="btn-edit">Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;
