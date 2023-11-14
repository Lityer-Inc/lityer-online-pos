import React, { useState } from "react";
import logo from "../assets/images/logo-lit.png";
import profile from "../assets/images/warehouse.png";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { sidebarState } from "../atoms/atom/sidebarState";

function Headnav() {
  const [isSearchBarVisible, setSearchBarVisible] = useState(false);
  const [sidebar, setSidebar] = useRecoilState(sidebarState);


  const toggleSearchBar = () => {
    setSearchBarVisible(!isSearchBarVisible);
  };

  const toggleSidebar = () => {
    setSidebar((prev)=> !prev);
  }

  return (
    <header className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center">
          <img src={logo} alt="logo" />
          <span className="d-none d-lg-block">Allsats</span>
        </Link>
        {sidebar ? (
          <MdClose onClick={toggleSidebar}
          className={`text-[2rem] lg:hidden`} />
        ) : (
          <MdOutlineMenu onClick={toggleSidebar}
          className={`text-[2rem] lg:hidden`} />
        )}
        
      </div>

      <div
        className={`search-bar${isSearchBarVisible ? " search-bar-show" : ""}`}
      >
        <form
          className="search-form d-flex align-items-center"
          method="POST"
          action="#"
        >
          <input
            type="text"
            name="query"
            placeholder="Search"
            title="Enter search keyword"
          />
          <button type="submit" title="Search">
            <i className="bi bi-search"></i>
          </button>
        </form>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a
              className="nav-link nav-icon search-bar-toggle"
              href="#"
              onClick={toggleSearchBar}
            >
              <i className="bi bi-search"></i>
            </a>
          </li>

          <li class="nav-item">
            <Link
              class="nav-link nav-icon"
              to="/notifications"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">4</span>
            </Link>
          </li>
          {/* End Notification Nav */}

          <li class="nav-item">
            <Link
              class="nav-link nav-icon"
              to="/messages"
              data-bs-toggle="dropdown"
            >
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-success badge-number">3</span>
            </Link>
          </li>

          <li className="nav-item pe-3">
            <Link
              className="nav-link nav-profile d-flex align-items-center pe-0"
              to="/profile"
              data-bs-toggle="dropdown"
            >
              <img src={profile} alt="Profile" className="rounded-circle" />
              <span className="d-none d-md-block ps-2">Username</span>
            </Link>
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
