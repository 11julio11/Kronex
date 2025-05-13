import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Roberto Gómez',
      role: 'Miembro desde 2020',
      quote: 'He probado muchos gimnasios, pero EliteGym realmente cambió mi vida. Los entrenadores son excepcionales y el ambiente me motiva cada día a superar mis límites.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5,
    },
    {
      name: 'María Jiménez',
      role: 'Miembro desde 2021',
      quote: 'Las instalaciones son de primera clase y el equipo de nutrición realmente marcó la diferencia en mis resultados. No puedo imaginar entrenar en otro lugar.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5,
    },
    {
      name: 'Diego Fernández',
      role: 'Miembro desde 2019',
      quote: 'EliteGym no es solo un gimnasio, es una comunidad. He logrado metas que nunca pensé posibles gracias al apoyo constante de los entrenadores y otros miembros.',
      image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 5,
    },
    {
      name: 'Lucía Martínez',
      role: 'Miembro desde 2022',
      quote: 'Las clases grupales son increíbles, siempre hay algo nuevo que probar. El ambiente es acogedor a pesar de ser un gimnasio de élite, me sentí bienvenida desde el primer día.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1600',
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">TESTIMONIOS</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Descubre lo que nuestros miembros dicen sobre su experiencia en EliteGym.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900 rounded-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/3">
                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mx-auto mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-gold text-sm">{testimonial.role}</p>
                        <div className="flex justify-center mt-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-4 w-4 ${i < testimonial.rating ? 'text-gold' : 'text-gray-600'}`} 
                              fill={i < testimonial.rating ? '#D4AF37' : 'none'} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="md:w-2/3">
                      <blockquote className="text-gray-300 italic text-lg md:text-xl leading-relaxed">
                        "{testimonial.quote}"
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-5 bg-gold text-black rounded-full p-2 hover:bg-white transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-5 bg-gold text-black rounded-full p-2 hover:bg-white transition-colors duration-300 focus:outline-none hidden md:block"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="flex justify-center space-x-2 mt-8 md:hidden">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-gold' : 'bg-gray-700'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;