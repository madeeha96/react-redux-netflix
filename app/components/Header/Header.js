import React from "react";
import { Link } from "react-router-dom";
import Hello from "./images/Hello.png";
import "./style.scss";

class Header extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="https://twitter.com/h96_madeeha">
          <img
            style={{ width: "100%", height: "20%" }}
            src={Hello}
            alt="react-redux-boilerplate - Logo"
          />
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Home
          </Link>
          <Link className="router-link" to="/features">
            Written Questions
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
