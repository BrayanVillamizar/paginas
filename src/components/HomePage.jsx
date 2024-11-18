import React from 'react';
import '../index.css';
import ChatbotIcon from './ChatbotIcon';

const HomePage = () => {
  return (
    <div className="homepage-container d-flex flex-column justify-content-between vh-100 text-light">
      <header className="d-flex justify-content-between align-items-center p-4">
        <h1 className="logo">GYMCONTROL</h1>
        <button className=" btn-link">Iniciar Sesión  </button>
      </header>
      <div className="content d-flex flex-column align-items-start">
        <h2 className="display-4 font-weight-bold">
          EL GIMNASIO DONDE COMIENZA  TU MEJOR VERSIÓN
        </h2>
        </div>
        <div className=" justify-content-start ">
        <button className="btn btn-primary btn-lg" >Únete</button>

        
        </div>
      <ChatbotIcon />
    </div>
  );
};

export default HomePage;
