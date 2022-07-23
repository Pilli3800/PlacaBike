import React, { useState } from "react";
import "./Registro.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Registro = () => {
  AOS.init();

  const [data, setData] = useState({
    email: "",
    password: "",
    dni: "",
  });

  const { email, password, dni } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="registro-container">
      <div className="register-form-container" data-aos="fade-down">
        <div className="register-form-container-header">
          <h3>Registro</h3>
        </div>
        <form className="register-form" onSubmit={submitHandler}>
          <input
            className="register-input"
            type="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input
            className="register-input"
            type="text"
            name="dni"
            placeholder="Ingrese su DNI"
            defaultValue={dni}
            onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            className="register-submit"
            name="submit"
            value="Registro"
          />
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
export default Registro;
