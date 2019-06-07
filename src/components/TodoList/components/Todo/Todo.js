import React from "react";
import classNames from "classnames";

import styles from "./assets/Todo.module.scss";

function Todo(props) {
  const todoClass = classNames(styles.Todo, {
    [styles.TodoIsCompleted]: props.completed
  });

  return <li className={todoClass}>{props.text}</li>;
}

export default Todo;
