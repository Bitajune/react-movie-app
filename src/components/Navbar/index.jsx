import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <div>
    <NavLink exact to="/">
      Home
    </NavLink>
    <NavLink exact to="/login">
      Login
    </NavLink>
    <NavLink exact to="/signup">
      Signup
    </NavLink>
  </div>
);

export default Navbar;
