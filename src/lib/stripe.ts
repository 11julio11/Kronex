import { loadStripe } from '@stripe/stripe-js';
import { supabase } from './supabase';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(priceId: string) {
  try {
    const { data: { session_id }, error } = await supabase.functions.invoke('stripe-checkout', {
      body: { price_id: priceId }
    });

    if (error) throw error;

    const stripe = await stripePromise;
    if (!stripe) throw new Error('Stripe failed to initialize');

    const { error: stripeError } = await stripe.redirectToCheckout({
      sessionId: session_id
    });

    if (stripeError) throw stripeError;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}