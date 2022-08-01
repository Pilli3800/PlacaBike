import React from "react";
import Navbarauth from "../../ui/components/navbar-user-auth/Navbarauth";
import { Routes, Route } from "react-router-dom";
import Perfil from "../pages/auth/perfil/Perfil";
import Dashboard from "../pages/auth/dashboard/Dashboard";
import Bicicletas from "../pages/auth/bicicletas/Bicicletas";
import UserContext from "../../context/UserContext";

const UserRoutes = () => {
  const userData = {
    name: JSON.parse(localStorage.getItem('user')),
  };
  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbarauth />
        <Routes>
          <Route path=":username" element={<Dashboard />}>
            <Route path="perfil" element={<Perfil />} />
            <Route path="bicicletas" element={<Bicicletas />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default UserRoutes;
