// src/components/Navbar.js
import { useState } from 'react';
import './Navbar.css';
import logo from "../assets/logo-solo.png";
import Modal from './Modal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img className='logo' src={logo} alt='logo' />
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
            <li><a href="#Charlas">Charlas</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div className="get-started">
          <button onClick={openModal}>Contactanos</button>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </nav>
  );
};

export default Navbar;
