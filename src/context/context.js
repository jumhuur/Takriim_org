"use client";
import React, { useContext } from "react";
import { useState } from "react";
const AuthContext = React.createContext();
export const Auth = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  // const [User, setUser] = useState(localStorage.getItem("User"));
  const [User, setUser] = useState(
    JSON.parse(localStorage.getItem("User") || null)
  );

  const SetUser = () => {
    setUser(JSON.parse(localStorage.getItem("User") || null));
  };
  console.log(User);
  const value = {
    User,
    SetUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
