import React from 'react';
import { RecoilRoot } from 'recoil';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Router from './router/Router';

const App: React.FC = function () {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: 'none',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RecoilRoot>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default App;
