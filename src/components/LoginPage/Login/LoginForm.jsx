import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log('Login successful:', data);
  
        // Store the JWT token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('userName', data.user.name); // Optional: Store user name or other details
  
        // Navigate to the Dashboard after successful login
        navigate('/dashboard');
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Login failed. Please try again.');
    }
  };
  

  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="inner-form">
          <h2 className="title">Sign in</h2>
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="user_email">Work email *</label>
              <input
                id="user_email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control login-field input-field"
                placeholder="Enter email"
                autoComplete="email"
                required
              />
            </div>
            <div className="password">
              <label htmlFor="user_password">Password *</label>
              <div className="password-field-container">
                <input
                  id="user_password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control login-field input-field"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  required
                />
                <span
                  className="password-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {/* Show/hide password icon */}
                </span>
              </div>
            </div>
            <button type="submit">Sign in</button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
