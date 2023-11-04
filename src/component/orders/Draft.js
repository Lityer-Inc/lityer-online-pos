import React, { useState } from "react";

function Draft() {
  const [filter, setFilter] = useState("Today"); // Default filter

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <>
      <div className="pagetitle">
        <h1>Drafts</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Draft</li>
          </ol>
        </nav>
      </div>
      <div className="col-lg-12">
        <div className="row">
          {/* Filter Dropdown */}
          <div className="col-12 mb-3">
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="filterDropdown"
                data-bs-toggle="dropdown"
              >
                Filter: {filter}
              </button>
              <ul className="dropdown-menu" aria-labelledby="filterDropdown">
                <li onClick={() => handleFilterChange("Today")}>
                  <a className="dropdown-item">Today</a>
                </li>
                <li onClick={() => handleFilterChange("This Month")}>
                  <a className="dropdown-item">This Month</a>
                </li>
                <li onClick={() => handleFilterChange("This Year")}>
                  <a className="dropdown-item">This Year</a>
                </li>
              </ul>
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
                      <th scope="col">Customer</th>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">
                        <a href="#">1</a>
                      </th>
                      <td>Brandon Jacob</td>
                      <td>
                        <a href="#" className="text-primary">
                          product1
                        </a>
                      </td>
                      <td>$0</td>
                      <td>
                        <span className="badge bg-success">Received</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">2</a>
                      </th>
                      <td>Bridie Kessler</td>
                      <td>
                        <a href="#" className="text-primary">
                        product2
                        </a>
                      </td>
                      <td>$0</td>
                      <td>
                        <span className="badge bg-warning">Delivered</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">3</a>
                      </th>
                      <td>Ashleigh Langosh</td>
                      <td>
                        <a href="#" className="text-primary">
                        product3
                        </a>
                      </td>
                      <td>$0</td>
                      <td>
                        <span className="badge bg-success">Received</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">4</a>
                      </th>
                      <td>Angus Grady</td>
                      <td>
                        <a href="#" className="text-primar">
                        product4
                        </a>
                      </td>
                      <td>$0</td>
                      <td>
                        <span className="badge bg-danger">Sent</span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">
                        <a href="#">5</a>
                      </th>
                      <td>Raheem Lehner</td>
                      <td>
                        <a href="#" className="text-primary">
                        product5
                        </a>
                      </td>
                      <td>$0</td>
                      <td>
                      <span className="badge bg-warning">Received(WA)</span>
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

export default Draft;
