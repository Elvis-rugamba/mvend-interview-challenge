import React from "react";
import {
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useLocation,
  NavLink,
} from "react-router-dom";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import Breadcrumb from '../../components/Breadcrumb'
import Title from '../../components/Title'
import Admin from "../../pages/Admin";
import Add from "../../pages/Add";
import Unit from "../../pages/Unit";
import Reporting from "../../pages/Reporting";
import Error404 from "../../pages/Error404";
import "./DashboardLayout.css";

const items = [
  { to: "/admin/units", label: "Manage Units" },
  { to: "/admin/reporting", label: "Reporting" },
];

const DashboardLayout = (props) => {
  let { path, url } = useRouteMatch();

  return (
    <div className="layout-container">
      <Sidebar />
      <div className="layout-wrapper">
        <Header />
        <main className="layout-content">
          <Breadcrumb />
          <Title />
          <Switch>
            <Route
              exact
              path={path}
              render={() => <Redirect to={`${path}/units`} />}
            />
            <Route path={`${path}/units/new`} children={Add} />
            <Route path={`${path}/units/:id`} children={Unit} />
            <Route path={`${path}/units/:id/edit`} children={Unit} />
            <Route exact path={`${path}/units`} children={Admin} />
            <Route path={`${path}/reporting`} exact children={Reporting} />
            <Route component={Error404} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
