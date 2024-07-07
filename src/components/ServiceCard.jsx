// import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="service-card">
      <div className='feature-icon'>
      <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
