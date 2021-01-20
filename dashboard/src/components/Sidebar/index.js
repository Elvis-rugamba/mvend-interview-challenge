import React from "react";
import { Switch, Route, Link, Redirect, useRouteMatch } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChartBar,
  faCube,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

import Menu from "../../components/Menu";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <nav className="side-nav">
        <header className="side-header">
          <Link to="/admin">
            <FontAwesomeIcon icon={faCube} size="3x" className="logo" />
          </Link>
          <button className="toggle">
            <FontAwesomeIcon icon={faBars} className="toggle-icon" />
          </button>
        </header>
        <ul className="side-links">
          <Menu label="Admin" link="/admin/units" icon={faHome} />
          <Menu label="Reporting" link="/admin/reporting" icon={faChartBar} />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
