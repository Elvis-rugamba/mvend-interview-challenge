import React from "react";
import { Switch, Route, Link, Redirect, useLocation, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faHome } from "@fortawesome/free-solid-svg-icons";

import "./Breadcrumb.css";

const Breadcrumb = () => {
  let location = useLocation();
  let {id} = useParams()

  console.log(location, id);

  return (
    <div className="breadcrumb-container">
      <ul className="breadcrumb-ul">
        <li className="breadcrumb-item">
          <FontAwesomeIcon icon={faHome} className="separator-icon" />
          <Link to="admin" className="breadcrumb-link">
            Admin
          </Link>
        </li>
        <li className="breadcrumb-item">
          <FontAwesomeIcon icon={faChevronRight} className="nav-icon" />
        </li>
        <li className="breadcrumb-item">
          <span className="breadcrumb-text">
            {location.pathname === "/admin/units"
              ? "Manage Units"
              : location.pathname === "/admin/reporting"
              ? "Reporting"
              : ""}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
