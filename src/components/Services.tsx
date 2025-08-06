import { useState } from 'react';
import { Code, Smartphone, Cloud, Database, Shield, Zap, ArrowRight, Play, Pause, Star, TrendingUp } from 'lucide-react';

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [playingDemo, setPlayingDemo] = useState<number | null>(null);

  const servicesList = [
    {
      icon: <Code className="h-10 w-10 transition-all duration-300" />,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados. Desde landing pages hasta plataformas e-commerce complejas con las últimas tecnologías.',
      features: ['React/Next.js', 'E-commerce', 'PWA', 'SEO Optimizado'],
      stats: { projects: 156, satisfaction: 98, avgTime: '3-6 semanas' },
      demoText: 'Creando interfaz responsive...',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Smartphone className="h-10 w-10 transition-all duration-300" />,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android. Experiencias móviles intuitivas que conectan con tus usuarios donde sea que estén.',
      features: ['React Native', 'Flutter', 'iOS/Android', 'Push Notifications'],
      stats: { projects: 89, satisfaction: 96, avgTime: '4-8 semanas' },
      demoText: 'Compilando para iOS y Android...',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <Cloud className="h-10 w-10 transition-all duration-300" />,
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructura en la nube. Escalabilidad, seguridad y eficiencia para tu negocio digital.',
      features: ['AWS/Azure', 'Docker', 'Kubernetes', 'CI/CD'],
      stats: { projects: 134, satisfaction: 99, avgTime: '2-4 semanas' },
      demoText: 'Desplegando en la nube...',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Database className="h-10 w-10 transition-all duration-300" />,
      title: 'Gestión de Datos',
      description: 'Análisis, procesamiento y visualización de datos. Convierte la información en insights accionables para tu empresa.',
      features: ['Big Data', 'Analytics', 'Machine Learning', 'Dashboards'],
      stats: { projects: 67, satisfaction: 97, avgTime: '3-5 semanas' },
      demoText: 'Procesando big data...',
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: <Shield className="h-10 w-10 transition-all duration-300" />,
      title: 'Ciberseguridad',
      description: 'Protección integral de sistemas y datos. Auditorías de seguridad, implementación de protocolos y monitoreo continuo.',
      features: ['Pentesting', 'Auditorías', 'Compliance', 'Monitoreo 24/7'],
      stats: { projects: 78, satisfaction: 100, avgTime: '1-3 semanas' },
      demoText: 'Escaneando vulnerabilidades...',
      gradient: 'from-red-500 to-pink-600'
    },
    {
      icon: <Zap className="h-10 w-10 transition-all duration-300" />,
      title: 'Automatización',
      description: 'Optimización de procesos empresariales mediante automatización inteligente. Aumenta la eficiencia y reduce costos operativos.',
      features: ['RPA', 'Workflows', 'APIs', 'Integrations'],
      stats: { projects: 92, satisfaction: 95, avgTime: '2-4 semanas' },
      demoText: 'Automatizando procesos...',
      gradient: 'from-yellow-500 to-orange-600'
    }
  ];

  const toggleDemo = (index: number) => {
    if (playingDemo === index) {
      setPlayingDemo(null);
    } else {
      setPlayingDemo(index);
      // Auto-stop after 3 seconds
      setTimeout(() => setPlayingDemo(null), 3000);
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-electric-blue opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-neon-cyan opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon-black mb-4">
            NUESTRAS SOLUCIONES
            <span className="inline-block ml-2 animate-bounce">🚀</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-electric-blue to-neon-cyan mx-auto mb-6 rounded-full"></div>
          <p className="text-titanium-gray max-w-3xl mx-auto">
            Ofrecemos una amplia gama de soluciones tecnológicas diseñadas para impulsar el crecimiento y 
            la transformación digital de tu empresa, sin importar su tamaño o industria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <div 
              key={index} 
              className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                hoveredService === index ? 'z-20' : 'z-10'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Main Card */}
              <div className={`bg-pure-white p-8 rounded-2xl shadow-lg transition-all duration-500 border-2 ${
                hoveredService === index 
                  ? 'border-electric-blue shadow-2xl shadow-electric-blue/20' 
                  : 'border-transparent hover:shadow-xl'
              }`}>
                
                {/* Icon Container with Glow Effect */}
                <div className={`relative mb-6 transition-all duration-500 ${
                  hoveredService === index ? 'transform -translate-y-2' : ''
                }`}>
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    hoveredService === index 
                      ? `bg-gradient-to-br ${service.gradient} shadow-lg` 
                      : 'bg-gray-100'
                  }`}>
                    <div className={`transition-all duration-300 ${
                      hoveredService === index ? 'text-white scale-110' : 'text-electric-blue'
                    }`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Floating Stats Badge */}
                  {hoveredService === index && (
                    <div className="absolute -top-2 -right-2 bg-electric-blue text-white text-xs px-2 py-1 rounded-full animate-fade-in">
                      <Star className="h-3 w-3 inline mr-1" />
                      {service.stats.satisfaction}%
                    </div>
                  )}
                </div>

                {/* Title with Gradient Effect on Hover */}
                <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
                  hoveredService === index 
                    ? 'bg-gradient-to-r from-electric-blue to-neon-cyan bg-clip-text text-transparent' 
                    : 'text-carbon-black'
                }`}>
                  {service.title}
                </h3>
                
                <p className="text-titanium-gray mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List - Appears on Hover */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  hoveredService === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-carbon-black mb-2">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-electric-blue text-white px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Demo Button */}
                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => toggleDemo(index)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      playingDemo === index
                        ? 'bg-red-500 text-white'
                        : hoveredService === index
                        ? 'bg-electric-blue text-white'
                        : 'bg-gray-100 text-carbon-black hover:bg-electric-blue hover:text-white'
                    }`}
                  >
                    {playingDemo === index ? (
                      <>
                        <Pause className="h-4 w-4" />
                        <span className="text-sm">Detener</span>
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        <span className="text-sm">Ver Demo</span>
                      </>
                    )}
                  </button>

                  {hoveredService === index && (
                    <div className="flex items-center text-electric-blue animate-fade-in">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">{service.stats.projects} proyectos</span>
                    </div>
                  )}
                </div>

                {/* Demo Progress Bar */}
                {playingDemo === index && (
                  <div className="mt-4 animate-fade-in">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-electric-blue font-medium">{service.demoText}</span>
                      <span className="text-xs text-titanium-gray">{service.stats.avgTime}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`} 
                           style={{ width: '100%', animation: 'progress 3s ease-in-out' }}></div>
                    </div>
                  </div>
                )}

                {/* Hover Arrow */}
                {hoveredService === index && (
                  <div className="absolute top-4 right-4 text-electric-blue animate-bounce">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                )}
              </div>

              {/* Floating Card Effect */}
              {hoveredService === index && (
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-cyan/5 rounded-2xl -z-10 transform scale-110 animate-fade-in"></div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-carbon-black to-gray-800 rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 to-neon-cyan/10"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Listo para transformar tu negocio? 
                <span className="inline-block ml-2 animate-pulse">⚡</span>
              </h3>
              <p className="text-gray-300 mb-6">
                Nuestro equipo de expertos está listo para llevar tu empresa al siguiente nivel tecnológico.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-gradient-to-r from-electric-blue to-neon-cyan text-white py-3 px-8 rounded-lg font-semibold hover:shadow-lg hover:shadow-electric-blue/25 transition-all duration-300 transform hover:scale-105"
              >
                Comenzar Proyecto
                <ArrowRight className="inline h-5 w-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
  @keyframes progress {
    0% { width: 0%; }
    100% { width: 100%; }
  }
`}</style>
    </section>
  );
};

export default Services;