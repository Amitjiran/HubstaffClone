import { useState } from 'react';
import './UserRegister.css';

const UserRegister = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="pvs-layout__main">
      <div className="pvs-signup-minimalist__page">
         <div className="pvs-signup-minimalist__top-bar">
          <svg className="pvs-icon pvs-signup-minimalist__logo" aria-hidden="true">
            <use xlinkHref="/_astro/icons.svg#logo-hubstaff" />
          </svg>
          <div className="pvs-signup-minimalist__signin">
            <span>Have a Persist tracker account already?</span>
            <a className="pvs-button pvs-button--secondary" href="/">Sign in</a>
          </div>
         </div>

          <div className="pvs-signup-minimalist__container">
          <div className="pvs-signup-minimalist-top-block-group-2">
            <div className="pvs-signup-minimalist-top-block-step badge-completed">
              <span className="pvs-signup-minimalist-badge">1</span>
              <span className="pvs-signup-minimalist-badge-text">Confirm email</span>
            </div>
            <div className="pvs-signup-minimalist-top-block-step badge-current">
              <span className="pvs-signup-minimalist-badge">2</span>
              <span className="pvs-signup-minimalist-badge-text">Complete information</span>
            </div>
            <div className="pvs-signup-minimalist-top-block-step badge-inactive">
              <span className="pvs-signup-minimalist-badge">3</span>
              <span className="pvs-signup-minimalist-badge-text">Verify your email</span>
            </div>
          </div>
      
        <form className="pvs-form auth_form">
            <div className="pvs-signup-minimalist__form-group">
              <div className="pvs-form__row">
                <div className="pvs-form__input-group">
                  <label className="pvs-form__label" htmlFor="hubstaff_email">Work email</label>
                  <input 
                    className="pvs-form__input pvs-form__input--secondary"
                    id="hubstaff_email"
                    type="email"
                    name="user[email]"
                    placeholder="Enter your work email"
                    required
                  />
                </div>
              </div>

              <div className="pvs-form-step-2">
                <div className="pvs-form__row">
                  <div className="pvs-form__input-group">
                    <label className="pvs-form__label" htmlFor="hubstaff_user_first_name">First name</label>
                    <input 
                      className="pvs-form__input pvs-form__input--secondary"
                      id="hubstaff_user_first_name"
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
                    <label className="pvs-form__label" htmlFor="hubstaff_user_last_name">Last name</label>
                    <input 
                      className="pvs-form__input pvs-form__input--secondary"
                      id="hubstaff_user_last_name"
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
                    <label className="pvs-form__label" htmlFor="hubstaff_password">Password</label>
                    <div className="pvs-form__input--with-suffix">
                      <input 
                        className="pvs-form__input pvs-form__input--secondary"
                        id="hubstaff_password"
                        type={showPassword ? "text" : "password"}
                        name="user[password]"
                        placeholder="Enter 6 or more characters"
                        required
                        minLength="6"
                      />
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pvs-form__input-group">
              <button className="pvs-button pvs-button--primary pvs-button--medium pvs-button--block-level">
                Create my account 
              </button>
            </div>
        </form>
        </div>
      </div>
    </main>
  );
};

export default UserRegister;