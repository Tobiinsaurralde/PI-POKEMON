// Importa el hook useState desde la biblioteca de React
import { useState } from "react";

// Importa elementos relacionados con la navegación en React Router
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

// Importa el componente Provider de la biblioteca react-redux para proporcionar el store a la aplicación
import { Provider } from "react-redux";

// Importa la biblioteca Axios para realizar solicitudes HTTP
import axios from "axios";

// Importa el archivo de estilos App.css
import "./App.css";

// Importa los componentes de las distintas vistas
import LandingPage from "../src/views/landingPage/LandingPage";
import HomePage from '../src/views/homePage/HomePage';
import DetailPage from "./views/detailPage/detail";
import FormPage from "./views/formPage/formPage";

// Función principal del componente App
function App() {

  // Retorna la estructura principal de la aplicación
  return (
    <div className="App">
      {/* Inicializa el enrutador BrowserRouter */}
      <BrowserRouter>
        {/* Define las rutas de la aplicación */}
        <Routes>
          {/* Ruta para la página de inicio */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Ruta para la página principal */}
          <Route path="/home" element={<HomePage />} />
          
          {/* Ruta para la página de creación de Pokémon */}
          <Route path="/create" element={<FormPage />} />
          
          {/* Ruta para la página de detalle de Pokémon */}
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporta el componente principal App
export default App;
