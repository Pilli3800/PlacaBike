import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Contacto from "../pages/landing-page/contacto/Contacto";
import Inicio from "../pages/landing-page/inicio/Inicio";
import Sobrenosotros from "../pages/landing-page/sobre-nosotros/Sobrenosotros";
import Login from "../pages/login/Login";
import Recovery from "../pages/recovery/Recuperar";
import Register from "../pages/register/Register";
import Navbar from "../ui/components/navbar/Navbar";
import UserRoutes from "../user/routes/UserRoutes";

const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Inicio />} />
        <Route path="sobre-nosotros" element={<Sobrenosotros />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="recuperar" element={<Recovery />} />
        <Route path="user/*" element={<UserRoutes />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};

export default AppRouter;
