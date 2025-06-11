import { Check, Star, Crown } from 'lucide-react';

const Plans = () => {
  const plans = [
    {
      name: 'Básico',
      price: '29',
      period: 'mes',
      description: 'Perfecto para comenzar tu transformación',
      features: [
        'Acceso completo al gimnasio',
        'Uso de todas las máquinas',
        'Área de cardio',
        'Vestuarios y duchas',
        'Horario: 6:00 - 23:00',
      ],
      notIncluded: [
        'Clases grupales',
        'Entrenador personal',
        'Nutricionista',
        'Spa y sauna',
      ],
      popular: false,
      color: 'gray',
    },
    {
      name: 'Premium',
      price: '49',
      period: 'mes',
      description: 'La opción más popular para resultados completos',
      features: [
        'Todo lo del plan Básico',
        'Clases grupales ilimitadas',
        '2 sesiones de entrenador personal',
        'Consulta nutricional inicial',
        'Acceso a spa y sauna',
        'Horario extendido: 24/7',
        'Invitado gratis 2 veces/mes',
      ],
      notIncluded: [
        'Entrenamiento personal ilimitado',
        'Plan nutricional personalizado',
      ],
      popular: true,
      color: 'gold',
    },
    {
      name: 'Elite',
      price: '89',
      period: 'mes',
      description: 'La experiencia completa de élite',
      features: [
        'Todo lo del plan Premium',
        'Entrenador personal ilimitado',
        'Plan nutricional personalizado',
        'Seguimiento mensual completo',
        'Acceso VIP a eventos especiales',
        'Masajes de recuperación (2/mes)',
        'Suplementos básicos incluidos',
        'Parking gratuito',
        'Toallas incluidas',
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
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTROS PLANES</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos y estilo de vida. 
            Todos nuestros planes incluyen acceso a instalaciones de primera clase.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'ring-4 ring-gold transform scale-105' 
                  : 'hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gold text-black text-center py-2 font-bold text-sm uppercase tracking-wider">
                  <Star className="inline h-4 w-4 mr-1" />
                  Más Popular
                </div>
              )}
              
              <div className={`${
                plan.color === 'gold' 
                  ? 'bg-gradient-to-br from-gold to-yellow-500' 
                  : plan.color === 'black'
                  ? 'bg-gradient-to-br from-black to-gray-800'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              } ${plan.popular ? 'pt-12' : 'pt-8'} pb-8 px-8 text-center`}>
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  plan.color === 'gold' 
                    ? 'bg-white text-gold' 
                    : plan.color === 'black'
                    ? 'bg-gold text-black'
                    : 'bg-gold text-black'
                }`}>
                  {plan.color === 'black' ? (
                    <Crown className="h-8 w-8" />
                  ) : (
                    <Star className="h-8 w-8" />
                  )}
                </div>
                
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.color === 'black' ? 'text-white' : 'text-black'
                }`}>
                  {plan.name}
                </h3>
                
                <p className={`text-sm mb-6 ${
                  plan.color === 'black' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <span className={`text-5xl font-bold ${
                    plan.color === 'black' ? 'text-white' : 'text-black'
                  }`}>
                    €{plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.color === 'black' ? 'text-gray-300' : 'text-gray-600'
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
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-black hover:bg-yellow-400 transform hover:scale-105'
                      : plan.color === 'black'
                      ? 'bg-black text-white hover:bg-gray-800'
                      : 'bg-gray-900 text-white hover:bg-black'
                  }`}
                >
                  Comenzar Ahora
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Sin permanencia • Cancela cuando quieras
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gray-50 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿No estás seguro qué plan elegir?</h3>
            <p className="text-gray-600 mb-6">
              Nuestros asesores fitness te ayudarán a encontrar el plan perfecto para tus objetivos. 
              Agenda una consulta gratuita y descubre todo lo que EliteGym puede ofrecerte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="bg-gold text-black py-3 px-8 rounded-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Consulta Gratuita
              </button>
              <a 
                href="tel:+34612345678" 
                className="bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;