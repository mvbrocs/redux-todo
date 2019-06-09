import React from "react";

function Todo(props) {
  const todoStyle = {
    display: "block",
    textDecoration: props.completed ? "line-through" : "none"
  };

  return (
    <li onClick={props.onClick} style={todoStyle}>
      {props.text}
    </li>
  );
}

export default Todo;
