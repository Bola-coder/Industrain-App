import React from "react";
import AuthProvider from "./app/context/AuthContext";

const AppWrapper = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppWrapper;
