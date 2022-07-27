import React, { useState } from "react";
import "./Recovery.css";
import AOS from "aos";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Recovery = () => {
  AOS.init();

  const [data, setData] = useState({
    email: "",
  });

  const { email } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (data.email === "") {
      Swal.fire({
        title: "¡Campos Vacíos!",
        text: "Debe ingresar un correo electrónico para continuar con la recuperación.",
        icon: "error",
      });
    } else {
      console.log(data);
      Swal.fire({
        title: "¡Recuperación exitosa!",
        text: "Se le envio un mensaje a su correo electrónico con los detalles para la recuperación.",
        icon: "success",
      });
    }
  };

  return (
    <div className="recovery-container">
      <div className="login-form-container" data-aos="fade-down">
        <div className="login-form-container-header">
          <h3>Recuperación de contraseña</h3>
        </div>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="login-input"
            type="email"
            name="email"
            placeholder="Ingrese su correo electrónico"
            value={email}
            onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            className="login-submit"
            name="submit"
            value="Recuperar"
          />
        </form>
        <div className="register-form-helper">
          <span className="spanHelperDark">
            <Link className="link" to="/login">
              Atrás
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Recovery;
