-- Crear tabla de usuarios
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);  -- Punto y coma añadido aquí

-- Tabla profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES users(id),
  full_name TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMPTZ DEFAULT now()
);  -- Punto y coma añadido aquí

-- Tabla subscriptions
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  stripe_subscription_id TEXT UNIQUE,
  stripe_customer_id TEXT,
  plan_id TEXT NOT NULL,
  status TEXT NOT NULL,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);  -- Punto y coma añadido aquí

-- Tabla images
CREATE TABLE images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES profiles(id) NOT NULL,
  url TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);  -- Punto y coma añadido aquí

-- RLS (Row Level Security)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE images ENABLE ROW LEVEL SECURITY;

-- Políticas con variable de sesión personalizada
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO public
  USING (current_setting('my.uid', true)::uuid = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO public
  USING (current_setting('my.uid', true)::uuid = id);

CREATE POLICY "Users can read own subscriptions"
  ON subscriptions FOR SELECT
  TO public
  USING (current_setting('my.uid', true)::uuid = user_id);

CREATE POLICY "Users can read own images"
  ON images FOR SELECT
  TO public
  USING (current_setting('my.uid', true)::uuid = user_id);

CREATE POLICY "Users can insert own images"
  ON images FOR INSERT
  TO public
  WITH CHECK (current_setting('my.uid', true)::uuid = user_id);

CREATE POLICY "Users can delete own images"
  ON images FOR DELETE
  TO public
  USING (current_setting('my.uid', true)::uuid = user_id);