import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink exact to="/">
        VendingMachine
      </NavLink>
      <NavLink exact to="/water">
        Water
      </NavLink>
      <NavLink exact to="/swedishfish">
        Swedish Fish
      </NavLink>
      <NavLink exact to="/cheezies">
        Cheezies
      </NavLink>
    </nav>
  );
}

export default NavBar;