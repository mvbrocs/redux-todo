import { connect } from "react-redux";
import Link from "../components/Link";
import { ActionCreator } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFilterClick: () =>
      dispatch(ActionCreator.setVisibilityFilter(ownProps.filter))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
