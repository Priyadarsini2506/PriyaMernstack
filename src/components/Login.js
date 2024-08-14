import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import './Login.css';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); 

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail') || '';
    const storedPassword = localStorage.getItem('userPassword') || '';
    setEmail(storedEmail);
    setPassword(storedPassword);
  }, []);

  useEffect(() => {
    localStorage.setItem('userEmail', email);
  }, [email]);

  useEffect(() => {
    localStorage.setItem('userPassword', password);
  }, [password]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const errors = {};

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!password.trim() || password.trim().length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    setErrors(errors); 

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post('http://localhost:5000/login', {
          email,
          password,
        });

        if (response.status === 200) {
          alert('Login successful');
          navigate('/'); 
        }
      } catch (error) {
        console.error('Error logging in', error);
        setErrors({ login: 'Invalid credentials' });
      }
    } else {
      setErrors(errors);
    }
  }, [email, password, navigate]);

  return (
    <section className="login-section">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form-box">
          <div className="form-value">
            <div className="logo-container">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.kq1U56gHIRHjWHdo8iepIAAAAA&pid=Api&P=0&h=180"
                alt="Logo"
                className="logo"
              />
            </div>
            <h2>Login</h2>
            <div className="inputbox">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label>Password</label>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>
            <div>
              <label className="remember-me">
                <div>
                  <input type="checkbox" /> Remember Me
                </div>
                <Link to="/Forget">Forgot Password?</Link>
              </label>
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "center" }}>
            <Link to="/home">

              <button id='form-button' type="submit">Log in</button>
             
            </Link>
            </div>
            <br />
            <div className="register">
              <p>
                Don't have an account? <Link to="/">Register</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
