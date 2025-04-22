// src/components/SignupForm.js
import React, { useState } from 'react';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const SignupForm = ({ onSignup }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError]     = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // 1) client‑side password check
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true);
    try {
      // 2) create user in Firebase Auth
      const userCred = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // 3) optionally set displayName in their profile
      await updateProfile(userCred.user, {
        displayName: formData.name
      });

      // 4) notify parent / redirect
      if (onSignup) onSignup(userCred.user);

      console.log('User signed up:', userCred.user);
    } catch (err) {
      console.error(err);
      // map common errors to friendly text
      switch (err.code) {
        case 'auth/email-already-in-use':
          setError('That email is already in use.');
          break;
        case 'auth/weak-password':
          setError('Password should be at least 6 characters.');
          break;
        case 'auth/invalid-email':
          setError('Please enter a valid email address.');
          break;
        default:
          setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <section className="contact">
        <h1>Sign Up</h1>
        <p>Please fill in your details to create an account.</p>
        <form onSubmit={handleSubmit} className="contact-form">
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="cta-button"
              disabled={loading}
            >
              {loading ? 'Signing up…' : 'Sign Up'}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default SignupForm;
