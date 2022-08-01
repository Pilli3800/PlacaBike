import React from "react";
import Navbarauth from "../../ui/components/navbar-user-auth/Navbarauth";
import { Routes, Route } from "react-router-dom";
import Perfil from "../pages/auth/perfil/Perfil";
import Dashboard from "../pages/auth/container/UserContainer";
import Bicicletas from "../pages/auth/bicicletas/Bicicletas";
import UserContext from "../../contexts/UserContext";
import UserContainer from "../pages/auth/container/UserContainer";
import InicioUser from "../pages/auth/inicio/InicioUser";

const UserRoutes = () => {
  const userData = {
    name: JSON.parse(localStorage.getItem("user")),
  };
  return (
    <>
      <UserContext.Provider value={userData}>
        <Navbarauth />
        <Routes>
          <Route path=":username" element={<UserContainer />}>
            <Route path="inicio" element={<InicioUser/>} />
            <Route path="perfil" element={<Perfil />} />
            <Route path="bicicletas" element={<Bicicletas />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
};

export default UserRoutes;
