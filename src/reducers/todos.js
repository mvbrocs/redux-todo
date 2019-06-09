import { Action } from "../actions";

const toggleTodo = (todo, action) => {
  if (todo.id === action.id) {
    return {
      ...todo,
      ...{
        completed: !todo.completed
      }
    };
  }

  return todo;
};

const initialState = [
  {
    id: 0,
    text: "Learn react",
    completed: false
  },
  {
    id: 1,
    text: "Learn redux",
    completed: false
  },
  {
    id: 2,
    text: "Learn node.js",
    completed: false
  }
];

function todos(state = initialState, action) {
  switch (action.type) {
    case Action.TOGGLE_TODO:
      return state.map(todo => toggleTodo(todo, action));
    default:
      return state;
  }
}

export default todos;
