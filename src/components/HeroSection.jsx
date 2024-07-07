// HeroSection.js
import { useState } from 'react';
import './HeroSection.css';
import Modal from './Modal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="hero-container">
      <h1>Programa Social Álcanzate</h1>
      <p>únite como profesional o escucha</p>
      <button className="hero-btn" onClick={openModal}>Contactanos</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HeroSection;
