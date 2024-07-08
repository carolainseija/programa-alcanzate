// HeroSection.js
import { useEffect, useState } from 'react';
import './HeroSection.css';
import Modal from './Modal';
import { fetchTexts } from '../functions/getTexts';


const HeroSection = () => {
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
    };

    getTextsData();
  }, []);

  return (
    <div className="hero-container">
      <h1>{texts.title}</h1>
      <p>{texts.subtitle}</p>
      <button className="hero-btn" onClick={openModal}>Contactanos</button>
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
    </div>
  );
};

export default HeroSection;
