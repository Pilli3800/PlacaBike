import React from "react";
import "./Sobrenosotros.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Sobrenosotros = () => {
  AOS.init();
  return (
    <div className="sobrenosotros-container">
      <section className="sobrenosotros-section section1">
        <div>
          <h2 data-aos="fade-down" className="titleSection">
            ¿Qué es Placa <span className="darkSpan">Bike?</span>
          </h2>
        </div>
      </section>
    </div>
  );
};
export default Sobrenosotros;
