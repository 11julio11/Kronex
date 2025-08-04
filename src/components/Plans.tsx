import { Check, Star, Crown } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Startup',
      price: '299',
      period: 'mes',
      description: 'Perfecto para empresas emergentes',
      features: [
        'Sitio web profesional',
        'Hosting y dominio incluido',
        'Diseño responsive',
        'SEO básico optimizado',
        'Soporte técnico 24/7',
      ],
      notIncluded: [
        'Aplicación móvil',
        'E-commerce avanzado',
        'Integración con CRM',
        'Análisis avanzado',
      ],
      popular: false,
      color: 'gray',
    },
    {
      name: 'Business',
      price: '599',
      period: 'mes',
      description: 'La opción más popular para empresas en crecimiento',
      features: [
        'Todo lo del plan Startup',
        'Aplicación móvil nativa',
        'E-commerce completo',
        'Integración con sistemas',
        'Dashboard de analytics',
        'Automatización de procesos',
        'Consultoría mensual incluida',
      ],
      notIncluded: [
        'Desarrollo personalizado ilimitado',
        'Infraestructura dedicada',
      ],
      popular: true,
      color: 'gold',
    },
    {
      name: 'Enterprise',
      price: '1299',
      period: 'mes',
      description: 'Solución completa para grandes empresas',
      features: [
        'Todo lo del plan Business',
        'Desarrollo personalizado ilimitado',
        'Infraestructura cloud dedicada',
        'Integración con sistemas legacy',
        'Soporte prioritario 24/7',
        'Consultoría estratégica semanal',
        'Ciberseguridad avanzada',
        'Backup y recuperación',
        'SLA garantizado 99.9%',
      ],
      notIncluded: [],
      popular: false,
      color: 'black',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="plans" className="py-20 bg-pure-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-carbon-black mb-4">NUESTRAS SOLUCIONES</h2>
          <div className="w-20 h-1 bg-electric-blue mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Elige la solución que mejor se adapte a las necesidades de tu empresa.
            Todas nuestras soluciones incluyen tecnología de vanguardia y soporte especializado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 ${plan.popular
                  ? 'ring-4 ring-electric-blue transform scale-105'
                  : 'hover:shadow-2xl'
                }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-electric-blue text-white text-center py-2 font-bold text-sm uppercase tracking-wider">
                  <Star className="inline h-4 w-4 mr-1" />
                  Más Popular
                </div>
              )}

              <div className={`${plan.color === 'gold'
                  ? 'bg-gradient-to-br from-electric-blue to-blue-600'
                  : plan.color === 'black'
                    ? 'bg-gradient-to-br from-carbon-black to-gray-800'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200'
                } ${plan.popular ? 'pt-12' : 'pt-8'} pb-8 px-8 text-center`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${plan.color === 'gold'
                    ? 'bg-white text-electric-blue'
                    : plan.color === 'black'
                      ? 'bg-electric-blue text-white'
                      : 'bg-electric-blue text-white'
                  }`}>
                  {plan.color === 'black' ? (
                    <Crown className="h-8 w-8" />
                  ) : (
                    <Star className="h-8 w-8" />
                  )}
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${plan.color === 'black' ? 'text-white' : 'text-black'
                  }`}>
                  {plan.name}
                </h3>

                <p className={`text-sm mb-6 ${plan.color === 'black' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-bold ${plan.color === 'black' ? 'text-white' : 'text-black'
                    }`}>
                    €{plan.price}
                  </span>
                  <span className={`text-lg ${plan.color === 'black' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <div className="bg-white p-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li key={`not-${featureIndex}`} className="flex items-start opacity-50">
                      <div className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0 flex items-center justify-center">
                        <div className="h-0.5 w-3 bg-gray-400"></div>
                      </div>
                      <span className="text-gray-500 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${plan.popular
                      ? 'bg-electric-blue text-white hover:bg-blue-600 transform hover:scale-105'
                      : plan.color === 'black'
                        ? 'bg-carbon-black text-white hover:bg-gray-800'
                        : 'bg-carbon-black text-white hover:bg-gray-800'
                    }`}
                >
                  Comenzar Ahora
                </button>

                <p className="text-xs text-gray-500 mt-4 text-center">
                  Sin compromiso • Cancela cuando quieras
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No estás seguro qué solución elegir?</h3>
            <p className="text-gray-600 mb-6">
              Nuestros consultores tecnológicos te ayudarán a encontrar la solución perfecta para tu empresa.
              Agenda una consulta gratuita y descubre todo lo que Kronex puede ofrecerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToContact}
                className="bg-electric-blue text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                Consulta Gratuita
              </button>
              <a
                href="https://wa.me/573027677393" target="_blank" rel="noopener noreferrer"
                className="bg-carbon-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Enviar WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;