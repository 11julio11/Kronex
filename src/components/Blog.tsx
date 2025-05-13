import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: 'Los 5 mejores ejercicios para ganar masa muscular',
      excerpt: 'Descubre los ejercicios compuestos más efectivos para desarrollar músculo de forma eficiente y optimizar tus resultados.',
      content: `Los ejercicios compuestos son fundamentales para el desarrollo muscular efectivo. Aquí te presentamos los 5 ejercicios más importantes:

1. Sentadillas (Squats)
- Trabaja múltiples grupos musculares simultáneamente
- Aumenta la producción de testosterona y hormona del crecimiento
- Mejora la fuerza funcional y la estabilidad central
- Técnica correcta: mantén la espalda recta, rodillas alineadas con los pies

2. Press de Banca
- Desarrollo completo del pecho, hombros y tríceps
- Variaciones para diferentes objetivos
- Importancia del agarre y la respiración
- Progresión de peso gradual y segura

3. Peso Muerto
- Ejercicio completo para espalda y piernas
- Mejora la postura y la fuerza del core
- Técnica esencial para prevenir lesiones
- Variantes según nivel y objetivos

4. Dominadas
- Desarrollo de espalda y bíceps
- Progresión desde asistidas hasta con peso adicional
- Diferentes agarres para distintos énfasis
- Programación efectiva en tu rutina

5. Press Militar
- Desarrollo de hombros y estabilidad
- Variaciones sentado y de pie
- Importancia del core y la postura
- Integración en tu programa de entrenamiento

Consejos adicionales:
- Importancia del calentamiento adecuado
- Progresión gradual en peso y repeticiones
- Descanso y recuperación entre series
- Nutrición para optimizar resultados`,
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '15 Mar 2025',
      author: 'Carlos Mendoza',
      category: 'Entrenamiento',
    },
    {
      title: 'Nutrición pre y post entrenamiento: guía completa',
      excerpt: 'Todo lo que necesitas saber sobre qué alimentos consumir antes y después de tu rutina para maximizar tu rendimiento y recuperación.',
      content: `La nutrición adecuada antes y después del entrenamiento es crucial para optimizar tus resultados. Esta guía te ayudará a entender qué y cuándo comer.

Nutrición Pre-Entrenamiento:

1. Timing Óptimo (2-3 horas antes)
- Carbohidratos complejos para energía sostenida
- Proteína moderada para disponibilidad de aminoácidos
- Grasas limitadas para digestión fácil

Alimentos Recomendados:
- Avena con proteína
- Plátano con mantequilla de almendras
- Pan integral con pavo
- Batido de proteínas con frutas

Nutrición Post-Entrenamiento:

1. Ventana Anabólica (30-60 minutos después)
- Carbohidratos rápidos para reposición de glucógeno
- Proteína de alta calidad para recuperación muscular
- Electrolitos para hidratación

Alimentos Ideales:
- Batido de proteína con plátano
- Pechuga de pollo con arroz
- Yogur griego con frutas
- Atún con patata dulce

Suplementación Estratégica:
- BCAA durante el entrenamiento
- Creatina post-entrenamiento
- Proteína en polvo de calidad
- Electrolitos para hidratación

Consejos Adicionales:
- Hidratación antes, durante y después
- Ajuste según tipo e intensidad de entrenamiento
- Consideraciones para objetivos específicos
- Importancia de la consistencia`,
      image: 'https://images.pexels.com/photos/1640770/pexels-photo-1640770.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '02 Mar 2025',
      author: 'Laura Sánchez',
      category: 'Nutrición',
    },
    {
      title: 'Cómo superar el estancamiento en tu progreso fitness',
      excerpt: 'Estrategias efectivas para romper mesetas y continuar progresando hacia tus objetivos cuando sientes que has llegado a un punto muerto.',
      content: `El estancamiento es una fase normal en el proceso de entrenamiento, pero existen estrategias probadas para superarlo y seguir progresando.

1. Análisis de la Situación
- Revisión detallada de tu programa actual
- Identificación de patrones y rutinas
- Evaluación de factores limitantes
- Establecimiento de nuevos objetivos

2. Estrategias de Entrenamiento
Variación de Estímulos:
- Cambio de rangos de repeticiones
- Introducción de nuevos ejercicios
- Modificación de tempos
- Períodos de descarga planificados

3. Optimización de la Recuperación
- Mejora de la calidad del sueño
- Gestión del estrés
- Técnicas de recuperación activa
- Nutrición específica

4. Ajustes Nutricionales
- Recálculo de necesidades calóricas
- Timing de nutrientes
- Ciclos de carbohidratos
- Suplementación estratégica

5. Aspectos Mentales
- Establecimiento de metas realistas
- Visualización y motivación
- Registro de progreso
- Apoyo social y accountability

Plan de Acción:
- Evaluación semanal de progreso
- Ajustes basados en respuesta
- Documentación de cambios
- Celebración de pequeñas victorias`,
      image: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1600',
      date: '22 Feb 2025',
      author: 'Miguel Ángel Torres',
      category: 'Motivación',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTRO BLOG</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Mantente informado con nuestros últimos artículos sobre fitness, nutrición, bienestar y consejos para optimizar tu entrenamiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg overflow-hidden shadow-lg group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-gold text-black text-xs font-semibold py-1 px-2 rounded">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button 
                  onClick={() => setSelectedPost(index)}
                  className="inline-flex items-center text-gold font-medium group"
                >
                  <span className="mr-2">Leer más</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block bg-black text-white py-3 px-8 rounded-md font-semibold hover:bg-gold hover:text-black transition-colors duration-300"
          >
            Ver todos los artículos
          </a>
        </div>
      </div>

      {/* Modal para el contenido completo */}
      {selectedPost !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {blogPosts[selectedPost].title}
                  </h2>
                  <div className="flex items-center text-sm text-gray-500">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{blogPosts[selectedPost].date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{blogPosts[selectedPost].author}</span>
                    </div>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <img 
                src={blogPosts[selectedPost].image} 
                alt={blogPosts[selectedPost].title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <div className="prose max-w-none">
                {blogPosts[selectedPost].content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;