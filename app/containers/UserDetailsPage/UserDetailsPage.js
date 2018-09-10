import React from "react";
import { isEqual, get } from "lodash";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./style.scss";

export default class UserDetailsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: {},
      selection: this.props.activeUser,
      isActive: false
    };
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.selectedUser, nextProps.selectedUser)) {
      const result = nextProps.activeUsers.some(
        id => id === nextProps.selectedUser._id
      );
      this.setState(
        () => ({ selectedUser: nextProps.selectedUser, isActive: result }),
        () => {
          console.log("selectedUser", this.state.selectedUser);
        }
      );
    }
  }

  handleChange = event => {
    this.setState({ selectedUser: event.target.selectedUser });
  };

  handleInputChange = event => {
    if (this.state.isActive) {
      this.props.unselectUser([this.state.selectedUser._id]);
      this.setState({ isActive: false });
    } else {
      this.props.setUserActive(this.state.selectedUser._id);
      this.setState({ isActive: true });
    }
  };
  render() {
    const { selectedUser } = this.state;
    return (
      <div className="details-page">
        <h1>Details</h1>
        <form>
          <label className="label">
            Username:
            <input
              type="text"
              value={selectedUser.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Full Name:
            <input
              type="text"
              value={selectedUser.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              value={selectedUser.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Portfolio:
            <input
              type="text"
              value={selectedUser.website}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Is active:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isActive}
              onChange={this.handleInputChange}
            />
          </label>{" "}
          <br /> <br />
          <div className="nav-bar">
            <Link className="router-link" to="/">
              Submit
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

UserDetailsPage.propTypes = {
  selectedUser: PropTypes.object,
  activeUser: PropTypes.array
};
