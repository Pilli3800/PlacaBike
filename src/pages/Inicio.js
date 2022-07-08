import React from "react";
import "./Inicio.css";
import bicycle from '../resources/img/bicycle.png';

const Inicio = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero-container">
          <h1>
            Es hora de sacar la <span className="whiteSpan">PLACA</span> para tu{" "}
            <span className="darkSpan">BIKE</span>
          </h1>
          <p>lnern gjrengjnrejgnrengrt</p>
        </div>
        <div className="hero-container-img">
            <img className="bicycle" src={bicycle} alt="bicycle"></img>
        </div>
      </section>
    </main>
  );
};
export default Inicio;
