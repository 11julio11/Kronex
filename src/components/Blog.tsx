import { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      title: 'Las 5 tendencias tecnológicas que transformarán tu empresa en 2025',
      excerpt: 'Descubre las tecnologías emergentes más impactantes que están redefiniendo el panorama empresarial y cómo implementarlas.',
      content: `Las tecnologías emergentes están transformando la manera en que las empresas operan. Aquí te presentamos las 5 tendencias más importantes:

1. Inteligencia Artificial Generativa
- Automatización de procesos creativos y analíticos
- Mejora en la toma de decisiones basada en datos
- Personalización de experiencias de usuario
- Implementación: chatbots inteligentes, análisis predictivo

2. Edge Computing
- Procesamiento de datos más cerca del usuario final
- Reducción de latencia y mejora de rendimiento
- Mayor seguridad y privacidad de datos
- Aplicaciones: IoT, realidad aumentada, vehículos autónomos

3. Blockchain y Web3
- Descentralización de sistemas y datos
- Contratos inteligentes para automatización
- Trazabilidad y transparencia mejoradas
- Casos de uso: supply chain, identidad digital, finanzas

4. Computación Cuántica
- Capacidad de procesamiento exponencial
- Resolución de problemas complejos
- Avances en criptografía y seguridad
- Impacto: optimización, simulaciones, machine learning

5. Realidad Extendida (XR)
- Combinación de AR, VR y realidad mixta
- Nuevas formas de interacción y colaboración
- Entrenamiento inmersivo y simulaciones
- Aplicaciones: educación, marketing, diseño

Consejos para la implementación:
- Evaluación de necesidades específicas de tu empresa
- Planificación gradual y estratégica
- Capacitación del equipo en nuevas tecnologías
- Medición de ROI y ajustes continuos`,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '15 Mar 2025',
      author: 'Carlos Mendoza',
      category: 'Tecnología',
    },
    {
      title: 'Ciberseguridad empresarial: guía completa de protección',
      excerpt: 'Todo lo que necesitas saber sobre cómo proteger tu empresa de amenazas digitales y mantener tus datos seguros.',
      content: `La ciberseguridad es fundamental para cualquier empresa moderna. Esta guía te ayudará a entender cómo proteger tu organización.

Fundamentos de Ciberseguridad:

1. Evaluación de Riesgos
- Identificación de activos críticos
- Análisis de vulnerabilidades
- Evaluación de amenazas potenciales

Medidas de Protección Esenciales:
- Firewalls de nueva generación
- Sistemas de detección de intrusiones
- Autenticación multifactor
- Cifrado de datos end-to-end

2. Gestión de Accesos
- Principio de menor privilegio
- Revisión periódica de permisos
- Monitoreo de actividades de usuario

3. Backup y Recuperación
- Estrategia 3-2-1 de respaldo
- Pruebas regulares de restauración
- Plan de continuidad de negocio

4. Capacitación del Personal
- Concienciación sobre phishing
- Políticas de seguridad claras
- Simulacros de incidentes

Mejores Prácticas:
- Actualizaciones regulares de software
- Monitoreo continuo de la red
- Respuesta rápida a incidentes
- Auditorías de seguridad periódicas`,
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '02 Mar 2025',
      author: 'Laura Sánchez',
      category: 'Seguridad',
    },
    {
      title: 'Migración a la nube: estrategias para el éxito empresarial',
      excerpt: 'Estrategias efectivas para migrar tu infraestructura a la nube sin interrumpir las operaciones y maximizando los beneficios.',
      content: `La migración a la nube es un proceso crítico que requiere planificación estratégica. Aquí te mostramos cómo hacerlo correctamente.

1. Evaluación Inicial
- Auditoría de infraestructura actual
- Identificación de aplicaciones críticas
- Análisis de dependencias
- Evaluación de costos

2. Estrategias de Migración

Lift and Shift:
- Migración directa sin modificaciones
- Rápida implementación
- Menor riesgo inicial
- Optimización posterior

Refactoring:
- Modificación de aplicaciones
- Aprovechamiento de servicios cloud
- Mejor rendimiento y escalabilidad
- Mayor inversión inicial

3. Planificación de la Migración
- Priorización de cargas de trabajo
- Cronograma detallado
- Plan de rollback
- Comunicación con stakeholders

4. Ejecución y Monitoreo
- Migración por fases
- Pruebas exhaustivas
- Monitoreo de rendimiento
- Optimización continua

5. Post-Migración
- Capacitación del equipo
- Optimización de costos
- Implementación de governance
- Medición de ROI

Beneficios Esperados:
- Reducción de costos operativos
- Mayor escalabilidad y flexibilidad
- Mejora en la seguridad
- Acceso a tecnologías avanzadas`,
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '22 Feb 2025',
      author: 'Miguel Ángel Torres',
      category: 'Cloud',
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
                  loading="lazy"
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
                loading="lazy"
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