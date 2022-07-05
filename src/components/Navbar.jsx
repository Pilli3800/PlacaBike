import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  const [btnState, setBtnState] = useState(false);

  const handleClick = () => {
    setBtnState((btnState) => !btnState);
  };

  let toggleClassCheck = btnState ? "nav-menu_visible" : "";

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="logo nav-link">
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
            <Link to="/" className="nav-menu-link nav-link">
              Inicio
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/sobrenosotros" className="nav-menu-link nav-link">
              Sobre Nosotros
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/contacto" className="nav-menu-link nav-link">
              Contacto
            </Link>
          </li>
          <li className="nav-menu-item">
            <Link
              to="/ingresar"
              className="nav-menu-link nav-link nav-menu-link_active"
            >
              Ingresar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
