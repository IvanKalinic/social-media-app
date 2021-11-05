import React, { useRef } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import "./index.scss";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
              placeholder="Username"
              required
              className="login-input"
              ref={username}
            />
            <input
              placeholder="Email"
              required
              className="login-input"
              ref={email}
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="login-input"
              ref={password}
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              className="login-input"
              ref={passwordAgain}
              type="password"
            />
            <button className="login-button" type="submit">
              Sign Up
            </button>
            <button className="login-register-button">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
