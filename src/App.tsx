import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Exercises from './components/Exercises';
import Plans from './components/Plans';
import Trainers from './components/Trainers';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import TestConnection from './components/TestConnection';

function App() {
  useEffect(() => {
    document.title = 'Kronex - Soluciones Tecnológicas Innovadoras';
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Exercises />
      <Plans />
      <Trainers />
      <Testimonials />
      <Gallery />
      <Blog />
      <Contact />
      <Footer />
      <FloatingButton />
      {/* Componente de prueba - remover en producción */}
      <TestConnection />
    </div>
  );
}

export default App;