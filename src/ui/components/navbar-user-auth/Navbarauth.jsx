import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbarauth.css";
import UserContext from "../../../contexts/UserContext";

const Navbarauth = () => {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };
  const userData = {
    name: JSON.parse(localStorage.getItem("user")),
  };

  const handleClickRemoveLocalStorage = () => {
    localStorage.removeItem("user");
  };

  let toggleClassCheck = btnState ? "nav-menu_visible" : "";
  return (
    <UserContext.Provider value={userData}>
      <header className="header">
        <nav className="nav">
          <Link to={userData.name} className="logo nav-link">
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
                to={userData.name}
                onClick={handleClick}
                className="nav-menu-link nav-link"
              >
                Inicio
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to={`${userData.name}/perfil`}
                onClick={handleClick}
                className="nav-menu-link nav-link"
              >
                Mi Perfil
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to={`${userData.name}/bicicletas`}
                onClick={handleClick}
                className="nav-menu-link nav-link"
              >
                Mis Bicicletas
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link
                to="/"
                onClick={handleClickRemoveLocalStorage}
                className="nav-menu-link nav-link nav-menu-link_active"
              >
                Salir
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </UserContext.Provider>
  );
};

export default Navbarauth;
