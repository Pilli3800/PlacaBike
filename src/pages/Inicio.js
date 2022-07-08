import React from "react";
import "./Inicio.css";
import bicycle from "../resources/img/bicycle.png";
import chains from "../resources/img/chains.png";

const Inicio = () => {
  return (
    <main>
      <section className="section-hero">
        <div className="hero-container">
          <div className="hero-container-text">
            <h1>
              Es hora de sacar la <span className="whiteSpan">PLACA</span> para
              tu <span className="darkSpan">BIKE</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              venenatis, quam et sodales pharetra, dolor ante blandit neque, eu
              finibus dolor velit at quam.{" "}
            </p>
          </div>
          <div className="hero-container-img">
            <img className="bicycle" src={bicycle} alt="bicycle"></img>
          </div>
        </div>
      </section>
      <section className="section-cards">
        <div className="cards-container">
            <div className="card"></div>
            <div className="card"></div>
            <div className="card"></div>
        </div>
      </section>
    </main>
  );
};
export default Inicio;
