import React, { createContext, useState } from "react";

const fakeAuth = {
    isAuthenticated: false,
    signin(cb) {
      fakeAuth.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      fakeAuth.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };

export const authContext = createContext();

export default function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const [user, setUser] = useState(null);

    const value = {
        isAuthenticated,
        user,
        signin: (cb) => {
            return fakeAuth.signin(() => {
              setIsAuthenticated(true);
              setUser("user");
              cb();
            });
          },
          signout: cb => {
            return fakeAuth.signout(() => {
              setIsAuthenticated(false);
              setUser(null);
              cb();
            });
          },
      };

  return (
    <authContext.Provider value={value}>
      {children}
    </authContext.Provider>
  );
}

  
  