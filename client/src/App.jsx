import { useState } from "react";

import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Provider } from "react-redux";

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3002/';

import "./App.css";

import LandingPage from "../src/views/landingPage/LandingPage";
import HomePage from '../src/views/homePage/HomePage';
import DetailPage from "./views/detailPage/detail";
import FormPage from "./views/formPage/formPage";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          
          <Route path="/home" element={<HomePage />} />
          
          <Route path="/create" element={<FormPage />} />
          
          <Route path="/pokemon/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporta el componente principal App
export default App;
