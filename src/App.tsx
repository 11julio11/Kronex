import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';

function App() {
  useEffect(() => {
    document.title = 'EliteGym - Transforma Tu Vida';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Plans />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
      <FloatingButton />
    </div>
  );
}

export default App;