import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './Components/NavBar/Navbar.js';
import reportWebVitals from './reportWebVitals';
import Contenedor from './Components/contenedor/Contenedor.js';
import { deepPurple, blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[100],
    },
    secondary: {
      main: blueGrey[800]
    }
  },
  typography: {
    fontFamily: 'Ralaway',
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <NavBar />
    <Contenedor />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

