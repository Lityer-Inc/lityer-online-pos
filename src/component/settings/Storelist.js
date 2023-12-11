import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-full.png";

const Storelist = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //send formData to your Node.js backend using a fetch or Axios to be done here.

    console.log("Form Data:", formData);
  };

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" src={logo} alt="Logo" />
      </div>

      <div className="auth-box">
        <h2>Your Stores</h2>
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
          <Link to="/createsore">
            <button type="submit">Create a New store</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Storelist;
