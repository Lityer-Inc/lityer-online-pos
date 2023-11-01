import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Addproduct() {
  const [showForm, setShowForm] = useState(false);
  const [productDetails, setProductDetails] = useState({
    productName: "",
    productPrice: "",
    productQuantity: "",
    productDescription: "",
    barcode: "",
  });

  const handleEdit = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setProductDetails({
      productName: "",
      productPrice: "",
      productQuantity: "",
      productDescription: "",
      barcode: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to handle form submission
  };

  if (showForm) {
    return (
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card product-details-card">
              <div className="card-body">
                <h5 className="card-title">Add Product</h5>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="productName">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productName"
                      placeholder="Enter product name"
                      value={productDetails.productName}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productPrice">Product Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="productPrice"
                      placeholder="Enter product price"
                      value={productDetails.productPrice}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productPrice: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productQuantity">Product Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="productQuantity"
                      placeholder="Enter product quantity"
                      value={productDetails.productQuantity}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          productQuantity: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="productDescription">
                      Product Description
                    </label>
                    <ReactQuill
                      id="productDescription"
                      value={productDetails.productDescription}
                      onChange={(value) =>
                        setProductDetails({
                          ...productDetails,
                          productDescription: value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="barcode">Barcode</label>
                    <input
                      type="text"
                      className="form-control"
                      id="barcode"
                      placeholder="Enter barcode"
                      value={productDetails.barcode}
                      onChange={(e) =>
                        setProductDetails({
                          ...productDetails,
                          barcode: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="text-center">
                    <button
                      id="cancelbut"
                      type="button"
                      onClick={handleCancel}
                      className="button button-a button-big button-rounded"
                    >
                      Cancel
                    </button>
                    <button
                      id="submitbut"
                      type="submit"
                      className="button button-a button-big button-rounded"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </nav>
      </div>

      <div className="col-lg-12">
        <div className="row">
          {/* Customers Card */}
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">Add product</h5>
                <div id="content">
                  <p>
                    Write a description, add photos, and set pricing for the
                    product you plan to sell
                  </p>

                  <div className="col-md-12 text-center">
                    <button
                      id="submitbut"
                      onClick={handleEdit}
                      type="button" // Change to "button" instead of "submit"
                      className="button button-a button-big button-rounded"
                    >
                      Add product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
