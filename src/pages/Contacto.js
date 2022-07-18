import React from "react";
import "./Contacto.css";
import { useState } from "react";
const Contacto = () => {
  const [data, setData] = useState({
    email: " ",
    message: " ",
  });

  const { email, message } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="section-contacto-container">
      <div className="contacto-container">
        <div className="contacto-text-container">
          <h2 className="contacto-title">¿Quieres decirnos algo?</h2>
          <p className="contacto-txt">Te dejamos nuestras redes sociales: </p>
          <div className="contacto-icons-container">
            <i className="fa-brands fa-facebook icon-social"></i>
            <i className="fa-brands fa-whatsapp icon-social"></i>
            <i className="fa-brands fa-instagram icon-social"></i>
          </div>
        </div>
        <div className="contacto-form-container">
          <form className="contacto-form" onSubmit={submitHandler}>
            <label className="contacto-label">Correo</label>
            <br></br>
            <input
              className="contacto-input"
              type="email"
              name="email"
              value={email}
              onChange={changeHandler}
            ></input>
            <br></br>
            <label className="contacto-label">Mensaje</label>
            <br></br>
            <textarea
              className="contacto-textarea"
              name="message"
              value={message}
              onChange={changeHandler}
            ></textarea>
            <br></br>
            <input className="contacto-submit" type="submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contacto;
