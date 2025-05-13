import React from 'react';
import { Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">NOSOTROS</h2>
          <div className="w-20 h-1 bg-gold mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Gym interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-gold text-black p-6 rounded-lg hidden md:block">
                <p className="text-4xl font-bold">10+</p>
                <p className="text-sm uppercase font-medium">Años de experiencia</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Un gimnasio como ningún otro</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              En EliteGym, nos dedicamos a proporcionar una experiencia de fitness incomparable. 
              Nuestro gimnasio ofrece equipamiento de última generación, entrenadores profesionales 
              y un ambiente diseñado para motivar e inspirar a nuestros miembros a alcanzar sus 
              objetivos de bienestar físico.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <Target className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Misión</h4>
                <p className="text-gray-400 text-sm">Transformar vidas a través del fitness, proporcionando las herramientas y el apoyo necesarios para un bienestar completo.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <Award className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Visión</h4>
                <p className="text-gray-400 text-sm">Ser reconocidos como el gimnasio de referencia en excelencia y resultados, estableciendo nuevos estándares en la industria.</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <Heart className="text-gold mb-3 h-8 w-8" />
                <h4 className="text-white font-bold text-xl mb-2">Valores</h4>
                <p className="text-gray-400 text-sm">Compromiso, integridad, innovación y pasión por el bienestar de nuestra comunidad de miembros.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;