import React from "react";
import "./InicioUser.css";
import UserContext from "../../../../contexts/UserContext";

const InicioUser = () => {
  return (
    <UserContext.Consumer>
      {(userData) => {
        return (
          <div className="inicio-user-container">
            <div className="inicio-user-bienvenido">
              <h3>Bienvenido a nuestra plataforma: </h3>
              <p>{userData.name}</p>
            </div>
            <div className="inicio-user-card-container">
              <div className="card-inicio-user">
                <div className="user-card-container">
                  <p className="darkSpan">Tiene: </p>
                  <p className="strongSpan">2</p>
                  <p>bicicletas registradas</p>
                </div>
              </div>
              <div className="card-inicio-user">
                <div className="user-card-container">
                  <p className="darkSpan">Tiene: </p>
                  <p className="strongSpan">1</p>
                  <p>placa y tarjeta de propiedad generada</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </UserContext.Consumer>
  );
};

export default InicioUser;
