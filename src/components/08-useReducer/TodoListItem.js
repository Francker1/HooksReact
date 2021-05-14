import React from "react";

export const TodoListItem = ({ todo, i, handleToggle, handleDelete }) => {
  return (
    <li key={todo.id} className="list-group-item">
      <p
        className={`content-todo ${todo.done && "complete"} | mr-5`}
        onClick={() => handleToggle(todo.id)}
      >
        {i + 1}. {todo.desc}
      </p>
      <button className="btn btn-danger" onClick={() => handleDelete(todo.id)}>
        Borrar
      </button>
    </li>
  );
};
