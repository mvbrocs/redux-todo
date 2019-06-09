import { connect } from "react-redux";
import AddTodo from "../components/AddTodo";
import { ActionCreator } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: text => dispatch(ActionCreator.addTodo(text))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
