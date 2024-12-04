import React from 'react';
import ReviewCarousel from './ReviewCarousel';
import LoginForm from './LoginForm';
import './Login.css';

const Login = () => {
  return (
    <div className="page-wrapper">
      <div className="customer-retention customer-retention-login">
        <div className="illustration-container">
          <div className="greetings">
            <h1>Welcome to our Persist Ventures community</h1>
          </div>
          <ReviewCarousel />
        </div>
        <div className="onboarding-container">
          <div className="session-message">
            You have been logged out. <br />
            <div className="lighter">Don't worry, you can log back in using the form below.</div>
          </div>
          <div className="content">
            <div className="Persist-logo">
              <a href="https://persistventures.com/" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/623b0335353b456141200393_pv%20logo-min.png"
                  alt="Persist Ventures online time tracking"
                  width="220"
                  height="32"
                />
              </a>
            </div>
            
            {/* <LoginForm />   */}
            <LoginForm />  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
