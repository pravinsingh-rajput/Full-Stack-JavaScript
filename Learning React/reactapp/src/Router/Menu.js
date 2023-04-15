import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nabvar">
      <NavLink
        className={({ isActive }) => (isActive ? "activeClass" : "nonActive")}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeClass" : "nonActive")}
        to="/contact"
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeClass" : "nonActive")}
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "activeClass" : "nonActive")}
        to="/profile/pravin"
      >
        Profile
      </NavLink>
    </div>
  );
};

export default Menu;
