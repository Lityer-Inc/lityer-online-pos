import React, { useState } from "react";

function Purchaseorder() {
  const [selectedStatus, setSelectedStatus] = useState("Paid");
  const [statusDropdownOpen, setStatusDropdownOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  const handleStatusChange = (newStatus) => {
    setSelectedStatus(newStatus);
    toggleStatusDropdown();
  };

  const toggleStatusDropdown = () => {
    setStatusDropdownOpen(!statusDropdownOpen);
  };

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const statusOptions = [
    { label: "Paid", style: "success" },
    { label: "Await Shipping", style: "warning" },
    { label: "Shipped", style: "warning" },
  ];

  const handleSelectRow = () => {
    // Implement row selection logic here
  };

  return (
    <div>
      <div className="pagetitle">
        <h1>Purchase orders</h1>
      </div>
      <div className="col-lg-12">
        <div className="row">
          <div className="col-12">
            <div className="card recent-sales overflow-auto">
              <div className="filter">
                <a className="icon" href="#" onClick={toggleStatusDropdown}>
                  <i className="bi bi-three-dots"></i>
                </a>
                {statusDropdownOpen && (
                  <div className="custom-dropdown">
                    {statusOptions.map((option) => (
                      <a
                        key={option.label}
                        href="#"
                        onClick={() => handleStatusChange(option.label)}
                        className={`dropdown-item ${
                          option.label === selectedStatus ? 'active' : ''
                        }`}
                      >
                        {option.label}
                      </a>
                    ))}
                  </div>
                )}
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
                      <th scope="col">Product</th>
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
                        <a href="#" className="text-primary">
                          product1
                        </a>
                      </td>
                      <td>$234.00</td>
                      <td>
                        <div
                          className={`custom-dropdown status-dropdown ${
                            statusOptions.find(
                              (option) => option.label === selectedStatus
                            ).style
                          }`}
                        >
                          <a
                            href="#"
                            className="dropdown-toggle"
                            onClick={toggleStatusDropdown}
                          >
                            {selectedStatus}
                          </a>
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
