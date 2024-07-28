import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Information from './components/Information';
import Footer from './components/Footer';
import About from './components/About';
import ImageTextSection from './components/ImageTxtSection';
import FixImage from './components/FixImage';
import { GallerySwiper } from './components/Gallery';
import Questions from './components/Questions';
import Calendary from './components/Calendary';

import { fetchTalks } from './functions/getTalks';

import './App.css';
import CollaboratorsList from './components/CollaboratorsList';

function App() {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    const getTalksData = async () => {
      const talksData = await fetchTalks();
      setTalks(talksData);
    };

    getTalksData();
  }, []);




  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <FixImage classStyle="fixImage" />
      <Information />
      <Calendary />
      <ImageTextSection talks={talks} />
      <FixImage classStyle="fixImage-2" />
      <GallerySwiper />
      <Questions />
      <CollaboratorsList />
      <Footer />
    </div>
  );
}

export default App;
