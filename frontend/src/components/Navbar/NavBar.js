// src/components/Navbar/NavBar.jsx

import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './nav.css';

const NavBar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // subscribe to auth changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, u => {
      setUser(u);
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login', { replace: true });
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo ">Startup Launchpad</NavLink>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home Page
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
            Contact Us
          </NavLink>
        </li>

        {user ? (
          // when logged in, show profile icon + logout
          <>
            <li>
              <NavLink to="/profile" className="profile-link">
                <span role="img" aria-label="profile">👤</span>
              </NavLink>
            </li>
            <li>
            <NavLink
                to="/login"
                className={({ isActive }) => isActive ? 'active sign-in' : 'sign-in'}
                onClick={e => {
                  e.preventDefault();  // prevent NavLink default nav
                  handleLogout();
                }}
              >
                Logout
              </NavLink>
            </li>
          </>
        ) : (
          // when not logged in, show Sign In
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'active sign-in' : 'sign-in'
              }
            >
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
