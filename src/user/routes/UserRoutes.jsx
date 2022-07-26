import React from "react";
import Navbarauth from "../../ui/components/navbar-user-auth/Navbarauth";
import { Routes, Route } from "react-router-dom";
import Recovery from "../../pages/recovery/Recuperar";
import Perfil from "../pages/auth/perfil/Perfil";
import Dashboard from "../pages/auth/dashboard/Dashboard";
import Bicicletas from "../pages/auth/bicicletas/Bicicletas";

const UserRoutes = () => {
  return (
    <>
      <Navbarauth />
      <Routes>
        <Route path=":username" element={<Dashboard/>}>
          <Route path="dashboard" element={<Recovery/>} />
          <Route path="perfil" element={<Perfil/>} />
          <Route path="bicicletas" element={<Bicicletas />}/>
        </Route>
      </Routes>
    </>
  );
};

export default UserRoutes;
