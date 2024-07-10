import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router Hook

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

    axios.post("https://fullstack-todo-app-2vy7.onrender.com/api/auth/login", formData)
      .then((res) => {
        setToken(res.data.token);
        navigate("/"); // Navigation nach erfolgreichem Login
      })
      .catch((err) => alert(err.response.data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
