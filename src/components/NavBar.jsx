import React from "react";
import { Link } from "react-router-dom";
import "../components/styles.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-title">Movie Roller</div>
      </Link>
    </div>
  );
};

export default NavBar;
