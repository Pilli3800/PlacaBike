import React from "react";
import "./Sobrenosotros.css";
import "aos/dist/aos.css";
import AOS from "aos";
import ciclistas from "../../resources/img/ciclistas.png";
import policia from "../../resources/img/policia.png";
import documentos from "../../resources/img/documentos.png";

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
      <section className="sobrenosotros-section section2">
        <div>
          <p className="textSection">
            Lorem ipsum dolor sit amet consectetur adipiscing elit eros,
            pharetra mattis quisque lacus viverra mauris magnis natoque, semper
            etiam morbi diam venenatis auctor lacinia. Habitant in cras rhoncus
            ultricies felis, ut massa iaculis pretium, eros lacinia laoreet dis.
          </p>
        </div>
      </section>
      <section className="sobrenosotros-section section3">
        <p className="titleCards">¿Que buscamos?</p>
        <div className="cards">
          <div className="card">
            <img className="card-img" src={documentos} alt="documentos"></img>
            <p>
              <strong>Promover</strong> formalidad al sector de ciclismo en
              Arequipa.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={policia} alt="policia" ></img>
            <p>
              <strong>Proteger</strong> los bienes como lo son la bicicletas de
              robos y fraudes.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={ciclistas} alt="ciclistas"></img>
            <p>
              <strong>Impulsar</strong> el uso de la bicicleta en Arequipa.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Sobrenosotros;
