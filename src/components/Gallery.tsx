import { useState } from 'react';
import { X } from 'lucide-react';
import gallery1 from '../assets/images/gallery/entranamiento_funcional.jpeg';
import gallery2 from '../assets/images/gallery/area_de_pesas.jpeg';
import gallery3 from '../assets/images/gallery/clases_de_spinning.jpeg';
import gallery4 from '../assets/images/gallery/area_de_cardio.jpeg';
import gallery5 from '../assets/images/gallery/clases_de_yoga.jpeg';
import gallery6 from '../assets/images/gallery/entrenamiento_personal.jpeg';
import gallery7 from '../assets/images/gallery/evento_fitness.jpeg';
import gallery8 from '../assets/images/gallery/spaysauna.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const galleryImages = [
    {
      src: gallery1,
      alt: 'Área de pesas',
      category: 'instalaciones'
    },
    {
      src: gallery2,
      alt: 'Clase de spinning',
      category: 'clases'
    },
    {
      src: gallery3,
      alt: 'Entrenamiento funcional',
      category: 'entrenamientos'
    },
    {
      src: gallery4,
      alt: 'Área de cardio',
      category: 'instalaciones'
    },
    {
      src: gallery5,
      alt: 'Clase de yoga',
      category: 'clases'
    },
    {
      src: gallery6,
      alt: 'Spa y sauna',
      category: 'instalaciones'
    },
    {
      src: gallery7,
      alt: 'Evento fitness',
      category: 'eventos'
    },
    {
      src: gallery8,
      alt: 'Entrenamiento personal',
      category: 'entrenamientos'
    },
  ];

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">GALERÍA</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explora nuestras instalaciones de primera clase y descubre el ambiente que hemos creado para motivar y alcanzar tus objetivos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm text-gold uppercase mt-1">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gold transition-colors duration-300"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagen ampliada" 
            className="max-h-[90vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;