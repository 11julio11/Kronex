import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const Trainers = () => {
  const trainers = [
    {
      name: 'Carlos Mendoza',
      role: 'Entrenador Principal',
      specialty: 'Musculación y Fuerza',
      image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1600',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Laura Sánchez',
      role: 'Nutricionista',
      specialty: 'Nutrición Deportiva',
      image: 'https://images.pexels.com/photos/5325840/pexels-photo-5325840.jpeg?auto=compress&cs=tinysrgb&w=1600',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Miguel Ángel Torres',
      role: 'Entrenador',
      specialty: 'Crossfit y HIIT',
      image: 'https://images.pexels.com/photos/6456300/pexels-photo-6456300.jpeg?auto=compress&cs=tinysrgb&w=1600',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      name: 'Ana Martínez',
      role: 'Instructora',
      specialty: 'Yoga y Pilates',
      image: 'https://images.pexels.com/photos/3768913/pexels-photo-3768913.jpeg?auto=compress&cs=tinysrgb&w=1600',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
  ];

  return (
    <section id="trainers" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTROS ENTRENADORES</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nuestro equipo de profesionales altamente cualificados está comprometido con tu éxito, proporcionando conocimientos expertos y motivación constante.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4 transform translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                    <a href={trainer.social.instagram} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300">
                      <Instagram className="h-5 w-5 text-gray-900" />
                    </a>
                    <a href={trainer.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300">
                      <Twitter className="h-5 w-5 text-gray-900" />
                    </a>
                    <a href={trainer.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gold transition-colors duration-300">
                      <Linkedin className="h-5 w-5 text-gray-900" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{trainer.name}</h3>
                <p className="text-gold font-medium mb-1">{trainer.role}</p>
                <p className="text-gray-600 text-sm">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;