import React, { useState } from "react";
import "./Registro.css";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebase";
import axios from "axios";

const Registro = () => {
  AOS.init();
  let navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    dni: "",
  });

  const { email, password, dni } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const password = e.target.password.value;
    const dni = e.target.dni.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        axios
          .post("https://placabike-5f044-default-rtdb.firebaseio.com/usuarios.json", {
            email: email,
            password: password,
            dni: dni
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigate("/ingresar", {
          replace: true,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Error al registrar");
        // ..
      });
    console.log(email, password, dni);
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
            id="email"
            placeholder="Ingrese su correo electrónico"
            // value={email}
            // onChange={changeHandler}
          />
          <br />
          <input
            className="register-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            id="password"
            // value={password}
            // onChange={changeHandler}
          />
          <br />
          <input
            className="register-input"
            type="text"
            name="dni"
            placeholder="Ingrese su DNI"
            id="dni"
            // defaultValue={dni}
            // onChange={changeHandler}
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
            <Link className="link" to="/ingresar">
              Atrás
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Registro;
