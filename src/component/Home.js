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
      {/* Logistics contents */}
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">
                  (Supplier)Create a Distribution Request
                </h5>
                <div id="content">
                  <p>
                    Enter details about your product and price. Other parties
                    may counter-offer. Once an agreement is reached, your order
                    will be moved to the logistics book where it can be
                    fulfilled.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">
                  (Supplier)View Incoming Purchase Orders
                </h5>
                <div id="content">
                  <p>
                    View orders that warehouses have sent to you. You can agree
                    to the order terms or propose a counter offer. Once accepted
                    the order will be pushed to the logistics book for
                    fulfillment.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">(Supplier)View Sent Requests</h5>
                <div id="content">
                  <p>
                    See the orders you have previously sent. You can choose to
                    cancel or alter details here.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">
                  (Supplier)Set your Profile information
                </h5>
                <div id="content">
                  <p>Set your name, contact information, and address.</p>
                  <div className="col-md-12 text-center">
                    <Link to="/createprofile">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Set profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Supplier content */}

      {/* Logistics contents */}
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">(Logistics)View Potential Orders</h5>
                <div id="content">
                  <p>
                    View orders that are in need of transportation. You may
                    accept or negotiate the fee you will receive here.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">
                  (Logistics)View Your Transport Orders
                </h5>
                <div id="content">
                  <p>
                    View the transportation orders that you are responsible for
                    fulfilling. See both current and past deliveries.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">
                  (Logistics)Set your Profile information
                </h5>
                <div id="content">
                  <p>Set your name, contact information, and address.</p>
                  <div className="col-md-12 text-center">
                    <Link to="/createprofile">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Set profile
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Logistics content */}

      {/* Warehouse contents */}
      <div className="col-lg-12">
        <div className="row">
          <div className="col-xxl-4 col-xl-12">
            <div className="card info-card customers-card">
              <div className="card-body">
                <h5 className="card-title">View Purchase Orders</h5>
                <div id="content">
                  <p>
                    See all Purchase Orders from customers from the Grocey
                    Application
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Purchase Orders
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
                <h5 className="card-title">View Your Orders</h5>
                <div id="content">
                  <p>
                    See both open and closed orders. You can also see logistic
                    information and financial data surrounding the transaction.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">View Distribution Requests</h5>
                <div id="content">
                  <p>
                    See what suppliers are trying to push. You can counter-offer
                    with your own bid. If you come to an agreement the order
                    will be pushed to the logistics book to be filled.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">Create a Purchase Request</h5>
                <div id="content">
                  <p>
                    Enter details about your warehousing needs and issue an
                    order to a supplier. They may counter-offer. Once an
                    agreement is reached, your order will be moved to the
                    logistics book where it can be fulfilled.
                  </p>
                  <div className="col-md-12 text-center">
                    <Link to="/">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Enter
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
                <h5 className="card-title">Set your Profile information</h5>
                <div id="content">
                  <p>Set your name, contact information, and address.</p>
                  <div className="col-md-12 text-center">
                    <Link to="/createprofile">
                      <button
                        id="submitbut"
                        type="button"
                        className="button button-a button-big button-rounded"
                      >
                        Set profile
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
                    <Link to="/onboard">
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
                        <span className="badge bg-danger">Shipped</span>
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
      {/* End of warehouse content */}
    </>
  );
}

export default Home;
