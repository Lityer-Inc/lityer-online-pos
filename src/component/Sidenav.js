import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidenav() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    // <aside className="sidebar">
    //   <ul className="sidebar-nav" id="sidebar-nav">
    //     <li className="nav-item">
    //       <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
    //         <i className="bi bi-grid"></i>
    //         <span>Home</span>
    //       </Link>
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         className={`nav-link ${isActive('/orders') ? 'active' : ''}`}
    //         data-bs-toggle="collapse"
    //         href="#Orders-nav"
    //       >
    //         <i className="bi bi-menu-button-wide"></i>
    //         <span>Orders</span>
    //         <i className={`bi bi-chevron-down ms-auto ${isActive('/orders') ? 'active' : ''}`}></i>
    //       </a>
    //       <ul
    //         id="Orders-nav"
    //         className={`nav-content collapse ${isActive('/orders') ? 'show' : ''}`}
    //       >
    //         <li>
    //           <Link to="/draft">
    //             <i className="bi bi-circle"></i>
    //             <span>Draft</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/abandoned-checkout">
    //             <i className="bi bi-circle"></i>
    //             <span>Abandoned Checkout</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         className={`nav-link ${isActive('/products') ? 'active' : ''}`}
    //         data-bs-toggle="collapse"
    //         href="#Products-nav"
    //       >
    //         <i className="bi bi-menu-button-wide"></i>
    //         <span>Products</span>
    //         <i className={`bi bi-chevron-down ms-auto ${isActive('/products') ? 'active' : ''}`}></i>
    //       </a>
    //       <ul
    //         id="Products-nav"
    //         className={`nav-content collapse ${isActive('/products') ? 'show' : ''}`}
    //       >
    //         <li>
    //           <Link to="/allproducts">
    //             <i className="bi bi-circle"></i>
    //             <span>Add product</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/collections">
    //             <i className="bi bi-circle"></i>
    //             <span>Collections</span>
    //           </Link>
    //         </li>
    //         <li>
    //           <Link to="/inventory">
    //             <i className="bi bi-circle"></i>
    //             <span>Inventory</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </li>

    //     <li className="nav-item">
    //       <a
    //         className={`nav-link ${isActive('/customers') ? 'active' : ''}`}
    //         data-bs-toggle="collapse"
    //         href="#Customers-nav"
    //       >
    //         <i className="bi bi-menu-button-wide"></i>
    //         <span>Customers</span>
    //         <i className={`bi bi-chevron-down ms-auto ${isActive('/customers') ? 'active' : ''}`}></i>
    //       </a>
    //       <ul
    //         id="Customers-nav"
    //         className={`nav-content collapse ${isActive('/customers') ? 'show' : ''}`}
    //       >
    //         <li>
    //           <Link to="/segment">
    //             <i className="bi bi-circle"></i>
    //             <span>Segment</span>
    //           </Link>
    //         </li>
    //       </ul>
    //     </li>

    //     <li className="nav-heading">Pages</li>

    //     <li className="nav-item">
    //       <Link
    //         to="/contact"
    //         className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
    //       >
    //         <i className="bi bi-envelope"></i>
    //         <span>Contact</span>
    //       </Link>
    //     </li>
    //   </ul>
    // </aside>

    <aside className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="bi bi-grid"></i>
            <span>Home</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link collapsed" data-bs-target="#Orders-nav" data-bs-toggle="collapse">
            <i className="bi bi-menu-button-wide"></i>
            <span>Orders</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Orders-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/draft">
                <i className="bi bi-circle"></i>
                <span>Draft</span>
              </Link>
            </li>
            <li>
              <Link to="/abandoned-checkout">
                <i className="bi bi-circle"></i>
                <span>Abandoned Checkout</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link collapsed" data-bs-target="#Products-nav" data-bs-toggle="collapse">
            <i className="bi bi-menu-button-wide"></i>
            <span>Products</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Products-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/addproducts">
                <i className="bi bi-circle"></i>
                <span>Add product</span>
              </Link>
            </li>
            <li>
              <Link to="/collections">
                <i className="bi bi-circle"></i>
                <span>Collections</span>
              </Link>
            </li>
            <li>
              <Link to="/inventory">
                <i className="bi bi-circle"></i>
                <span>Inventory</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-item">
          <Link to="/" className="nav-link collapsed" data-bs-target="#Customers-nav" data-bs-toggle="collapse">
            <i className="bi bi-menu-button-wide"></i>
            <span>Customers</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Customers-nav" className="nav-content collapse" data-bs-parent="#sidebar-nav">
            <li>
              <Link to="/segment">
                <i className="bi bi-circle"></i>
                <span>Segment</span>
              </Link>
            </li>
          </ul>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <Link to="/contact" className="nav-link collapsed">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidenav;
