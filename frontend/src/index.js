import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globais
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Envolvendo com BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
