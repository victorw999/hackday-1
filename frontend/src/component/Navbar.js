import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            HiSushi
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
