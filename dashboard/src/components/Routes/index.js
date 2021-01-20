import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import Login from "../../pages/Login";
import Error404 from "../../pages/Error404";
import DashboardLayout from "../../layouts/Dashboard";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <PublicRoute exact path="/login" component={Login} />
      <PrivateRoute path="/admin" component={DashboardLayout} />
      <Route exact render={() => <Error404 />} />
    </Switch>
  );
};

export default Routes;
