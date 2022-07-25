import React from "react";
import "./Inicio.css";
import bicycle from "../../resources/img/bicycle.png";
import register from "../../resources/img/register.png";
import cogwheel from "../../resources/img/cogwheel.png";
import licenseplate from "../../resources/img/licenseplate.png";
import "aos/dist/aos.css";
import AOS from "aos";

const Inicio = () => {
  AOS.init();
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
        <div></div>
      </section>
      <section className="section-cards">
        <div className="cards-container">
          <div className="card">
            <div className="card-container">
              <img className="card-img" src={register} alt="registrate"></img>
              <p>
                <strong> #1 Registrate</strong> en nuestra plataforma
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <img className="card-img" src={cogwheel} alt="registrate"></img>
              <p>
                <strong> #2 Registra</strong> tus bicicletas con sus datos
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-container">
              <img
                className="card-img"
                src={licenseplate}
                alt="registrate"
              ></img>
              <p>
                <strong> #3 Genera</strong> tu tarjeta de propiedad y placa
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Inicio;
