import React from "react";

const Login = () => {
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
            <input
              placeholder="Email"
              className="login-input"
              style={{ marginBottom: -40 }}
            />
            <input
              placeholder="Password"
              className="login-input"
              style={{ marginBottom: -20 }}
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
