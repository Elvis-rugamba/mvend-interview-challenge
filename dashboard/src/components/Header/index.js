import React from "react";
import { Switch, Route, Link, Redirect, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBell,
  faChartBar,
  faChevronDown,
  faCube,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import img from "../../logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <FontAwesomeIcon icon={faSearch} className="nav-icon" />
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
          </li>
        </ul>
        <ul className="navbar-nav right">
          <li className="navbar-item notification">
            <Link to="#" className="nav-link">
              <FontAwesomeIcon icon={faBell} className="nav-icon" />
            </Link>
          </li>
          <li className="navbar-item dropdown">
            <Link to="#" className="nav-link dropdown-toggle">
              <img src={img} alt="Profile" className="profile-img" />
              <span className="user-name">John Doe</span>
              <FontAwesomeIcon
                icon={faChevronDown}
                className="nav-icon chevron"
              />
            </Link>
            {/* <ul className="dropdown-menu">
                  <li className="dropdown-item">
                    <div className="menu-item">
                      <FontAwesomeIcon
                        icon={faBell}
                        size="2x"
                        className="nav-icon"
                      />
                    </div>
                  </li>
                </ul> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
