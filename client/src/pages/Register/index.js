import React from "react";
import "./index.scss";

const Register = () => {
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-left">
          <h3 className="login-logo">Clicking</h3>
          <span className="login-description">
            Connect with friends and the world around you on Clicking.
          </span>
        </div>
        <div className="login-right">
          <div className="login-box">
            <input placeholder="Username" className="login-input" />
            <input placeholder="Email" className="login-input" />
            <input placeholder="Password" className="login-input" />
            <input placeholder="Password Again" className="login-input" />
            <button className="login-button">Sign Up</button>
            <button className="login-register-button">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
