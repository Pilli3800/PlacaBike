import React, { useContext } from "react";
import "./UserContainer.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Container } from "@mui/system";
import { Link, Outlet, useParams } from "react-router-dom";
import UserContext from "../../../../contexts/UserContext";

const UserContainer = (props) => {
  const { username } = useParams();
  const context = useContext(UserContext);

  return (
    <Container>
      <div className="UserContainer-container">
        <Outlet />
      </div>
    </Container>
  );
};

export default UserContainer;
