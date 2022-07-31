import React from "react";
import "./Dashboard.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { Container } from "@mui/system";
import { Link, Outlet, useParams } from "react-router-dom";

const Dashboard = () => {
  const { username } = useParams();
  return (
    <Container>
      <div className="dashboard-container">
        <h3>Bienvenido: {username}</h3>
        <Outlet />
      </div>
    </Container>
  );
};

export default Dashboard;
