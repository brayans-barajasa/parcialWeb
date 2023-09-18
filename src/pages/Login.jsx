import React, { useEffect, useState } from "react";
import FormularioLogin from "../components/FormularioLogin";
import '../styles/Login.css';
import Logo from "../assets/Logo.png"

const Login = () => {

  return (
    <div className="main">
      <div className="card_main">
        <div className="cardinfo">
          <img className="Logo" src={Logo} alt="" />
          <h1>Bienvenido</h1>
          <h3>Pan-Stiven</h3>
          <p>La vida es como hornear, los ingredientes de hoy crean el sabor de mañana.</p>
        </div>
        <FormularioLogin/>
      </div>
    </div>
  );
};

export default Login;
