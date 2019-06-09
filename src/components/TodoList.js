import React from "react";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <ul>
      {props.todos.map(todo => (
        <Todo
          {...todo}
          key={todo.id}
          onClick={() => {
            props.onTodoClick(todo.id);
          }}
        />
      ))}
    </ul>
  );
}

export default TodoList;
