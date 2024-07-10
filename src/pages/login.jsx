import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // React Router Hook
import { LoginStyle } from "./login.styles";

const Login = ({ setToken }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Navigation Hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://fullstack-todo-app-2vy7.onrender.com/api/auth/login",
        formData
      )
      .then((res) => {
        setToken(res.data.token);
        navigate("/"); // Navigation nach erfolgreichem Login
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <LoginStyle>
      <form className="LoginForm" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          className="email-input"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          className="password-input"
        />

        <button className="login-button" type="submit">
          Login
        </button>
        <div className="dont-account">
          <span className="no-account">Dont have an account ?</span>
          <Link to="/register">
            <button className="register-button" type="submit">Register</button>
          </Link>
        </div>
      </form>
    </LoginStyle>
  );
};

export default Login;
