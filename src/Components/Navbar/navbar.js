import React, { useState } from "react";  
import '../../Styles/Navbar.css';
import logo from '../../assets/logo.png'; // Ajuste o caminho conforme a estrutura do seu projeto

function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
      <a href="/">
        <img src={logo} 
             alt="Orbital Dev Logo" 
        />
      </a>
    </div>
        <button className="menu-button" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/login" className="btn-login ml-10 mr-4">Logar</a></li>
          <li><a href="/register" className="btn-register">Registrar-se</a></li>
        </ul>
      </div>
    </nav>
    );

}

export default Navbar;

