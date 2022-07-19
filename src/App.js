import "./App.css";
import { Navigate, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio/Inicio";
import Sobrenosotros from "./pages/Sobrenosotros/Sobrenosotros";
import Contacto from "./pages/Contacto/Contacto";
import Ingresar from "./pages/Ingresar/Ingresar";
import SlideRoutes from "react-slide-routes";
import Registro from "./pages/Registro/Registro";
import Recuperar from "./pages/Recuperar/Recuperar";

function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="/user" element={<h1>Usuario Logeado</h1>} />
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </SlideRoutes>
    </>
  );
}

export default App;
