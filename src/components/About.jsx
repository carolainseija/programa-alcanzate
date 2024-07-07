// import React from 'react';
import './About.css';
import ServiceCard from './ServiceCard';
import logo from "../assets/logo-solo.png"

const About = () => {
  return (
    <div className="About-container" id="Nosotros">
      <div className="about-text">
        <h2>
          <span>Descubre más sobre nuestras charlas mensuales: </span>
          Estas charlas son totalmente gratuitas, abiertas a todos los interesados en aprender y conectar
           con nuestra comunidad. Explora nuevos temas, conoce a expertos y amplía tus horizontes con nosotros cada mes.
        </h2>
      </div>
      <div className="cards-container">
        <ServiceCard
          title="Fortalecimiento de la Familia"
          description="Nuestras charlas abordan temas cruciales para el bienestar familiar, ofreciendo herramientas y consejos para mejorar la comunicación y las relaciones dentro del hogar."
          image={logo}
        />
        <ServiceCard
          title="Acceso a Profesionales"
          description="Nuestras charlas abordan temas cruciales para el bienestar familiar, ofreciendo herramientas y consejos para mejorar la comunicación y las relaciones dentro del hogar."
          image={logo}
        />
        <ServiceCard
          title="Manejo de Adicciones"
          description="Las charlas incluyen sesiones con profesionales que proporcionan estrategias para lidiar con las adicciones, ofreciendo apoyo y recursos tanto para los afectados como para sus familias."
          image={logo}
        />
      </div>
    </div>
  );
};

export default About;
