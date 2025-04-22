import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Startup Launhcpad</div>
      <ul>
        <li>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => isActive ? "active" : ""}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active" : ""}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active" : ""}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? "active sign-in" : "sign-in"}>
            Sign In
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
