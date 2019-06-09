const VisibilityFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const Action = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

const ActionCreator = {
  addTodo: text => {
    return {
      type: Action.ADD_TODO,
      text
    };
  },
  toggleTodo: id => {
    return {
      type: Action.TOGGLE_TODO,
      id
    };
  },
  setVisibilityFilter: filter => {
    return {
      type: Action.SET_VISIBILITY_FILTER,
      filter
    };
  }
};

export { VisibilityFilter, Action, ActionCreator };
