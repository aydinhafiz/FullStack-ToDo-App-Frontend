import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import Login from "./pages/login";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const setAuthToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
  };

  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setToken={setAuthToken} />} />
        <Route
          path="/"
          element={token ? <Home logout={logout} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
