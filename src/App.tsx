import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Router from './router/Router';

const App: React.FC = function () {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
