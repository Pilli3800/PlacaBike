import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Inicio from "./pages/Inicio"
import Sobrenosotros from "./pages/Sobrenosotros"
import Contacto from "./pages/Contacto"
import Ingresar from "./pages/Ingresar"
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Inicio/>} />
        <Route path='/sobrenosotros' element={<Sobrenosotros/>} />
        <Route path='/contacto' element={<Contacto/>} />
        <Route path='/ingresar' element={<Ingresar/>} />
      </Routes>
    </Router>
  );
}
  
export default App;