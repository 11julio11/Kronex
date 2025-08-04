import { Code, Smartphone, Cloud, Database, Shield, Zap } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: <Code className="h-10 w-10 text-gold" />,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos, responsivos y optimizados. Desde landing pages hasta plataformas e-commerce complejas con las últimas tecnologías.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-gold" />,
      title: 'Aplicaciones Móviles',
      description: 'Apps nativas e híbridas para iOS y Android. Experiencias móviles intuitivas que conectan con tus usuarios donde sea que estén.'
    },
    {
      icon: <Cloud className="h-10 w-10 text-gold" />,
      title: 'Soluciones Cloud',
      description: 'Migración y gestión de infraestructura en la nube. Escalabilidad, seguridad y eficiencia para tu negocio digital.'
    },
    {
      icon: <Database className="h-10 w-10 text-gold" />,
      title: 'Gestión de Datos',
      description: 'Análisis, procesamiento y visualización de datos. Convierte la información en insights accionables para tu empresa.'
    },
    {
      icon: <Shield className="h-10 w-10 text-gold" />,
      title: 'Ciberseguridad',
      description: 'Protección integral de sistemas y datos. Auditorías de seguridad, implementación de protocolos y monitoreo continuo.'
    },
    {
      icon: <Zap className="h-10 w-10 text-gold" />,
      title: 'Automatización',
      description: 'Optimización de procesos empresariales mediante automatización inteligente. Aumenta la eficiencia y reduce costos operativos.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTRAS SOLUCIONES</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Ofrecemos una amplia gama de soluciones tecnológicas diseñadas para impulsar el crecimiento y 
            la transformación digital de tu empresa, sin importar su tamaño o industria.
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