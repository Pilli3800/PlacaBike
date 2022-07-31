import React, { useState } from "react";
import "./Register.css";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebase";
import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  AOS.init();
  let navigate = useNavigate();
  /*const [data, setData] = useState({
    email: "",
    password: "",
    dni: "",
  });

  const { email, password, dni } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };*/

  const submitHandler = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const nombres = e.target.nombres.value;
    const apellidos = e.target.apellidos.value;
    const password = e.target.password.value;
    const dni = e.target.dni.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        axios
          .post(
            `https://placabike-5f044-default-rtdb.firebaseio.com/usuarios/${dni}.json`,
            {
              email: email,
              nombres: nombres,
              apellidos: apellidos,
              password: password,
              dni: dni
            }
          )
          .then(function (response) {
            console.log(response);
            Swal.fire({
              title: "¡Se ha registrado con éxito!",
              text: "Bienvenido a Placa Bike.",
              icon: "success",
            });
          })
          .catch(function (error) {
            console.log(error);
            Swal.fire({
              title: "¡Error!",
              text: "No se pudo registrar, correo ya registrado o contraseña menor a 8 digitos.",
              icon: "error",
            });
          });
        navigate("/login", {
          replace: true,
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: "¡Error!",
          text: "No se pudo registrar, correo ya registrado o contraseña menor a 8 digitos.",
          icon: "error",
        });
        // ..
      });
    console.log(email, nombres, apellidos, password, dni);
  };

  return (
    <div className="register-container">
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
            onKeyPress={(event) => {
              if (/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="register-input"
            type="text"
            name="nombres"
            id="nombres"
            placeholder="Ingrese sus nombres"
            // value={email}
            // onChange={changeHandler}
          />
          <br />
          <input
            onKeyPress={(event) => {
              if (/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="register-input"
            type="text"
            name="apellidos"
            id="apellidos"
            placeholder="Ingrese sus apellidos"
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
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="register-input"
            type="text"
            name="dni"
            placeholder="Ingrese su DNI"
            id="dni"
            maxLength="8"
            // defaultValue={dni}
            // onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            className="register-submit"
            name="submit"
            value="Registrar"
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
export default Register;
