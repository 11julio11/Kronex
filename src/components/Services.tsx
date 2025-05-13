import React from 'react';
import { Dumbbell, Users, Apple, Heart, Activity, Droplets } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Dumbbell className="h-10 w-10 text-gold" />,
      title: 'Entrenamiento Personalizado',
      description: 'Programas diseñados específicamente para tus objetivos y necesidades, con atención individualizada de nuestros expertos entrenadores.'
    },
    {
      icon: <Users className="h-10 w-10 text-gold" />,
      title: 'Clases Grupales',
      description: 'Desde HIIT y spinning hasta yoga y pilates, nuestras clases grupales ofrecen variedad y motivación en comunidad.'
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-gold" />,
      title: 'Musculación',
      description: 'Zona equipada con máquinas de última generación y pesos libres para desarrollar fuerza y construir músculo.'
    },
    {
      icon: <Apple className="h-10 w-10 text-gold" />,
      title: 'Nutrición',
      description: 'Asesoramiento nutricional personalizado para complementar tu entrenamiento y maximizar tus resultados.'
    },
    {
      icon: <Activity className="h-10 w-10 text-gold" />,
      title: 'Fisioterapia',
      description: 'Servicio especializado para prevenir lesiones, acelerar la recuperación y mejorar el rendimiento físico.'
    },
    {
      icon: <Droplets className="h-10 w-10 text-gold" />,
      title: 'Spa y Recuperación',
      description: 'Espacio dedicado al bienestar con sauna, baño turco y servicios de masaje para una recuperación óptima.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTROS SERVICIOS</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios premium diseñados para ayudarte a alcanzar tus objetivos fitness, 
            sea cual sea tu nivel o experiencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-gray-100 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;