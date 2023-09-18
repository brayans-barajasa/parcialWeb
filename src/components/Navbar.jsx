import React from 'react';
import "../styles/Navbar.css"
import Logo from "../assets/Logo.png"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const usuario = localStorage.getItem("username");
  return (
    <nav class="navbar bg-dark border-bottom border-body fixed-top" data-bs-theme="dark">
      <div className="container-fluid">
        <div >
          <img className='Logo' src={Logo} alt="" />
          <a className="navbar-brand" href="#">{usuario}</a>
          <a className="navbar-brand" href="#">Inicio</a>
          <a className="navbar-brand" href="#">Productos</a>
          <a className="navbar-brand" href="#">Contactos</a>
        </div>
        <form className="d-flex justify-content-center " role="search">
          <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
          <button class="btn btn-primary" type="button">Buscar</button>
        </form>

        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
              <img className="logo-image" src={Logo} alt=""w />
              
            <ul className="list-group list-group-flush">

              <li className="list-group-item">
                <a className="nav-link active" aria-current="page" href="#">{usuario}</a>
              </li>
              <li className="list-group-item">
                <a className="nav-link" href="#">Perfil</a>
              </li>
              <li className="list-group-item">
                <a className="nav-link" href="#">Configuracion</a>
              </li>
              <li className="list-group-item">
                <Link class="btn btn-secondary" to="/login">Cerrar sesión</Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
