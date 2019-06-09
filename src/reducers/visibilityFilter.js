import { VisibilityFilter, Action } from "../actions";

function visibilityFilter(state = VisibilityFilter.SHOW_ALL, action) {
  switch (action.type) {
    case Action.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
