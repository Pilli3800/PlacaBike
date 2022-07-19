import React, { useState } from "react";
import "./Recuperar.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Recuperar = () => {
  AOS.init();

  const [data, setData] = useState({
    email: ""
  });

  const { email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="recuperar-container">
      <div className="login-form-container" data-aos="fade-down">
        <div className="login-form-container-header">
          <h3>Recuperación de contraseña</h3>
        </div>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="login-input"
            type="text"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input type="submit" className="login-submit" name="submit" value="Recuperar" />
        </form>
        <div className="register-form-helper">
          <span className="spanHelperDark">
            <Link className="link" to="/ingresar">Atrás</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Recuperar;
