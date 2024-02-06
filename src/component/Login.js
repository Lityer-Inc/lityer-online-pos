import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-full.png";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useJwt } from "../hooks/useJwt";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const jwt = useJwt();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/login", formData);
      toast.success("Succesfully Logged in  !");
      localStorage.setItem("token", String(response.data.token));
      // Check if userCategory is "Retailer" and redirect to storelist if true

      // return;
      window.location.reload();
    } catch (error) {
      toast.error(String(error.response.data.error));
      console.error("Registration failed", error.response.data);
    }
  };

  useEffect(() => {}, [jwt.user]);

  if (jwt.user && jwt.user.userCategory === "retailers") {
    console.log("working !");
    return <Navigate to="/home/storelist" />;
  } else if (
    jwt.user &&
    (jwt.user.userCategory === "supplier" ||
      jwt.user.userCategory === "logistic")
  ) {
    return <Navigate to="/home" />;
  }

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" className="mx-auto" src={logo} alt="Logo" />
      </div>

      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
