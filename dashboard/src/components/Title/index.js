import React from "react";
import { useLocation } from "react-router-dom";

import "./Title.css";

const Title = () => {
  let location = useLocation();

  console.log(location);
  return (
    <div className="title-container">
      <h3 className="title">
        {location.pathname === "/admin/units"
          ? "Manage Units"
          : location.pathname === "/admin/reporting"
          ? "Reporting"
          : ""}
      </h3>
    </div>
  );
};

export default Title;
