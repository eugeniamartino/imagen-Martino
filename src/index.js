import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './NavBar/Navbar.js';
import reportWebVitals from './reportWebVitals';
import Contenedor from './contenedor/Contenedor.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <Contenedor />
  </React.StrictMode>
);

reportWebVitals();

