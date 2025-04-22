import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual login logic.
    if (onLogin) {
      onLogin(formData);
    }
    console.log('Logging in with:', formData);
  };

  return (
    <div className="contact-container">
      <section className="contact">
        <h1>Login</h1>
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
            <button type="submit" className="cta-button">Sign In</button>
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
