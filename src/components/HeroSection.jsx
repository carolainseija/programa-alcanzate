// HeroSection.js
import { useEffect, useState } from 'react';
import './HeroSection.css';
import Modal from './Modal';
import { fetchTexts } from '../functions/getTexts';


const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [texts, setTexts] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getTextsData = async () => {
      const textsData = await fetchTexts();
      setTexts(textsData);
      setIsLoading(false); // Terminamos la carga

    };

    getTextsData();
  }, []);


  if (isLoading) {
    return (
      <div className="hero-container">
        <h1>Programa Social Álcanzate</h1>
        <div className="spinner"></div>
      </div>
    );
  }


  return (
    <div className="hero-container">
      <h1>{texts.title}</h1>
      {/* <p>Únete como profesional o escucha</p> */}
      {/* <p>Generamos conversaciones que transforman vidas</p> */}
      <p>{texts.subtitle}</p>
      <button className="hero-btn" onClick={openModal}>Contactanos</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HeroSection;
