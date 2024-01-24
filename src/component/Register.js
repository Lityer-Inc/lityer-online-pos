import React, { useState } from "react";
import logo from "../assets/images/logo-full.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { Toaster, toast } from "sonner";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    // firstName: "",
    // lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: ""
  });
  const navigate = useNavigate();

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
      const response = await axios.post("/user/admin/register", formData);
      toast.success("Succesfully Registered !");
      setTimeout(() => {
        navigate("/storelist");
      }, 2000);

      localStorage.setItem("user", String(response.data.newAdmin.name));
      localStorage.setItem("token", String(response.data.token));
      return;

      // Check if userType is "Retailer" and redirect to storelist if true
      // if (formData.userType === "Retailer") {
      //   navigate("/storelist");
      // } else {
      //   navigate("/");
      // }
    } catch (error) {
      toast.error(String(error.response.data.error));
      console.error("Registration failed", error.response.data);
    }

    // console.log("Form Data:", formData);
  };

  let token = localStorage.getItem("token");

  if (token !== undefined || null) {
    return <Navigate to="/storelist" />;
  }

  return (
    <div id="boxit">
      <Toaster />
      <div id="logodiv">
        <img id="logoimg" src={logo} alt="Logo" />
      </div>{" "}
      <div className="auth-box">
        <h2> Sign Up </h2>{" "}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name"> Full Name </label>{" "}
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your first name"
              value={formData.name}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          {/* <div className="form-group">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Enter your last name"
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                      </div> */}{" "}
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
                  name="userType"
                  value="Supplier"
                  checked={formData.userType === "Supplier"}
                  onChange={handleInputChange}
                />
                Supplier{" "}
              </label>{" "}
            </div>{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="retailer"
                  checked={formData.userType === "retailer"}
                  onChange={handleInputChange}
                />
                Retailer{" "}
              </label>{" "}
            </div>{" "}
            <div>
              <label>
                <input
                  type="radio"
                  name="userType"
                  value="Logistics"
                  checked={formData.userType === "Logistics"}
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
