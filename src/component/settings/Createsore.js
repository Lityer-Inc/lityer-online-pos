import React, { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import logo from "../../assets/images/logo-full.png";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import uploadicon from "../../assets/images/storeicon.png";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useJwt } from "../../hooks/useJwt";

const Createsore = () => {
  const [storeDetails, setStoreDetails] = useState({
    storeName: "",
    storeEmail: "",
    storeimgs: "",
    storeDelivary: "",
    storeDescription: "",
    thumbnailImage: null,
  });

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const jwt = useJwt();
  const retailerId = jwt.user ? jwt.user.id : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    //log things to console to check what they contain
    console.log("i just created a store");
    console.log(jwt.user);
    console.log(retailerId);
    console.log(token);

    //verifiy token
    if (!token) {
      console.error('No token found');
      // Handle the case where the token is not found (e.g., redirect to login)
      return;
    }

    try {

      const config = {
        headers: {
          Authorization: `Bearer ${token}`, // Assuming the JWT token is stored in user.token
        },
      };

      const response = await axios.post(`/${retailerId}/stores`, storeDetails, config);
      console.log("Store created successfully", response.data);
      toast.success("Store created successfully");
      navigate('/home');

    } catch (error) {
      toast.error("Store creation failed");
      console.error("Store creation failed", error.response.data);
    }
  };

  const handleThumbnailImageSelect = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        setStoreDetails({
          ...storeDetails,
          thumbnailImage: file,
        });
        // Display a preview of the selected image (optional)
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = document.getElementById("uploadimg");
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div id="boxit">
      <div id="logodiv">
        <img id="logoimg" src={logo} alt="Logo" />
      </div>

      <div className="auth-box">
        <h2>Create Store</h2>
        <form onSubmit={handleSubmit}>
          <div className="row gy-4">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="storeName">Store Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="storeName"
                  placeholder="Enter store Name"
                  value={storeDetails.storeName}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeName: e.target.value,
                    })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="productPrice">Store Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="productPrice"
                  placeholder="mystore@gmail.com"
                  value={storeDetails.productEmail}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      productEmail: e.target.value,
                    })
                  }
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="storeQuantity">Hours of Delivary</label>
                <input
                  type="number"
                  className="form-control"
                  id="storedelivary"
                  placeholder="2 hours"
                  value={storeDetails.storeDelivary}
                  onChange={(e) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeDelivary: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
            <div className="col-md-12">
              <div
                id="uploadpic"
                className="form-group"
                onClick={handleThumbnailImageSelect}
              >
                <img
                  src={
                    storeDetails.thumbnailImage
                      ? URL.createObjectURL(storeDetails.thumbnailImage)
                      : uploadicon
                  }
                  alt="Profile"
                  id="uploadimg"
                />
                <br></br>
                <span>
                  <i>Set Store Thumbnail</i>
                </span>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="storeDescription">Store Description</label>
                <ReactQuill
                  id="storeDescription"
                  value={storeDetails.storeDescription}
                  onChange={(value) =>
                    setStoreDetails({
                      ...storeDetails,
                      storeDescription: value,
                    })
                  }
                />
              </div>
            </div>

            <div className="text-center">
              <button
                id="submitbut"
                type="submit"
                onClick={handleSubmit}
                className="button button-a button-big button-rounded"
              >
                Create Store
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Createsore;
