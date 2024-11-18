import React from 'react';
import '../index.css';

const TrainerPage = () => {
  return (
    <div className="container-fluid text-light bg-dark vh-100 d-flex flex-column justify-content-center align-items-start p-5">
      <header className="d-flex justify-content-between w-100">
        <h1 className="logo text-white">GYMCONTROL</h1>
        <nav className="nav">
          <a className="nav-link text-light" href="#">Inicio</a>
          <a className="nav-link text-light" href="#">Actividades</a>
          <a className="nav-link text-light" href="#">Clientes</a>
          <a className="nav-link text-light" href="#">Mi Perfil</a>
        </nav>
      </header>
      <div className="mt-5">
        <h2 className="display-4 font-weight-bold">¡BIENVENIDO, ENTRENADOR!</h2>
      </div>
    </div>
  );
};

export default TrainerPage;
