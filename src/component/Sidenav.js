import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sidebarState } from '../atoms/atom/sidebarState';

const Sidenav = () => {
  const sidebarValue = useRecoilValue(sidebarState);

  return (
    <aside className={`sidebar lg:block ${sidebarValue ? "block": "hidden"}`}>
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <NavLink to="/" className="nav-link">
            <i className="bi bi-house"></i>
            <span>Home</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <Link
            to="/purchaseorder"
            className="nav-link collapsed"
            data-target="#Orders-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-cart3"></i>
            <span>Orders</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Orders-nav" className="nav-content collapse" data-parent="#sidebar-nav">
            <li>
              <NavLink to="/purchaseorder">
                <i className="bi bi-circle"></i>
                <span>Purchase Orders</span>
              </NavLink>
            </li>
            {/* <li>
              <NavLink to="/abandoncheck">
                <i className="bi bi-circle"></i>
                <span>Abandoned Checkout</span>
              </NavLink>
            </li> */}
          </ul>
        </li>

        <li className="nav-item">
          <Link
            to="/products"
            className="nav-link collapsed"
            data-target="#Products-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-box"></i>
            <span>Products</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Products-nav" className="nav-content collapse" data-parent="#sidebar-nav">
            
            <li>
              <NavLink to="/collections">
                <i className="bi bi-circle"></i>
                <span>Collections</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/inventory">
                <i className="bi bi-circle"></i>
                <span>Inventory</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* <li className="nav-item">
          <Link
            to="/"
            className="nav-link collapsed"
            data-target="#Customers-nav"
            data-toggle="collapse"
          >
            <i className="bi bi-people"></i>
            <span>Customers</span>
            <i className="bi bi-chevron-down ms-auto"></i>
          </Link>
          <ul id="Customers-nav" className="nav-content collapse" data-parent="#sidebar-nav">
            <li>
              <NavLink to="/segment">
                <i className="bi bi-circle"></i>
                <span>Segment</span>
              </NavLink>
            </li>
          </ul>
        </li> */}

        <li className="nav-item">
          <NavLink to="/pos" className="nav-link collapsed">
            <i className="bi bi-file-post"></i>
            <span>POS</span>
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/messages" className="nav-link collapsed">
            <i className="bi bi-chat-left-text"></i>
            <span>Messages</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/notifications" className="nav-link collapsed">
            <i className="bi bi-bell"></i>
            <span>Notification</span>
          </NavLink>
        </li>

        <li className="nav-heading">Pages</li>

        <li className="nav-item">
          <NavLink to="/contact" className="nav-link collapsed">
            <i className="bi bi-envelope"></i>
            <span>Contact</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile" className="nav-link collapsed">
            <i className="bi bi-person"></i>
            <span>Profile</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/security" className="nav-link collapsed">
            <i className="bi bi-gear"></i>
            <span>Settings</span>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Sidenav;
