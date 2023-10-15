import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="navEle">
        <i className="fa-solid fa-location-dot icon fa-xl"></i>
      </div>
      <div className="navEle">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Home
        </NavLink>
        <NavLink
          to="/pokemones"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          Pokemones
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
