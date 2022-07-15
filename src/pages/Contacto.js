import React from "react";
import "./Contacto.css";
const Contacto = () => {
  return (
    <div className="section-contacto-container">
      <div className="contacto-container">
        <div className="contacto-text-container">
          <h2 className="contacto-title">¿Quieres decirnos algo?</h2>
          <p className="contacto-txt">Te dejamos nuestras redes sociales: </p>
          <div className="contacto-icons-container">
            <i class="fa-brands fa-facebook icon-social"></i>
            <i class="fa-brands fa-whatsapp icon-social"></i>
            <i class="fa-brands fa-instagram icon-social"></i>
          </div>
        </div>
        <div className="contacto-form-container"></div>
      </div>
    </div>
  );
};
export default Contacto;
