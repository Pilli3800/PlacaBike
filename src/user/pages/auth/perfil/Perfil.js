import React from "react";
import { Avatar } from "@mui/material";
import "./Perfil.css";
import UserContext from "../../../../contexts/UserContext";

const Perfil = () => {
  return (
    <UserContext.Consumer>
      {(userData) => {
        return (
          <div>
            Perfil
            <Avatar>{userData.name.toString().charAt(0).toUpperCase()}</Avatar>
            <p>Detalles del Perfil</p>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Perfil;
