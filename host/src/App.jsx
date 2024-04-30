import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import  NavBarComponent  from "mfNavBar/NavBarComponent";
import HomePage from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import CharacteresPage from "./pages/CharacteresPage";
import DetailPage from "./pages/DetailPage";

import NotFound from "./pages/NotFound";

import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

const App = () => (
  <BrowserRouter>
  <NavBarComponent />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Home" element={<HomePage />} />
      <Route path="/Characters" element={<CharacteresPage />} />
      <Route path="/detail/:id" element={<DetailPage />} /> 
      <Route path="/About" element={<AboutPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);