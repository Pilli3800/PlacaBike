import { Routes, Route } from "react-router-dom";
import User from "../User";
import Perfil from "../Perfil/Perfil";
import Bicicletas from "../../Bicicletas/Bicicletas";
import Navbarauth from "../../../components/Navbarauth";

export const UserRoutes = () => {
  return (
    <>
        <Navbarauth />
        <div className="container">
          <Routes>
            <Route path=":username" element={<User />}>
              <Route path="perfil" element={<Perfil />}></Route>
              <Route path="bicicletas" element={<Bicicletas />}></Route>
            </Route>
          </Routes>
        </div>
    </>
  );
};
