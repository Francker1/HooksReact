import React from "react";

import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link exact to="/" className="navbar-brand">
        useContext
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink exact to="/" className="nav-item">
            Home
          </NavLink>
          <NavLink exact to="/about" className="nav-item">
            About
          </NavLink>
          <NavLink exact to="/login" className="nav-item">
            Login
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
