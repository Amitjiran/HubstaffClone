import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-wrapper">
      <div className="form">
        <div className="inner-form">
          <h2 className="title">Sign in to Persist Ventures</h2>
          <div className="customer-retention-form">
            <form className="new_user">
              <div className="email">
                <label htmlFor="user_email">Work email *</label>
                <input
                  id="user_email"
                  type="text"
                  className="form-control login-field input-field"
                  placeholder="Enter email"
                  autoComplete="email"
                />
              </div>
              <div className="password">
                <label htmlFor="user_password">Password *</label>
                <div className="password-field-container">
                  <input
                    id="user_password"
                    type={showPassword ? "text" : "password"}
                    className="form-control login-field login-field-password input-field"
                    placeholder="Enter password"
                    autoComplete="current-password"
                  />
                  <span
                    className="password-icon"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <img
                      width="18"
                      className={showPassword ? "hide-password" : "show-password"}
                      alt="eye logo"
                      src={showPassword ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngqAGdZyQwHvpDQ6xW3QWDaVJ53LI5BdzKDb1AjliarQSGbEabHDzNL6IQCFV9yQzWpo&usqp=CAU" : "data:image/png;base64,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"}
                    />
                  </span>
                </div>
                <div className="forgot-password">
                  <a className="forgot-password-link" href="/forgot_password">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="sign-in">
                <button type="submit" className="btn btn-info btn-lg btn-block hs-button">
                  Sign in
                </button>
              </div>
              <div className="sso">
                <a href="/sso_login">Log in with SSO</a>
              </div>
            </form>
          </div>
        </div>
        <div className="footer">
          <div className="signup">
            Don't have an account?&nbsp;
            <a href="/userregister">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
