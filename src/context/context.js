"use client";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
const AuthContext = React.createContext();
export const Auth = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  const [User, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("User") || null));
  }, []);

  const SetUser = () => {
    setUser(JSON.parse(localStorage.getItem("User") || null));
  };

  const MyLogout = () => {
    localStorage.removeItem("User");
    SetUser();
  };
  const value = {
    User,
    SetUser,
    MyLogout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
