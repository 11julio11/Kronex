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

  const plan = [
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
    // ... (resto de los planes)
  ];

  return (
    <section id="plans" className="py-20 bg-white">
      {/* ... (resto del JSX) */}
      <button 
        onClick={() => handleSubscription(plan.priceId)}
        disabled={loading === plan.priceId}
        className={`w-full py-3 px-4 rounded-md font-semibold transition-all duration-300 ${
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
      {/* ... (resto del JSX) */}
    </section>
  );
};

export default Plans;