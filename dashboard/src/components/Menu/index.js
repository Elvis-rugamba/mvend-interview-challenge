import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Menu.css";

const Menu = ({ label, link, icon }) => {
  return (
    <li className="link-item">
      <NavLink to={link} activeClassName="activeLink" exact>
        <div className="menu-item">
          <FontAwesomeIcon icon={icon} size="2x" className="menu-icon" />
          <span className="menu-label">{label}</span>
        </div>
      </NavLink>
    </li>
  );
};

export default Menu;
