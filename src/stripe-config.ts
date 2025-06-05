export const products = {
  basic: {
    priceId: 'price_1RWU9SGa09S0NWcnXF0MVbBF',
    name: 'Básico',
    description: 'Perfecto para comenzar tu viaje fitness',
    mode: 'subscription'
  },
  premium: {
    priceId: 'price_1RWUAgGa09S0NWcnTf8nYqnf',
    name: 'Premium',
    description: 'Nuestra membresía más popular',
    mode: 'subscription'
  },
  vip: {
    priceId: 'price_1RWUBvGa09S0NWcn2zh4Tqfz',
    name: 'VIP',
    description: 'Experiencia fitness sin límites',
    mode: 'subscription'
  }
} as const;

export type ProductId = keyof typeof products;