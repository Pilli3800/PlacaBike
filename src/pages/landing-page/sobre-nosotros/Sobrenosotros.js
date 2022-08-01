import React from "react";
import "./Sobrenosotros.css";
import AOS from "aos";
import ciclistas from "../../../resources/img/ciclistas.png";
import policia from "../../../resources/img/policia.png";
import documentos from "../../../resources/img/documentos.png";

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
      <section className="sobrenosotros-section section2" data-aos="fade-down">
        <div>
          <p className="textSection">
            Debido a la pandemia acontecida en el año 2020, la{" "}
            <strong>bicicleta</strong> se volvió la alternativa de transporte
            más usada del Perú. Sin embargo, eso significó que los índices de{" "}
            <strong>robos</strong> de bicicletas aumentó.
          </p>
          <br></br>
          <p className="textSection">
            En ese momento nace, Placa Bike. Una iniciativa social de jóvenes
            arequipeños, que buscan promover la formalidad del sector ciclismo
            buscando proteger nuestros bienes, nuestras bicicletas. Y
            obviamente, cuidar el medio ambiente impulsando el uso de la
            bicicleta.{" "}
          </p>
          <br></br>
          <p className="textSection">
            En nuestra plataforma, podrás generar una{" "}
            <strong>tarjeta de propiedad</strong> y una
            <strong> placa</strong> para cada una de tus bicicletas. Claro esto
            no tiene valor legal, pero si ayudará a certificar que es tuya,
            mediante tu boleta o código de serie.{" "}
          </p>
        </div>
      </section>
      <section className="sobrenosotros-section section3" data-aos="fade-down">
        <p className="titleCards">¿Qué buscamos?</p>
        <div className="cards">
          <div className="card">
            <img className="card-img" src={documentos} alt="documentos"></img>
            <p>
              <strong>Promover</strong> formalidad al sector de ciclismo en
              Arequipa.
            </p>
          </div>
          <div className="card">
            <img className="card-img" src={policia} alt="policia"></img>
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
