import { useState } from 'react';
import { Play, Clock, Target, TrendingUp } from 'lucide-react';

const Exercises = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'fuerza', name: 'Fuerza' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'funcional', name: 'Funcional' },
    { id: 'flexibilidad', name: 'Flexibilidad' },
  ];

  const exercises = [
    {
      id: 1,
      name: 'Press de Banca',
      category: 'fuerza',
      duration: '45 min',
      difficulty: 'Intermedio',
      muscles: ['Pecho', 'Tríceps', 'Hombros'],
      description: 'Ejercicio fundamental para el desarrollo del pecho y la fuerza del tren superior.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Aumenta la fuerza del pecho', 'Mejora la estabilidad', 'Desarrolla masa muscular'],
    },
    {
      id: 2,
      name: 'Sentadillas',
      category: 'fuerza',
      duration: '40 min',
      difficulty: 'Principiante',
      muscles: ['Cuádriceps', 'Glúteos', 'Core'],
      description: 'El rey de los ejercicios para el tren inferior, trabaja múltiples grupos musculares.',
      image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Fortalece piernas', 'Mejora la postura', 'Quema muchas calorías'],
    },
    {
      id: 3,
      name: 'HIIT Cardio',
      category: 'cardio',
      duration: '30 min',
      difficulty: 'Avanzado',
      muscles: ['Todo el cuerpo'],
      description: 'Entrenamiento de alta intensidad que maximiza la quema de grasa en poco tiempo.',
      image: 'https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Quema grasa rápidamente', 'Mejora resistencia', 'Acelera metabolismo'],
    },
    {
      id: 4,
      name: 'Peso Muerto',
      category: 'fuerza',
      duration: '50 min',
      difficulty: 'Avanzado',
      muscles: ['Espalda', 'Glúteos', 'Isquiotibiales'],
      description: 'Ejercicio compuesto que trabaja la cadena posterior y mejora la fuerza funcional.',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Fortalece espalda baja', 'Mejora postura', 'Aumenta fuerza general'],
    },
    {
      id: 5,
      name: 'Burpees',
      category: 'funcional',
      duration: '25 min',
      difficulty: 'Intermedio',
      muscles: ['Todo el cuerpo'],
      description: 'Ejercicio funcional que combina fuerza y cardio en un solo movimiento.',
      image: 'https://images.pexels.com/photos/4164766/pexels-photo-4164766.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Ejercicio completo', 'Mejora coordinación', 'Alta quema calórica'],
    },
    {
      id: 6,
      name: 'Yoga Flow',
      category: 'flexibilidad',
      duration: '60 min',
      difficulty: 'Principiante',
      muscles: ['Todo el cuerpo'],
      description: 'Secuencia fluida de posturas que mejora flexibilidad y reduce el estrés.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Aumenta flexibilidad', 'Reduce estrés', 'Mejora equilibrio'],
    },
    {
      id: 7,
      name: 'Spinning',
      category: 'cardio',
      duration: '45 min',
      difficulty: 'Intermedio',
      muscles: ['Piernas', 'Core'],
      description: 'Clase de ciclismo indoor con música motivadora y diferentes intensidades.',
      image: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Mejora resistencia cardiovascular', 'Tonifica piernas', 'Bajo impacto'],
    },
    {
      id: 8,
      name: 'Entrenamiento Funcional',
      category: 'funcional',
      duration: '40 min',
      difficulty: 'Intermedio',
      muscles: ['Todo el cuerpo'],
      description: 'Movimientos que imitan actividades de la vida diaria para mejorar la funcionalidad.',
      image: 'https://images.pexels.com/photos/4164527/pexels-photo-4164527.jpeg?auto=compress&cs=tinysrgb&w=800',
      benefits: ['Mejora movimientos diarios', 'Aumenta estabilidad', 'Previene lesiones'],
    },
  ];

  const filteredExercises = selectedCategory === 'todos' 
    ? exercises 
    : exercises.filter(exercise => exercise.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Principiante': return 'text-green-600 bg-green-100';
      case 'Intermedio': return 'text-yellow-600 bg-yellow-100';
      case 'Avanzado': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <section id="exercises" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">EJERCICIOS</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra amplia variedad de ejercicios diseñados para todos los niveles. 
            Desde entrenamientos de fuerza hasta sesiones de flexibilidad, tenemos todo lo que necesitas.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gold text-black shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid de ejercicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredExercises.map((exercise) => (
            <div key={exercise.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={exercise.image} 
                  alt={exercise.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(exercise.difficulty)}`}>
                  {exercise.difficulty}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{exercise.name}</h3>
                
                <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{exercise.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="h-4 w-4 mr-1" />
                    <span>{exercise.muscles.length} grupos</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {exercise.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Músculos trabajados:</h4>
                  <div className="flex flex-wrap gap-1">
                    {exercise.muscles.map((muscle, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        {muscle}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Beneficios:
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {exercise.benefits.slice(0, 2).map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="w-full bg-black text-white py-2 px-4 rounded-md font-semibold hover:bg-gold hover:text-black transition-colors duration-300">
                  Ver detalles
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron ejercicios en esta categoría.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-black rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">¿Necesitas ayuda con tu rutina?</h3>
            <p className="text-gray-300 mb-6">
              Nuestros entrenadores personales pueden diseñar un programa específico para tus objetivos.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-gold text-black py-3 px-8 rounded-lg font-semibold hover:bg-white transition-colors duration-300"
            >
              Solicitar Asesoría
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;