import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Purchaseorder() {
  const [selectAll, setSelectAll] = useState(false);
  const [orders, setOrders] = useState([]);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const handleSelectRow = () => {
    // Implement row selection logic here
  };

  // useEffect(() => {
  //   const fetchOrders = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8000/orders/all_orders');
  //       if (!response.ok) {
  //         throw new Error('Network response has error.');
  //       }
  //      const data =  await response.json();
  //      setOrders(data);
  //     } catch (error) {
  //       console.error('Error fetching orders:', error);
  //     }
  //   };

  //   fetchOrders();
  // }, []);

  return (
    <div>
      <div className="pagetitle">
        <h1>Purchase orders</h1>
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/">Home</a>
            </li>
            <li className="breadcrumb-item active">Purchase orders</li>
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
                  Recent Sales <span>| Today</span>
                </h5>
                <table className="table datatable">
                  <thead>
                    <tr>
                      <th scope="col">
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={toggleSelectAll}
                        />
                      </th>
                      <th scope="col">Order</th>
                      <th scope="col">Date</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Channel</th>
                      <th scope="col">Products</th>
                      <th scope="col">Total</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectAll}
                          onChange={handleSelectRow}
                        />
                      </td>
                      <th scope="row">
                        <a href="#">#1</a>
                      </th>
                      <td>Jan 23, 2023</td>
                      <td>Brandon Jacob</td>
                      <td>Website</td>
                      <td>
                        <Link to="/shipment" className="text-primary">
                          product1, product2, product3, product4, product5
                        </Link>
                      </td>
                      <td>$234.00</td>
                      <td>
                        <div style={{ width: "70%" }}>
                          <select id="inputState" class="form-select">
                            <option selected>Paid</option>
                            <option>Await Shipping</option>
                            <option>Shipped</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                    {/* More rows */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Purchaseorder;
