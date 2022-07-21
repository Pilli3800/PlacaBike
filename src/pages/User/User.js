import React from "react";
import "./User.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Container } from "@mui/system";
import { Link, Outlet, useParams } from "react-router-dom";

const User = () => {
  const { username } = useParams();
  return (
    <Container>
      <div className="user-container">
        <PopupState variant="popover" popupId="demo-popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Menú
              </Button>
              <Menu {...bindMenu(popupState)}>
                <Link to="perfil" className="link">
                  <MenuItem onClick={popupState.close}>Mi Cuenta</MenuItem>
                </Link>
                <Link to='bicicletas' className="link">
                  <MenuItem onClick={popupState.close}>Mis Bicicletas</MenuItem>
                </Link>
                <Link to="/" className="link"><MenuItem onClick={popupState.close}>Cerrar Sesión</MenuItem>
                </Link>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
        <h3>Bienvenido: {username}</h3>
        <Outlet />
      </div>
    </Container>
  );
};

export default User;
