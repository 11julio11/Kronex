import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Servicios', id: 'services' },
    { name: 'Planes', id: 'plans' },
    { name: 'Entrenadores', id: 'trainers' },
    { name: 'Testimonios', id: 'testimonials' },
    { name: 'Galería', id: 'gallery' },
    { name: 'Blog', id: 'blog' },
    { name: 'Contacto', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Dumbbell className="text-gold h-8 w-8 mr-2" />
            <span className="text-white font-bold text-2xl">ELITE<span className="text-gold">GYM</span></span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white hover:text-gold transition-colors duration-300 font-medium text-sm uppercase tracking-wider"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-black bg-opacity-95 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen py-4' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4 pb-4">
          {navLinks.map((link) => (
            <li key={link.id} className="w-full text-center">
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-gold transition-colors duration-300 py-2 font-medium text-sm uppercase tracking-wider"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;