import React from "react";
import { Avatar } from "@mui/material";
import "./Perfil.css";
import UserContext from "../../../../contexts/UserContext";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

const Perfil = () => {
  return (
    <UserContext.Consumer>
      {(userData) => {
        return (
          <div className="perfil-container">
            <h3>Detalles del Perfil</h3>
            <Avatar sx={{ width: 60, height: 60, m: 2 }}>
              {userData.name.toString().charAt(0).toUpperCase()}
            </Avatar>
            <p>
              <strong>Cuenta actual: </strong>
              {userData.name}
            </p>
            <div className="perfil-datos-container">
              <TextField
                disabled
                id="outlined-disabled"
                label="Nombres"
                defaultValue="Luis Alonso"
                sx={{ m: 2, width: 300 }}
              />
              <br></br>
              <TextField
                disabled
                id="outlined-disabled"
                label="Apellidos"
                defaultValue="Alvarez Aguilar"
                sx={{ m: 2, width: 300 }}
              />
              <br></br>
              <TextField
                id="outlined"
                label="Correo electrónico"
                defaultValue={userData.name}
                sx={{ m: 2, width: 300 }}
              />
              <br></br>
              <TextField
                disabled
                id="outlined-disabled"
                label="DNI"
                defaultValue="72206448"
                sx={{ m: 2, width: 300 }}
              />
              <br></br>
              <TextField
                id="outlined"
                label="Contraseña Nueva"
                defaultValue="************"
                sx={{ m: 2, width: 300 }}
              />
              <TextField
                id="outlined"
                label="Repetir Contraseña"
                defaultValue="************"
                sx={{ m: 2, width: 300 }}
              />
              <br></br>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default Perfil;
