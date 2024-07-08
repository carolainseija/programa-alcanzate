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
import { GallerySwiper } from './components/Gallery';

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


      {/* <div className="talks-container">
<p>Charlas anteriores</p>
          <div
            data-w-id="a7cef9e3-6264-fbff-a37c-a4f723dfe4c1"
            style={cardStyle}
            className="about-marketers-date-card white"
          >
            <div className="about-marketers-top">
              <div className="about-marketers-day _2">06</div>
              <div className="about-marketers-month _2">July</div>
            </div>
            <div className="divider about-marketers-card white"></div>
            <div className="about-marketers-date-text _2">
              Mentoring <br /> and Q&amp;A
            </div>
          </div>

          <div
            data-w-id="a7cef9e3-6264-fbff-a37c-a4f723dfe4c1"
            style={cardStyle}
            className="about-marketers-date-card white"
          >
            <div className="about-marketers-top">
              <div className="about-marketers-day _2">06</div>
              <div className="about-marketers-month _2">July</div>
            </div>
            <div className="divider about-marketers-card white"></div>
            <div className="about-marketers-date-text _2">
              Mentoring <br /> and Q&amp;A
            </div>
          </div>
          <div
            data-w-id="a7cef9e3-6264-fbff-a37c-a4f723dfe4c1"
            style={cardStyle}
            className="about-marketers-date-card white"
          >
            <div className="about-marketers-top">
              <div className="about-marketers-day _2">06</div>
              <div className="about-marketers-month _2">July</div>
            </div>
            <div className="divider about-marketers-card white"></div>
            <div className="about-marketers-date-text _2">
              Mentoring <br /> and Q&amp;A
            </div>
          </div>


      </div> */}

      <Information />
      <div className='calendary-end'>
        <div className="calendary-text">
          <h2>
            <span>Para inscribirte a la próxima charla: </span>
            por favor dirígete al formulario de Google y complétalo.
          </h2>
        </div>
        <a className='calendary' target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSd8esyDHD5cwU_8PcQVGQ4AdlYS9AWUJ3HwfYw0tbqPMiAsLg/viewform" style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            data-w-id="eae4afbb-858b-d41e-f7a4-edbad749695c"
            style={cardStyle}
            className="about-marketers-date-card"
          >
            <div className="about-marketers-top">
              <div className="about-marketers-day">12</div>
              <div className="about-marketers-month">Julio</div>
            </div>
            <div className="divider about-marketers-card"></div>
            <div className="about-marketers-date-text">
              19:30hs <br /> •Adicciones: Riesgos y Esperanza•
            </div>
          </div>
        </a>
        <div>
        </div>
      </div>
      {/* <Features /> */}
      <ImageTextSection
        sections={sections} />
      <FixImage classStyle="fixImage-2" />
      <GallerySwiper />
      <Questions />
      <Footer />
    </div>
  );
}

export default App;
