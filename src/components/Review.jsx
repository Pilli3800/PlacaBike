import "./Review.css";
// {bicicleta,altbici,foto,altfoto,review,nombre}

import foto from "../resources/img/foto.png";
import rueda from "../resources/img/rueda.png";
import bicicletasinruedas from "../resources/img/bicisinruedas.png";

const Review = () => {
  return (
    <div data-aos="fade-down" className="review__container">
      <div className="profile">
        <img className="profile-face" src={foto} alt="asda"></img>
        <img
          className="profile-bikewithoutwheels"
          src={bicicletasinruedas}
          alt="sda"
        ></img>
        <div className="ruedas">
          <img className="profile-wheel wheel1" src={rueda} alt="rueda"></img>
          <img className="profile-wheel wheel2" src={rueda} alt="rueda"></img>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="3000" className="info">
        <h2>asda</h2>
        <p>loremaeifnjnmajofanfnafnjoafnjoa</p>
      </div>
    </div>
  );
};

export default Review;
