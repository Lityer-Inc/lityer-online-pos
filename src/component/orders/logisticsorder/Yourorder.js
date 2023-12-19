import React, { useState } from "react";
import { Link } from "react-router-dom";

function Yourorder() {
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
        <h1>Potentia Orders</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">orders</li>
          </ol>
        </nav>
      </div>
      {/* supplier to warehouse */}
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
                  Supplier to Warehouse <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Suplier Name</th>
                      <th scope="col">Suplier Address</th>
                      <th scope="col">Warehouse Name</th>
                      <th scope="col">Warehouse Address</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Total</th>
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

                      <td>5</td>
                      <td>8km</td>
                      <td>Neamont</td>
                      <td>Califonia Dc</td>
                      <td>Shooshi mapp</td>
                      <td>Texas</td>
                      <td>$4</td>
                      <td>$24</td>
                      <td>$20</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Delivered
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Supplier to Warehouse */}

      {/* Warehouse to consumers */}
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
                  Warehouse to consumers <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Product</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total Milage(km)</th>
                      <th scope="col">Warehouse Name</th>
                      <th scope="col">Warehouse Address</th>
                      <th scope="col">Customer Name</th>
                      <th scope="col">Customer Address</th>
                      <th scope="col">Tax</th>
                      <th scope="col">Fee</th>
                      <th scope="col">Total</th>
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

                      <td>5</td>
                      <td>8km</td>
                      <td>Neamont</td>
                      <td>Califonia Dc</td>
                      <td>Shooshi mapp</td>
                      <td>Texas</td>
                      <td>$4</td>
                      <td>$24</td>
                      <td>$20</td>
                      <td>
                        <button type="button" className="btn btn-primary">
                          Delivered
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End warehouse to consumers */}
    </>
  );
}

export default Yourorder;
