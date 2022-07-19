import React from "react";
import "./Inicio.css";
import bicycle from "../resources/img/bicycle.png";
import register from "../resources/img/register.png";
import cogwheel from "../resources/img/cogwheel.png";
import licenseplate from "../resources/img/licenseplate.png";
import "aos/dist/aos.css";
import Review from "../components/Review";
import AOS from "aos";
import { Link } from "react-router-dom";

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
            <div className="cssbuttons-io-button-container">
            <button className="cssbuttons-io-button">
              {" "}
              <Link className="link" to="/ingresar">Comenzar</Link>
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </button>
            </div>
          </div>
          <div className="hero-container-img">
            <img className="bicycle" src={bicycle} alt="bicycle"></img>
          </div>
        </div>
        <div></div>
      </section>
      <section className="section-cards">
        <div className="cards-container" data-aos="fade-up">
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
      <section className="section-sobrenosotros">
        <div className="sobrenosotros-container-inicio">
          <h3 data-aos="fade-left" className="sobrenosotros-title">
            ¿Conocias a Placa <span className="darkSpan">Bike?</span>
          </h3>
          <p data-aos="fade-right" className="sobrenosotros-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            condimentum elit. Nulla sagittis ullamcorper lorem in semper. Proin
            at bibendum augue, eu fermentum nisi. In scelerisque, orci vitae
            malesuada tristique, dui justo facilisis diam, nec dictum nunc odio
            a ipsum.
          </p>
        </div>
      </section>
      <section className="section-carrusel">
        <div>
          <Review />
        </div>
      </section>
    </main>
  );
};
export default Inicio;
