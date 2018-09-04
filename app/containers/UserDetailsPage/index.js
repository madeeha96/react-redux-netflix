import { connect } from "react-redux";
import UserDetailsPage from "./UserDetailsPage";
import { fetchUser, unselectUser, setUserActive } from "./actions";

const mapStateToProps = state => {
  return {
    selectedUser: state.homeReducer.selectedUser,
    activeUsers: state.homeReducer.activeUsers
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return {
    fetchUser: () => dispatch(fetchUser(ownProps.match.params.id)),
    unselectUser: () => dispatch(unselectUser(ownProps.match.params.id)),
    setUserActive: () => dispatch(setUserActive(ownProps.match.params.id))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(UserDetailsPage);
