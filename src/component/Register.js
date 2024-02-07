import React, { useState } from "react";
import logo from "../assets/images/logo-full.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userCategory: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/user/register", formData);
      toast.success("Succesfully Registered !");

      localStorage.setItem("user", String(response.data.newUser.name));
      localStorage.setItem("retailerId", String(response.data.retailerId));
      localStorage.setItem("token", String(response.data.token));
      // Check if userCategory is "Retailer" and redirect to storelist if true
      setTimeout(() => {
        if (formData.userCategory === "retailer") {
          navigate("/home/storelist");
        } else {
          navigate("/home");
        }
      }, 2000);
      return;
    } catch (error) {
      toast.error(String(error.response.data.error));
      console.error("Registration failed", error.response.data);
    }

    // console.log("Form Data:", formData);
  };

  let token = localStorage.getItem("token");

  if (token) {
    return <Navigate to="/storelist" />;
  }

  return (
    <div id="boxit">
      <Toaster />
      <div id="logodiv">
        <img id="logoimg" className="mx-auto" src={logo} alt="Logo" />
      </div>{" "}
      <div className="auth-box">
        <h2> Sign Up </h2>{" "}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName"> First Name </label>{" "}
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="secondName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="secondName"
              placeholder="Enter your last name"
              value={formData.secondName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"> Email </label>{" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="password"> Password </label>{" "}
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label htmlFor="confirmPassword"> Confirm Password </label>{" "}
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          <div className="form-group">
            <label> Choose User Category </label>{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="userCategory"
                  value="supplier"
                  checked={formData.userCategory === "supplier"}
                  onChange={handleInputChange}
                />
                Supplier{" "}
              </label>{" "}
            </div>{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="userCategory"
                  value="retailer"
                  checked={formData.userCategory === "retailer"}
                  onChange={handleInputChange}
                />
                Retailer{" "}
              </label>{" "}
            </div>{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="userCategory"
                  value="logistic"
                  checked={formData.userCategory === "logistic"}
                  onChange={handleInputChange}
                />
                Logistics{" "}
              </label>{" "}
            </div>{" "}
          </div>{" "}
          <button type="submit"> Sign Up </button>{" "}
        </form>{" "}
        <p>
          Already have an account ? <Link to="/login"> Login </Link>{" "}
        </p>{" "}
      </div>{" "}
    </div>
  );
};

export default Register;
