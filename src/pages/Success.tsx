import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check } from 'lucide-react';
import { getProductByPriceId } from '../lib/stripe';
import { supabase } from '../lib/supabase';

export default function Success() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [subscription, setSubscription] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getSubscriptionStatus() {
      try {
        const { data: { subscription }, error } = await supabase
          .from('stripe_user_subscriptions')
          .select('*')
          .maybeSingle();

        if (error) throw error;

        setSubscription(subscription);
      } catch (error) {
        console.error('Error fetching subscription:', error);
        setError('Failed to verify subscription status');
      } finally {
        setLoading(false);
      }
    }

    getSubscriptionStatus();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gold"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
          <p className="text-gray-600">{error}</p>
          <button
            onClick={() => navigate('/plans')}
            className="mt-6 bg-gold text-black px-6 py-2 rounded-md hover:bg-yellow-500 transition-colors"
          >
            Volver a planes
          </button>
        </div>
      </div>
    );
  }

  const product = subscription?.price_id ? getProductByPriceId(subscription.price_id) : null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-8 w-8 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            ¡Gracias por tu suscripción!
          </h1>
          
          {product && (
            <div className="mb-6">
              <p className="text-gray-600">
                Te has suscrito exitosamente al plan <span className="font-semibold">{product.name}</span>
              </p>
            </div>
          )}
          
          <p className="text-gray-600 mb-8">
            Hemos enviado los detalles de tu suscripción a tu correo electrónico.
          </p>
          
          <div className="space-y-4">
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gold text-black px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors font-semibold"
            >
              Ir al inicio
            </button>
            
            <button
              onClick={() => navigate('/profile')}
              className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors font-semibold"
            >
              Ver mi perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}