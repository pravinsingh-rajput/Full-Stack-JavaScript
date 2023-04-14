import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="nabvar">
      <NavLink exact className="active_nav_item " to="/">
        Home
      </NavLink>
      <NavLink exact className="active_nav_item" to="/contact">
        Contact
      </NavLink>
      <NavLink exact className="active_nav_item" to="/about">
        About
      </NavLink>
    </div>
  );
};

export default Menu;
