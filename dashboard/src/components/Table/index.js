import React from "react";
import PropTypes from "prop-types";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useLocation,
  NavLink,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faBars,
  faChartBar,
  faChevronDown,
  faChevronUp,
  faCog,
  faCube,
  faHome,
  faPen,
  faPlus,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";

import "./Table.css";

const renderData = (data, cols, actions, handleApprove, handleReject) =>
  data.map((row) => (
    <tr key={row.unit}>
      {!!cols && cols.map((col) => <td key={col.name}>{row[col.name]}</td>)}
      {actions && (
        <td key="actions">
          {/* <div className="dropdown">
            <button className="dropbtn"><img src={options} alt="more options" /></button>
            <div className="dropdown-content">
                <a href="#" >Add a comment</a>
                <a href="#" onClick={() => handleApprove(row)}>Approve request</a>
                <a href="#" onClick={() => handleReject(row)}>Reject request</a>
            </div>
        </div> */}
          <div className="table-actions">
            <Link to={`/admin/units/${row.unit}`} className="action-button">
              <FontAwesomeIcon icon={faPen} className="action-icon" />
            </Link>
            <Link to={`/admin/units/${row.unit}`} className="action-button">
              <FontAwesomeIcon icon={faCog} className="action-icon" />
            </Link>
            <Link to={`/admin/units/${row.unit}`} className="action-button">
              <FontAwesomeIcon icon={faBan} className="action-icon" />
            </Link>
            <Link to={`/admin/units/${row.unit}`} className="action-button">
              <FontAwesomeIcon icon={faBan} className="action-icon" />
            </Link>
          </div>
        </td>
      )}
    </tr>
  ));

const renderEmptyState = (cols, actions) => (
  <tr>
    <td colSpan={actions ? cols.length + 1 : cols.length}>
      There is no data in this table
    </td>
  </tr>
);

const Table = ({ cols, data, title, actions, handleApprove, handleReject }) => {
  return (
    <div className="data-table">
      <div className="table-header">
        <h4 className="table-title">{title}</h4>
        <div className="table-buttons">
          <Link to="/admin/units/new" className="add-button">
            <FontAwesomeIcon icon={faPlusCircle} className="button-icon" />
            <label>Add Unit</label>
          </Link>
          <button className="filter-button table-button">
            <FontAwesomeIcon icon={faPlus} className="button-icon" />
            Show Filter
            <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          </button>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            {cols.map((col) => (
              <th key={col.name}>{col.header}</th>
            ))}
            {actions && <th key="actions">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {data.length > 0
            ? renderData(data, cols, actions, handleApprove, handleReject)
            : renderEmptyState(cols, actions)}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  cols: PropTypes.arrayOf(),
  data: PropTypes.arrayOf(),
  title: PropTypes.string,
  actions: PropTypes.bool,
  handleApprove: PropTypes.func,
  handleReject: PropTypes.func,
};

Table.defaultProps = {
  cols: [
    { header: "ID", name: "id" },
    { header: "Name", name: "name" },
    { header: "Email", name: "email" },
    { header: "Date", name: "date" },
  ],
  data: [
    {
      id: 1,
      name: "Elvis",
      email: "elvisrugamba@example.com",
      date: ["1997-10-12", "1997-10-12"],
    },
  ],
  title: "Units",
  actions: false,
  handleApprove: () => {},
  handleReject: () => {},
};

export default Table;
