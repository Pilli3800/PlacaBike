import React, { useState } from "react";
import "./Ingresar.css";
import AOS from "aos";
import { Link } from "react-router-dom";

const Ingresar = () => {
  AOS.init();

  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <div className="ingresar-container">
      <div className="login-form-container" data-aos="fade-down">
        <div className="login-form-container-header">
          <h3>Bienvenido</h3>
        </div>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="Ingrese su DNI"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <input type="submit" className="login-submit" name="submit" value="Ingresar" />
        </form>
        <div className="login-form-helper">
          <p className="login-helper">
            ¿No estas registrado aún?{" "}
            <span className="spanHelperDark"><Link to="/registro">Registrate</Link></span>
          </p>
          <p className="login-helper">
            ¿Olvidaste tu contraseña?{" "}
            <span className="spanHelperDark"><Link to="/recuperar">Recuperala</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Ingresar;
