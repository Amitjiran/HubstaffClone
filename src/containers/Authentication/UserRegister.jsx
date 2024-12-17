import { useState } from 'react';
import './UserRegister.css';

const UserRegister = () => {
const [showPassword, setShowPassword] = useState(false);
const [activeStep, setActiveStep] = useState(1); // Track the active step

const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  const goToNextStep = () => {
    if (activeStep < 2) {
      setActiveStep(activeStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };



  return (
    <main className="pvs-layout__main">
      <div className="pvs-signup-minimalist__page">
         <div className="pvs-signup-minimalist__top-bar">
          <svg className="pvs-icon pvs-signup-minimalist__logo" aria-hidden="true">
            <use xlinkHref="/_astro/icons.svg#logo-persist" />
          </svg>
          <div className="pvs-signup-minimalist__signin">
            <span>Have a Persist tracker account already?</span>
            <a className="pvs-button pvs-button--secondary" href="/">Sign in</a>
            <a className="pvs-button pvs-button--secondary" href="/dashboard">Go to dashboard</a>
          </div>
         </div>
          

         <main className="pvs-layout__main">
      <div className="pvs-signup-minimalist__page">
        <div className="pvs-signup-minimalist__top-bar">
          {/* ... existing code ... */}
        </div>

        <div className="pvs-signup-minimalist__container">
          <div className="pvs-signup-minimalist-top-block-group-2">
            <div className={`pvs-signup-minimalist-top-block-step ${activeStep === 1 ? 'badge-current' : 'badge-inactive'}`}>
              <span className="pvs-signup-minimalist-badge">1</span>
              <span className="pvs-signup-minimalist-badge-text">Complete information</span>
            </div>
            <div className={`pvs-signup-minimalist-top-block-step ${activeStep === 2 ? 'badge-current' : 'badge-inactive'}`}>
              <span className="pvs-signup-minimalist-badge">2</span>
              <span className="pvs-signup-minimalist-badge-text">Verify your email</span>
            </div>
          </div>

          <form className="pvs-form auth_form" onSubmit={handleSubmit}>
            {activeStep === 1 && (
              <div className="pvs-signup-minimalist__form-group">
                {/* Complete Information Fields */}
                <div className="pvs-form__row">
                  <div className="pvs-form__input-group">
                    <label className="pvs-form__label" htmlFor="persist_email">Work email</label>
                    <input 
                      className="pvs-form__input pvs-form__input--secondary"
                      id="persist_email"
                      type="email"
                      name="user[email]"
                      placeholder="Enter your work email"
                      required
                    />
                  </div>
                </div>
                <div className="pvs-form__row">
                  <div className="pvs-form__input-group">
                    <label className="pvs-form__label" htmlFor="persist_user_first_name">First name</label>
                    <input 
                      className="pvs-form__input pvs-form__input--secondary"
                      id="persist_user_first_name"
                      type="text"
                      name="user[first_name]"
                      placeholder="Enter your first name"
                      required
                      minLength="2"
                    />
                  </div>
                </div>
                <div className="pvs-form__row">
                  <div className="pvs-form__input-group">
                    <label className="pvs-form__label" htmlFor="persist_user_last_name">Last name</label>
                    <input 
                      className="pvs-form__input pvs-form__input--secondary"
                      id="persist_user_last_name"
                      type="text"
                      name="user[last_name]"
                      placeholder="Enter your last name"
                      required
                      minLength="2"
                    />
          </div>
                </div>
                <div className="pvs-form__row">
                  <div className="pvs-form__input-group">
                    <label className="pvs-form__label" htmlFor="persist_password">Password</label>
                    <div className="pvs-form__input--with-suffix">

                      <input 
                        className="pvs-form__input pvs-form__input--secondary"
                        id="persist_password"
                        type={showPassword ? "text" : "password"}
                        name="user[password]"
                        placeholder="Enter 6 or more characters"
                        required
                        minLength="6"
                      />
                      <button type="button" onClick={togglePassword}>
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
 {activeStep === 2 && (
              <div className="pvs-signup-minimalist__form-group">
                {/* Verify Email Fields */}
                <p>Please check your email to verify your account.</p>
                <button type="button" onClick={goToPreviousStep}>
                  Back to Complete Information
                </button>
              </div>
            )}

            <div className="pvs-form__input-group">
              {activeStep === 1 && (
                <button type="button" onClick={goToNextStep} className="pvs-button pvs-button--primary pvs-button--medium pvs-button--block-level">
                  Next
                </button>
              )}
              {activeStep === 2 && (
                <button type="submit" className="pvs-button pvs-button--primary pvs-button--medium pvs-button--block-level">
                  Verify Email
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </main>
      </div>
    </main>
  );
};

export default UserRegister;