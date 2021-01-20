import React from "react";

import Table from "../../components/Table";
import './Admin.css'

const cols = [
  { header: "Unit", name: "unit" },
  { header: "Unit Mac", name: "mac" },
  { header: "Unit Sim", name: "sim" },
  { header: "Unit Type", name: "type" },
  { header: "Unit Location", name: "location" },
  { header: "Vehicle Reg", name: "reg" },
  { header: "Status", name: "status" },
];

const data = [
  {
    unit: "EC0001",
    mac: "Empty Mac",
    sim: "25567",
    type: "Econospeed",
    location: "THUMASTON",
    reg: "v01.54",
    status: "Enabled",
  },
  {
    unit: "EC0002",
    mac: "Empty Mac",
    sim: "25568",
    type: "Econospeed",
    location: "DREWSBURY",
    reg: "v01.54",
    status: "Enabled",
  },
  {
    unit: "EC0003",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0004",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0005",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0006",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0007",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0008",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0009",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
  {
    unit: "EC0010",
    mac: "Empty Mac",
    sim: "25569",
    type: "Econospeed",
    location: "CHESTER",
    reg: "v01.54",
    status: "Disabled",
  },
];

const Admin = () => {
  return (
    <div className="admin-container">
      <Table
        cols={cols}
        data={data}
        title="Units"
        actions={true}
        // handleApprove={this.handleApprove}
        // handleReject={this.handleReject}
      />
    </div>
  );
};

export default Admin;
