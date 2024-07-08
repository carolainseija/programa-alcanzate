import React from 'react';
import './Footer.css';
import logo from "../assets/logo-solo.png"
import facebook from "../assets/facebook-sm.png"
import instagram from "../assets/instagram-sm.png"
import wpp from "../assets/whatsapp-sm.png"

const Footer = () => {
  
  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-info">
          {/* <h3>Propel</h3> */}
          <img className='logo' src={logo} alt='logo' />
          <p>Somos un grupo de profesionales y técnicos del área de la salud y el área social que trabajamos con el fin de
            informar y concientizar sobre temas de interés de la sociedad.
          </p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li><a href="#home">Inicio</a></li>
            <li><a href="#Nosotros">Nosotros</a></li>
            <li><a href="#Charlas">Charlas</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Seguinos en Redes Sociales</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/ProyectoSocialAlcanzate" target='_blank'><img src={facebook} className="fab fa-facebook-f" /></a>
            <a href="https://www.instagram.com/progsocialalcanzate/" target='_blank'><img src={instagram} className="fab fa-instagram" /></a>
            <a href="https://wa.me/59896540864?text=Hola,%20me%20quiero%20contactar%20con%20ustedes!" target='_blank'><img src={wpp} className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Programa Social Álcanzate.</p>
      </div>
    </footer>
  );
};

export default Footer;
