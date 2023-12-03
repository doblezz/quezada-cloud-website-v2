// Navbar.js
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import "./_navbar.scss"; // Asegúrate de tener un archivo de estilos para tu componente
import Logo from "@assets/image/logos/_horizontal.png";

// Icons -
import { FaBarsStaggered } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

// Importa el archivo JSON
import menuOptions from '@assets/router/index.json';

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsNavVisible(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navRef]);

  const handleNavLinkClick = () => {
    setIsNavVisible(false);
  };

  // const toggleNavVisibility = () => {
  //   setIsNavVisible((prev) => !prev);
  // };

  const toggleNavButton = (IsNavActive) => {
    setIsNavVisible(!IsNavActive);
  };

  return (
    <header>
      <div className="B_blue" />
      <div className="navbar">
        <div>
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>

        <nav className={isNavVisible ? "visible" : "hidden"} ref={navRef}>
          <div className="togger" onClick={() => toggleNavButton(isNavVisible)}>
            {!isNavVisible ? <FaBarsStaggered /> : <IoClose />}
          </div>

          {/* Mapea las opciones del menú desde el archivo JSON */}
          {menuOptions.map((option, index) => (
            <NavLink key={index} to={option.path} onClick={handleNavLinkClick}>
              {option.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
