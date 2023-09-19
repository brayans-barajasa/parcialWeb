import React from 'react';
import "../styles/Navbar.css"
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const usuario = localStorage.getItem("username");
  return (
    <nav className="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <div >
          <img className='Logo' src={Logo} alt="" />
          <a className="navbar-brand" href="#usuario">{usuario}</a>
          <a className="navbar-brand" href="#Inicio">Inicio</a>
          <a className="navbar-brand" href="#Productos">Productos</a>
          <a className="navbar-brand" href="#Contactos">Contactos</a>
          <a className="navbar-brand" href="#Ubicacion">Ubicacion</a>
        </div>
        <form className="d-flex justify-content-center " role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button className="btn btn-primary" type="button">Buscar</button>
        </form>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <ul id='menu' className="list-group list-group-flush">
            <img id="logo-image" src={Logo} alt="" />
            <a className="list-group-item" aria-current="page" href="#">{usuario}</a>
            <a className="list-group-item" href="#">Perfil</a>
            <a className="list-group-item" href="#">Configuracion</a>
            <a className="list-group-item" href="#">Sobre nosotros</a>
            <Link to="/login"><button id='cerrarsesion' type="button" className="btn btn-primary btn-sm">Cerrar sesión</button> </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
