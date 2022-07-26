import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarauth.css";

const Navbarauth = () => {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };

  let toggleClassCheck = btnState ? "nav-menu_visible" : "";
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/dashboard" className="logo nav-link">
          Placa <span>Bike</span>{" "}
        </Link>
        <button
          onClick={handleClick}
          className="nav-toggle"
          aria-label="Abrir menú"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className={`nav-menu ${toggleClassCheck}`}>
          <li className="nav-menu-item">
            <Link
              to="dashboard"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="perfil"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Mi Perfil
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="bicicletas"
              onClick={handleClick}
              className="nav-menu-link nav-link"
            >
              Mis Bicicletas
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/"
              onClick={handleClick}
              className="nav-menu-link nav-link nav-menu-link_active"
            >
              Salir
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbarauth;
