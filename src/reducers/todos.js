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
    case Action.ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];
    default:
      return state;
  }
}

export default todos;
