// src/components/LoginForm.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import {
  signInWithEmailAndPassword
} from 'firebase/auth';

const LoginForm = () => {
  // form state
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  // error state
  const [error, setError] = useState('');
  // router navigation




  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      // redirect happens automatically via onAuthStateChanged listener
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact">
        <h1>Login</h1>
        {error && <p className="error">{error}</p>}
        <p>Please enter your credentials to sign in.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className="cta-button">
              Sign In
            </button>
          </div>
        </form>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <Link to="/signup" className="signup-link">
            Don't have an account? Sign Up
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
