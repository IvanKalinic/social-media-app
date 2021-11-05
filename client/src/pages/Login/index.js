import React, { useRef } from "react";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email);
  };
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
          <form className="login-box" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              required
              className="login-input"
              ref={email}
              style={{ marginBottom: -40 }}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="login-input"
              ref={password}
              style={{ marginBottom: -20 }}
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
