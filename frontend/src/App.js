// src/App.jsx

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import Home       from './pages/Home/home';
import AboutUs    from './pages/About/about';
import ContactUs  from './pages/Contact/contact';
import Navbar     from './components/Navbar/NavBar';
import Footer     from './components/Footer/index';
import LoginForm  from './pages/Login/login';
import SignupForm from './pages/SignUp/signup';
import DashBoard  from './pages/dashboard/dashboard';

import { useAuth } from './hooks/useAuth';
import './App.css';

function App() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading…</div>;
  }

  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/"      element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />

        {/*
          If you're already signed in, /login and /signup
          should bounce you to /dashboard automatically.
        */}
        <Route
          path="/login"
          element={
            !user
              ? <LoginForm />
              : <Navigate to="/dashboard" replace />
          }
        />

        <Route
          path="/signup"
          element={
            !user
              ? <SignupForm />
              : <Navigate to="/dashboard" replace />
          }
        />

        {/*
          Protect /dashboard — only signed‑in users get in:
        */}
        <Route
          path="/dashboard"
          element={
            user
              ? <DashBoard />
              : <Navigate to="/login" replace />
          }
        />

        {/*
       
        */}
        <Route
          path="*"
          element={
            user
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
