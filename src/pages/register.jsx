import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // React Router Hook
import { RegisterStyle } from "./register.styles";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Navigation Hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post(
        "https://fullstack-todo-app-2vy7.onrender.com/api/auth/register",
        formData
      )
      .then((res) => {
        alert("Registered Successfully");
        navigate("/login"); // Navigation nach erfolgreicher Registrierung
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <RegisterStyle>
      <form className="register-form" onSubmit={handleSubmit}>
        <h1>ToDoing</h1>
        <input
          className="input-register"
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          className="input-register"
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          className="input-register"
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          className="input-register"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <input
          className="input-register"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          required
        />
        <button className="register-btn" type="submit">
          Register
        </button>
        <div className="youhave-account">
          <span className="yes-account"> you have already an account?</span>
          <Link to="/login">
            <button className="Login-btn">Login</button>
          </Link>
        </div>
      </form>
    </RegisterStyle>
  );
};

export default Register;
