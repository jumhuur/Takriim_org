"use client";
import React, { useContext, useEffect, useReducer } from "react";
import { useState } from "react";
import { AllHome, ACTIONS, INITIAL_SATATE } from "@/Radiuse/RadiuseHome";
const AuthContext = React.createContext();
export const Auth = () => {
  return useContext(AuthContext);
};

export const ContextProvider = ({ children }) => {
  // states
  const [User, setUser] = useState(null);
  const [state, dispatch] = useReducer(AllHome, INITIAL_SATATE);
  //readiuse

  // functions
  const GetAll = async () => {
    // last tabaruc
    const LTabaruc = await fetch("/api/Tabaruc/getAll/lastDone", {
      cache: "no-store",
    });
    const LasttabarucRes = await LTabaruc.json();
    if (LTabaruc.ok) {
      dispatch({ type: ACTIONS.GET_DATA, payload: LasttabarucRes });
    }

    if (!LTabaruc.ok) {
      console.log(LTabaruc);
    }
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("User") || null));
    GetAll();
  }, []);

  const SetUser = () => {
    setUser(JSON.parse(localStorage.getItem("User") || null));
  };

  const MyLogout = () => {
    localStorage.removeItem("User");
    SetUser();
  };

  //Export values
  const value = {
    User,
    SetUser,
    MyLogout,
    state,
    GetAll,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
