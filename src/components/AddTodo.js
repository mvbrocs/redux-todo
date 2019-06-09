import React from "react";

function AddTodo(props) {
  const [todo, setTodo] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    props.onAddTodo(todo);
  };

  const handleChange = event => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" required value={todo} onChange={handleChange} />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default AddTodo;
