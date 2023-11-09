import React, { useState } from "react";
import product from "../assets/images/bluewallet.png";
import { Link } from "react-router-dom";

function Home() {
  const [filter, setFilter] = useState("Today"); // Default filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

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
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">Set your Profile information</h5>
                <div id="content">
                  <p>
                    Set your name, contact information, and address.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/createprofile">
                      <button
                        id="submitbut"
                        type="button"
                        cd
                        className="button button-a button-big button-rounded"
                      >
                        Create profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">Set your store information</h5>
                <div id="content">
                  <p>
                    Write the name, discription, and set pricing for the product
                    you plan to sell
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/createsore">
                      <button
                        id="submitbut"
                        type="button"
                        cd
                        className="button button-a button-big button-rounded"
                      >
                        Name store
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="row">
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
                    <Link to="/addproducts">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Add product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="row">
          {/* Sales Card */}
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  Sales <span>| Today</span>
                </h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-cart"></i>
                  </div>
                  <div className="ps-3">
                    <h6>0</h6>
                    <span className="text-success small pt-1 fw-bold">
                      12%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Sales Card */}

          {/* Revenue Card */}
          <div className="col-xxl-4 col-md-6">
            <div className="card info-card revenue-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>

              <div className="card-body">
                <h5 className="card-title">
                  Revenue <span>| This Month</span>
                </h5>

                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-currency-dollar"></i>
                  </div>
                  <div className="ps-3">
                    <h6>$0</h6>
                    <span className="text-success small pt-1 fw-bold">
                      8%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">increase</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Revenue Card */}
          {/* Customers Card */}
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Customers <span>| This Year</span>
                </h5>
                <div className="d-flex align-items-center">
                  <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                    <i className="bi bi-people"></i>
                  </div>
                  <div className="ps-3">
                    <h6>0</h6>
                    <span className="text-danger small pt-1 fw-bold">
                      12%
                    </span>{" "}
                    <span className="text-muted small pt-2 ps-1">decrease</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* End Customers Card */}
          {/* Recent Sales */}
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="filter">
                <a className="icon" href="#" data-bs-toggle="dropdown">
                  <i className="bi bi-three-dots"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li className="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Month
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      This Year
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-body">
                <h5 className="card-title">
                  Recent Sales <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">No</th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <a href="#">1</a>
                      </th>
                      <td>
                        <img src={product} alt="Product" id="tableimg" />
                        <a href="#" className="text-primary">
                          product1
                        </a>
                      </td>
                      <td>Brandon Jacob</td>

                      <td>$0</td>
                      <td>
                        <span className="badge bg-success">Received</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">2</a>
                      </th>
                      <td>
                        <img src={product} alt="Product" id="tableimg" />
                        <a href="#" className="text-primary">
                          product1
                        </a>
                      </td>
                      <td>Bridie Kessler</td>

                      <td>$0</td>
                      <td>
                        <span className="badge bg-warning">Delivered</span>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">
                        <a href="#">3</a>
                      </th>
                      <td>
                        <img src={product} alt="Product" id="tableimg" />
                        <a href="#" className="text-primary">
                          product1
                        </a>
                      </td>
                      <td>Angus Grady</td>

                      <td>$0</td>
                      <td>
                        <span className="badge bg-danger">Sent</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* End Recent Sales */}
        </div>
      </div>
    </>
  );
}

export default Home;
