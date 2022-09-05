import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { deepPurple, blueGrey } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.js'


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
      <App/>
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();

