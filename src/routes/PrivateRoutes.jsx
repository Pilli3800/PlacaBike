import React from "react";
import Login from "../pages/login/Login";
import { Outlet } from "react-router";

const userData = {
  name: JSON.parse(localStorage.getItem("user")),
};

const useAuth = () => {
  if (userData.name !== null) {
    return true;
  } else {
    return false;
  }
};

const PrivateRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />;
};

export default PrivateRoutes;
