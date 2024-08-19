import React from "react";

export const Items = ({ index, task, handleDelete }) => {
  return (
    <li
      key={index}
      className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
    >
      <span className="flex-grow-1">{task}</span>
      <button
        onClick={() => handleDelete(index)}
        className="btn btn-danger btn-sm"
      >
        <i className="fa fa-trash" style={{ color: "white" }}></i>
      </button>
    </li>
  );
};
