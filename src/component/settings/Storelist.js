// Storelist.js

import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/images/logo-full.png";
// import storeimg from "../../assets/images/pos-products.jpg";
import axios from 'axios';

const Storelist = () => {
    const [stores, setStores] = useState([]);
    const retailerId = localStorage.getItem("retailerId");; 

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`/${retailerId}/stores`);
          setStores(response.data); // Update the state with the fetched data
        } catch (error) {
          console.error('There was a problem with the request:', error);
        }
      };
  
      fetchData();
    }, [retailerId]);

  // const stores = [
  //   {
  //     name: "Magni Dolores thsbs shjbdhd",
  //     description: "Delivery by 12:30pm",
  //     storeimg: storeimg,
  //   },
  //   {
  //     name: "Jane Smithwedjhue",
  //     description: "Delivery by 1:30pm",
  //     storeimg: storeimg,
  //   },
  //   {
  //     name: "Bob Johnson",
  //     description: "Delivery by 12:20am",
  //     storeimg: storeimg,
  //   },
  // ];

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/register" />;
  }

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" className="mx-auto" src={logo} alt="Logo" />
      </div>

      <div className="auth-box storelist">
        <h2>Your Stores</h2>

        {stores.map((creator, index) => (
          <Link to="/home" key={index}>
            <div className="col-md-12 d-flex align-items-stretch card">
              <div className="icon-box">
                <div className="storeimg">
                  <img
                    className="card-image"
                    src={creator.storeimg}
                    alt={`Creator ${index + 1}`}
                  />
                </div>
                <div className="storedes">
                  <h3 className="card-title">{creator.name}</h3>
                  <p className="card-paragraph" style={{ color: "green" }}>
                    <i className="bi-cart"> </i>
                    {creator.description}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
        <div className="text-center">
          <Link to="/home/createsore">
            <button
              id="submitbut"
              className="button button-a button-big button-rounded"
            >
              Create a New Store
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Storelist;
