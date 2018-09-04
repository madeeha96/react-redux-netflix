import { connect } from "react-redux";
import { compose } from "redux";
import { fetchUserList, setActiveUsers, unselectUser } from "./actions";
import HomePage from "./HomePage";

const mapDispatchToProps = dispatch => ({
  onFetchUserList: payload => dispatch(fetchUserList(payload)),
  setActiveUsers: payload => dispatch(setActiveUsers(payload)),
  // fetchUser: payload => dispatch(fetchUser(payload)),
});

const mapStateToProps = state => {
  return {
    users: state.homeReducer.users,
    activeUsers: state.homeReducer.activeUsers
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(HomePage);
export { mapDispatchToProps };
