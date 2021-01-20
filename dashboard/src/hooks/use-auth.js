import { useContext } from "react";

import { authContext } from "../context/auth";

export default function useAuth() {
  const { isAuthenticated, user, signin, signout } = useContext(authContext);

  return {
    isAuthenticated,
    user,
    signin,
    signout,
  };
}
