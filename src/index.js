import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { pink, green } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.js'


const theme = createTheme({
  palette: {
    primary: {
      main: pink[900],
    },
    secondary: {
      main: green[900]
    }
  },
  typography: {
    fontFamily: 'Raleway',
  }
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

