import React, { useState } from "react";
import "./Login.css";
import AOS from "aos";
import { Link, useNavigate } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../services/firebase";
import Swal from "sweetalert2";

const Login = () => {
  AOS.init();

  const [loading, setLoading] = useState(false);
  const override = {
    display: "block",
    margin: "45.6vh auto",
  };

  let navigate = useNavigate();

  /* const [data, setData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = data;
  let obj = false;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };*/

  const submitHandler = (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "" || password === "") {
      Swal.fire({
        title: "Campos Vacíos",
        text: "Tiene que llenar sus datos para ingresar.",
        icon: "error",
      });
    } else {
      setLoading(true);
      console.log(email, password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          localStorage.setItem("user", JSON.stringify(email));
          setLoading(false);
          navigate(`/user/${user.email}`);
        })
        .catch((error) => {
          setLoading(false);
          navigate(`/login`);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          console.log(errorCode, typeof errorMessage);
          Swal.fire({
            title: "Error al ingresar",
            text: errorMessage,
            icon: "error",
          });
        });
    }
    // console.log(data);
    // localStorage.setItem("user", JSON.stringify(data));
    // obj = users.find((element) => element.name === data.username);
    // console.log(obj);
  };

  if (loading) {
    return (
      <BarLoader speed={1} loading={loading} cssOverride={override} size={50} />
    );
  }

  return (
    <div className="login-container">
      <div className="login-form-container" data-aos="fade-down">
        <div className="login-form-container-header">
          <h3>Bienvenido</h3>
        </div>
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="login-input"
            type="email"
            name="username"
            placeholder="Ingrese su correo electrónico"
            id="email"
            // value={username}
            // onChange={changeHandler}
          />
          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="Ingrese su contraseña"
            id="password"
            // value={password}
            // onChange={changeHandler}
          />
          <br />
          <input
            type="submit"
            className="login-submit"
            name="submit"
            value="Ingresar"
          />
        </form>
        <div className="login-form-helper">
          <p className="login-helper">
            ¿No estas registrado aún?{" "}
            <span className="spanHelperDark">
              <Link className="link" to="/register">
                Registrate
              </Link>
            </span>
          </p>
          <p className="login-helper">
            ¿Olvidaste tu contraseña?{" "}
            <span className="spanHelperDark">
              <Link className="link" to="/recuperar">
                Recuperala
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
