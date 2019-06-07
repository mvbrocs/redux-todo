import React from "react";
import Todo from "./components/Todo/Todo";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo {...todo} key={todo.id} />
      ))}
    </ul>
  );
}

export default TodoList;
