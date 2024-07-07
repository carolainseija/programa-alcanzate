// TalkCard.js
import React from 'react';
import './TalkCard.css';

const TalkCard = ({ image, title, description, professional, date, time, highlight }) => {
  return (
    <div className={`service-card ${highlight ? 'highlight' : ''}`}>
      <div className='feature-icon'>
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p><strong>Professional:</strong> {professional}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Time:</strong> {time}</p>
      </div>
    </div>
  );
};

export default TalkCard;
