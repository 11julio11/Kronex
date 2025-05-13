import React from 'react';

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url("https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          TRANSFORMA TU <span className="text-gold">CUERPO</span>, <br />
          TRANSFORMA TU <span className="text-gold">VIDA</span>
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
          Un espacio exclusivo donde el fitness se convierte en un estilo de vida
        </p>
        <button 
          onClick={scrollToPlans} 
          className="bg-gold text-black py-3 px-8 rounded-md text-lg font-semibold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:scale-105"
        >
          Únete ahora
        </button>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <div className="h-10 w-10 border-2 border-white rounded-full flex items-center justify-center cursor-pointer">
          <div className="h-3 w-3 border-r-2 border-b-2 border-white transform rotate-45 translate-y-[-4px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;