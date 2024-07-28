import React from 'react';
import './Collaborator.css';
import acups from '../assets/acups.png';

const CollaboratorsList = () => {
  return (
    <div className="collaborators-list">
      <h2>Asociación Colaboradora</h2>
      <div className="collaborators-content">
        <p>
          En "Álcanzate", contamos con el valioso apoyo de <strong>ACUPS</strong>, 
          que comparte nuestra misión de generar un impacto positivo en la comunidad. 
          Su colaboración es fundamental para el éxito de nuestros programas y actividades.
        </p>
        <img className='collaborators-acups' src={acups} alt='logo organización ACUPS' />
      </div>
    </div>
  );
};

export default CollaboratorsList;
