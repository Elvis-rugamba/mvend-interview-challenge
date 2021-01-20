import React from "react";
import { Route, Redirect } from "react-router-dom";

import useAuth from "../../hooks/use-auth";

function PrivateRoute({ component: Component, currentUser, ...rest }) {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={({ location, ...rest }) =>
        auth.isAuthenticated ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
