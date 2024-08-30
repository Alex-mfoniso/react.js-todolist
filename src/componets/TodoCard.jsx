import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTool, index, handleEditTool } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionContainer"></div>
      <button
        onClick={() => {
          handleEditTool(index);
        }}
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button
        onClick={() => {
          handleDeleteTool(index);
        }}
      >
        <i class="fa-regular fa-trash-can"></i>
      </button>
    </li>
  );
}
