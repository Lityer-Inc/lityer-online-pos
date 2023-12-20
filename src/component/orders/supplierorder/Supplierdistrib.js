import React, { useState } from "react";
import { Link } from "react-router-dom";

function Supplierdistrib() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleDelete = (rowId) => {
    // Implement the logic to delete the row
    // use the rowId to identify the row you want to delete
    // API call to delete the data
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Product Distribution to Warehouse</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Distribution</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
        <div className="col-12 text-right mb-3">
            <Link to="/suprequest">
              <button id="submitbut" className="btn btn-primary">
                Create&nbsp;Distribution
              </button>
            </Link>
          </div>
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
                  Distribution Request <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Amount($)</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Logistics($)</th>
                      <th scope="col">Warehouse Name</th>
                      <th scope="col">Warehouse Address</th>
                      <th scope="col">Sub Total</th>
                      <th scope="col">Tax Extimate</th>
                      <th scope="col">Grand Total</th>
                      <th scope="col">Status</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <a href="/vieworderbook" className="text-primary">
                          Litprod
                        </a>
                      </td>

                      <td>$500</td>
                      <td>6</td>
                      <td>8km</td>
                      <td>$15</td>
                      <td>Neamont</td>
                      <td>Califonia Dc</td>
                      <td>$515</td>
                      <td>$5</td>
                      <td>$520</td>
                      <td>
                        <span className="badge bg-success">Accepted</span>
                      </td>

                      <td>
                        <Link to="/editsupplierrequest">
                          <i
                            style={{ marginRight: "20px", cursor: "pointer" }}
                            className="bi bi-pencil"
                            title="Edit"
                          ></i>
                        </Link>
                        <i
                          style={{ cursor: "pointer" }}
                          className="bi bi-trash"
                          title="Delete"
                          onClick={() => handleDelete(1)}
                        ></i>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Supplierdistrib;
