import React, { useState } from "react";
import { Link } from "react-router-dom";
import product from "../../assets/images/bluewallet.png";

function Collections() {
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
        <h1>Products</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Product</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-12 text-right mb-3">
            <Link to="/createcollection">
              <button id="submitbut" className="btn btn-primary">
                Create&nbsp;Collection
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
                  Recent Sales <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">Select</th>
                      <th scope="col">Title</th>
                      <th scope="col">Product</th>
                      <th scope="col">Product Condition</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={product} alt="Product" id="tableimg" />
                        <a href="#" className="text-primary">
                          Litprod
                        </a>
                      </td>

                      <td>5</td>
                      <td>
                        <div style={{ width: "60%" }}>
                          <select id="inputState" class="form-select">
                            <option selected>...</option>
                            <option>Quantity control</option>
                            <option>Damaged</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <a href="/editcollection">
                          <i
                            style={{ marginRight: "20px", cursor: "pointer" }}
                            className="bi bi-pencil"
                            title="Edit"
                          ></i>
                        </a>
                        <i
                          style={{ cursor: "pointer" }}
                          className="bi bi-trash"
                          title="Delete"
                          onClick={() => handleDelete(1)}
                        ></i>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <input type="checkbox" />
                      </td>
                      <td>
                        <img src={product} alt="Product" id="tableimg" />
                        <a href="#" className="text-primary">
                          Catprod
                        </a>
                      </td>

                      <td>5</td>
                      <td>
                        <div style={{ width: "60%" }}>
                          <select id="inputState" class="form-select">
                            <option selected>...</option>
                            <option>Quantity control</option>
                            <option>Damaged</option>
                          </select>
                        </div>
                      </td>
                      <td>
                        <a href="/editcollection">
                          <i
                            style={{ marginRight: "20px", cursor: "pointer" }}
                            className="bi bi-pencil"
                            title="Edit"
                          ></i>
                        </a>
                        <i
                          style={{ cursor: "pointer" }}
                          className="bi bi-trash"
                          title="Delete"
                          onClick={() => handleDelete(2)}
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

export default Collections;
