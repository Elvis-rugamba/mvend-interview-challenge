import React from "react";
import { Route, Redirect } from "react-router-dom";

import useAuth from "../../hooks/use-auth";

function PublicRoute({ component: Component, ...rest }) {
  let auth = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isAuthenticated ? (
          <Redirect
            to={{
              pathname: "/admin",
            }}
          />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

export default PublicRoute;
