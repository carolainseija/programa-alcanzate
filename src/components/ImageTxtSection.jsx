import React from 'react';
import './ImageTextSection.css';

const ImageTextSection = ({ talks }) => {
  return (
    <section className="image-text-section">
      <h2>
        <span>Aquí algunas de las más recientes:</span>
        Nuestras charlas anteriores han tenido distintas temáticas, abarcando una variedad de intereses y proporcionando valiosa información y apoyo.
      </h2>
      {talks?.map((talk, index) => (
        <div className={`image-text-container ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          <div className="image-container">
            <img src={talk.url} alt={talk.name} />
          </div>
          <div className="text-container">
            <h2>{talk.name}</h2>
            <p>{talk.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageTextSection;
