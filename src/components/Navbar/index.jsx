import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn, currentUser }) => (
  <div>
    <NavLink exact to="/">
      Home
    </NavLink>
    {isLoggedIn ? (
      <span>Hello {currentUser.username}</span>
    ) : (
      <>
        <NavLink exact to="/login">
          Login
        </NavLink>
        <NavLink exact to="/signup">
          Signup
        </NavLink>
      </>
    )}
  </div>
);

export default Navbar;
