import React, { useState } from 'react';
import logo from "../assets/images/logo-lit.png";
import profile from "../assets/images/warehouse.png";

function Headnav() {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);

  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  return (
    <header className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span className="d-none d-lg-block">Lityer</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>

      <div className={`search-bar${isSearchBarVisible ? ' search-bar-show' : ''}`}>
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#" onClick={toggleSearchBar}>
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li className="nav-item pe-3">
            <a className="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <img src={profile} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block ps-2">Username</span>
            </a>
          </li>

          <li className="nav-item pe-3">
            <button type="button" className="btn btn-primary">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headnav;
