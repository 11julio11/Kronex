import { useState } from 'react';
import { Check, X, Loader2 } from 'lucide-react';
import { createCheckoutSession } from '../lib/stripe';

const Plans = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleSubscription = async (priceId: string) => {
    try {
      setLoading(priceId);
      await createCheckoutSession(priceId);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar tu suscripción. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(null);
    }
  };

  const plans = [
    {
      name: 'Básico',
      price: '49',
      period: 'mes',
      description: 'Perfecto para comenzar tu viaje fitness',
      priceId: 'price_1RWU9SGa09S0NWcnXF0MVbBF',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso a clases grupales (2 por semana)', included: true },
        { name: 'Asesoramiento inicial', included: true },
        { name: 'Acceso a vestuarios y duchas', included: true },
        { name: 'Entrenamiento personalizado', included: false },
        { name: 'Asesoramiento nutricional', included: false },
        { name: 'Acceso a spa y recuperación', included: false },
      ],
      buttonText: 'Suscribirse',
      popular: false
    },
    {
      name: 'Premium',
      price: '89',
      period: 'mes',
      description: 'Nuestra membresía más popular',
      priceId: 'price_1RWUAgGa09S0NWcnTf8nYqnf',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso ilimitado a clases grupales', included: true },
        { name: 'Asesoramiento inicial', included: true },
        { name: 'Acceso a vestuarios y duchas', included: true },
        { name: 'Entrenamiento personalizado (2 sesiones/mes)', included: true },
        { name: 'Asesoramiento nutricional básico', included: true },
        { name: 'Acceso a spa y recuperación', included: false },
      ],
      buttonText: 'Suscribirse',
      popular: true
    },
    {
      name: 'VIP',
      price: '149',
      period: 'mes',
      description: 'Experiencia fitness sin límites',
      priceId: 'price_1RWUBvGa09S0NWcn2zh4Tqfz',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso ilimitado a clases grupales', included: true },
        { name: 'Asesoramiento inicial', included: true },
        { name: 'Acceso a vestuarios y duchas', included: true },
        { name: 'Entrenamiento personalizado ilimitado', included: true },
        { name: 'Asesoramiento nutricional completo', included: true },
        { name: 'Acceso a spa y recuperación', included: true },
      ],
      buttonText: 'Suscribirse',
      popular: false
    }
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Elige tu Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra la membresía perfecta para tus objetivos fitness
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-gold scale-105 transform' 
                  : 'border-gray-200 hover:border-gold'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gold text-black px-6 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-gray-900">
                      ${plan.price}
                    </span>
                    <span className="text-xl text-gray-600 ml-2">
                      /{plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${
                        feature.included ? 'text-gray-900' : 'text-gray-500'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => handleSubscription(plan.priceId)}
                  disabled={loading === plan.priceId}
                  className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gold text-black hover:bg-yellow-500'
                      : 'bg-black text-white hover:bg-gray-800'
                  } ${
                    loading === plan.priceId ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading === plan.priceId ? (
                    <div className="flex items-center justify-center">
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      <span>Procesando...</span>
                    </div>
                  ) : (
                    plan.buttonText
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;