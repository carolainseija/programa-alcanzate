import React from 'react';
import './ImageTextSection.css';  // Importa los estilos CSS correspondientes

const ImageTextSection = ({ sections }) => {
  return (
    <section className="image-text-section">
      {sections.map((section, index) => (
        <div className={`image-text-container ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
          {index % 2 === 0 ? (
            <>
              <div className="image-container">
                <img src={section.image} alt={section.title} />
              </div>
              <div className="text-container">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </>
          ) : (
            <>
              <div className="text-container">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
              <div className="image-container">
                <img src={section.image} alt={section.title} />
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageTextSection;
