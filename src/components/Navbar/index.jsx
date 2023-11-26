import React from "react";
import { NavLink } from "react-router-dom";
import './_navbar.scss';
import Logo from "@assets/image/logos/_horizontal.png";

const Navbar = () => {
  return (
    <header>
      <div className="B_blue" />
      <div className="navbar">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <nav>
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/quezada-online">Quezada Online</NavLink>
          <NavLink to="/quienes-somos">¿Quiénes somos?</NavLink>
          <NavLink to="/sucursales">Sucursales</NavLink>
          <NavLink to="/contacto">Contacto</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;