// import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Information from './components/Information';
import Footer from './components/Footer';
import About from './components/About';
import ImageTextSection from './components/ImageTxtSection';
import desempleo from "./assets/desempleo.jpg"
import abuso from "./assets/abuso.jpg"
import interior from "./assets/interior.jpg"
import salud from "./assets/salud.jpg"


import './App.css'
import Questions from './components/Questions';
import FixImage from './components/FixImage';
import TalkCard from './components/TalkCard';

function App() {
  const sections = [
    {
      image: desempleo,
      title: "Una temática que afecta nuestro país como es el desempleo.",
      text: "Se brindó algunas herramientas para poder afrontarlo, e intentará dar respuesta a las interrogantes ante la pérdida del trabajo."
    },
    {
      image: abuso,
      title: "¿Se puede prevenir el abuso sexual?",
      text: "Un tema de actualidad, que nos convoca a todos."
    },
    {
      image: interior,
      title: "Cómo evitar que tu mundo 🌏 interior se derrumbe.",
      text: "Cómo evitar que tu mundo 🌏 interior se derrumbe.",
    },
    {
      image: salud,
      title: "Salud Mental",
      text: "Si bien históricamente, la salud mental ha sido un tema tabú en nuestra sociedad, hoy por hoy creemos que es necesario empezar a poner en palabras cómo nos sentimos.",
    }
  ];
  const talks = [
    {
      image: 'path/to/image1.jpg',
      title: 'Charla 1',
      description: 'Descripción de la charla 1',
      professional: 'Profesional 1',
      date: '2024-07-10',
      time: '10:00 AM'
    },
    {
      image: 'path/to/image2.jpg',
      title: 'Charla 2',
      description: 'Descripción de la charla 2',
      professional: 'Profesional 2',
      date: '2024-07-15',
      time: '02:00 PM'
    },

    // Más charlas aquí
    {
      image: 'path/to/image3.jpg',
      title: 'Charla Próxima',
      description: 'Descripción de la charla próxima',
      professional: 'Profesional 3',
      date: '2024-07-20',
      time: '05:00 PM'
    }
  ];
  const cardStyle = {
    transform: 'translate3d(3.9992px, 0.94392px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
    opacity: 1,
    transformStyle: 'preserve-3d',
    willChange: 'transform'
  };
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <FixImage classStyle="fixImage" />
      <Information />
      {/* <Features /> */}
      <ImageTextSection
        sections={sections} />
      <FixImage classStyle="fixImage-2" />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
