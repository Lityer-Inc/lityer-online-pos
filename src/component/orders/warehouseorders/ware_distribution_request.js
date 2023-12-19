import React, { useState } from "react";
import { Link } from "react-router-dom";

function Ware_distribution_request() {
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
        <h1>Supplier Distribution Request</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Request</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
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
                  Supplier distribution request <span>| Today</span>
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
                      <th scope="col">Suplier Name</th>
                      <th scope="col">Suplier Address</th>
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
                        <a href="#" className="text-primary">
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
                        <div style={{ width: "60%" }}>
                          <select id="inputState" class="form-select">
                            <option selected>...</option>
                            <option>Accepted</option>
                            <option>Rejected</option>
                            <option>Negotiate</option>
                          </select>
                        </div>
                      </td>
                      <td>
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

export default Ware_distribution_request;
