import React, { useState } from 'react';
import { Check, X, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const Plans = () => {
  const [loading, setLoading] = useState<number | null>(null);

  const plans = [
    {
      name: 'Básico',
      price: '49',
      period: 'mes',
      description: 'Perfecto para comenzar tu viaje fitness',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso a clases grupales (2 por semana)', included: true },
        { name: 'Asesoramiento inicial', included: true },
        { name: 'Acceso a vestuarios y duchas', included: true },
        { name: 'Entrenamiento personalizado', included: false },
        { name: 'Asesoramiento nutricional', included: false },
        { name: 'Acceso a spa y recuperación', included: false },
      ],
      buttonText: 'Seleccionar Plan',
      popular: false,
      priceId: 'price_basic123'
    },
    {
      name: 'Premium',
      price: '89',
      period: 'mes',
      description: 'Nuestra membresía más popular',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso ilimitado a clases grupales', included: true },
        { name: 'Asesoramiento inicial y seguimiento', included: true },
        { name: 'Acceso a vestuarios y duchas', included: true },
        { name: 'Entrenamiento personalizado (1 por semana)', included: true },
        { name: 'Asesoramiento nutricional básico', included: true },
        { name: 'Acceso a spa y recuperación', included: false },
      ],
      buttonText: 'Seleccionar Plan',
      popular: true,
      priceId: 'price_premium456'
    },
    {
      name: 'VIP',
      price: '149',
      period: 'mes',
      description: 'Experiencia fitness sin límites',
      features: [
        { name: 'Acceso a área de musculación', included: true },
        { name: 'Acceso ilimitado a clases grupales', included: true },
        { name: 'Asesoramiento continuo y seguimiento', included: true },
        { name: 'Acceso a vestuarios y duchas premium', included: true },
        { name: 'Entrenamiento personalizado (3 por semana)', included: true },
        { name: 'Plan nutricional completo', included: true },
        { name: 'Acceso ilimitado a spa y recuperación', included: true },
      ],
      buttonText: 'Seleccionar Plan',
      popular: false,
      priceId: 'price_vip789'
    },
  ];

  const handlePayment = async (priceId: string, index: number) => {
    try {
      setLoading(index);
      const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
      
      if (!stripe) throw new Error('Stripe failed to load');

      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ priceId }),
      });

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al procesar el pago. Por favor, inténtalo de nuevo.');
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">NUESTROS PLANES</h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Elige el plan que mejor se adapte a tus objetivos y necesidades. Todos nuestros planes incluyen el compromiso de ayudarte a alcanzar la mejor versión de ti mismo.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg overflow-hidden border transform transition-all duration-500 hover:scale-105 ${
                plan.popular 
                  ? 'border-gold shadow-xl md:scale-105' 
                  : 'border-gray-200 shadow-lg hover:shadow-xl'
              } flex flex-col max-w-sm w-full mx-auto md:mx-0`}
            >
              {plan.popular && (
                <div className="bg-gold text-black py-2 px-4 text-center text-sm font-semibold">
                  MÁS POPULAR
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => handlePayment(plan.priceId, index)}
                  disabled={loading === index}
                  className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-300 transform hover:translate-y-[-2px] ${
                    plan.popular 
                      ? 'bg-gold text-black hover:bg-yellow-500' 
                      : 'bg-gray-900 text-white hover:bg-black'
                  } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center`}
                >
                  {loading === index ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5 mr-2" />
                      Procesando...
                    </>
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