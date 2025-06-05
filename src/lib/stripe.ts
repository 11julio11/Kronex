import { loadStripe } from '@stripe/stripe-js';
import { products } from '../stripe-config';
import { supabase } from './supabase';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

export async function createCheckoutSession(priceId: string) {
  const stripe = await stripePromise;
  if (!stripe) throw new Error('Stripe failed to load');

  const { data: { session_id } } = await supabase.functions.invoke('stripe-checkout', {
    body: {
      price_id: priceId,
      success_url: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${window.location.origin}/plans`,
      mode: 'subscription'
    }
  });

  if (!session_id) throw new Error('Failed to create checkout session');

  const { error } = await stripe.redirectToCheckout({ sessionId: session_id });
  if (error) throw error;
}

export function getProductByPriceId(priceId: string) {
  return Object.values(products).find(product => product.priceId === priceId);
}