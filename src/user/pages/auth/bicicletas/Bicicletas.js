import React from "react";
import "./Bicicletas.css";
import Plate from "../../../../resources/img/licenseplate.png";
import Bike from "../../../../resources/img/bicycle.png";

const Bicicletas = () => {
  return (
    <div className="bicicletas-user-container">
      <div className="bicicletas-user-titulo">
        <h3>Bicicletas Registradas</h3>
        <p></p>
      </div>
      <div className="bicicletas-user-card-container">
        <div className="card-bicicleta">
          <div className="bicicleta-user-card-container">
            <img className="bicicleta-plate-img-card" src={Plate}></img>
            <div className="bicicleta-user-card-details">
              {" "}
              <p className="darkSpan">Bicicleta #1</p>
              <p>Código de Serie de Bicicleta: A376FHA6</p>
              <button className="button-bicicletas">Ver placa</button>{" "}
              <button className="button-bicicletas">Ver tarjeta</button>
            </div>
          </div>
        </div>
        <div className="card-bicicleta">
          <div className="bicicleta-user-card-container">
            <img className="bicicleta-plate-img-card" src={Bike}></img>
            <div className="bicicleta-user-card-details">
              {" "}
              <p className="darkSpan">Bicicleta #1</p>
              <p>Código de Serie de Bicicleta: A376FHA6</p>
              <button className="button-bicicletas">Ver placa</button>{" "}
              <button className="button-bicicletas">Ver tarjeta</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bicicletas;
