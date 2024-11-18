import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import './index.css'; // Importa tu archivo de CSS global
import LandingPage from './components/LandingPage'; // Importa tu componente
import HomePage from './components/HomePage';
import UserPage from './components/UserPage';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>

      <HomePage />
    </React.StrictMode>
  );
} else {
  console.error('No se encontró un elemento con el ID "root".');
}

