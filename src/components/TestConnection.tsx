import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const TestConnection = () => {
  const [connected, setConnected] = useState<boolean | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('count')
          .limit(1);
        
        if (error) throw error;
        
        setConnected(true);
        console.log('✅ Conexión a Supabase exitosa');
      } catch (err: any) {
        setConnected(false);
        setError(err.message);
        console.error('❌ Error conectando a Supabase:', err);
      }
    };

    testConnection();
  }, []);

  if (connected === null) {
    return <div className="text-yellow-600">Probando conexión...</div>;
  }

  return (
    <div className="fixed bottom-4 left-4 p-4 rounded-lg shadow-lg bg-white">
      {connected ? (
        <div className="text-green-600">✅ Supabase conectado</div>
      ) : (
        <div className="text-red-600">
          ❌ Error: {error}
          <div className="text-sm mt-1">
            Verifica tus variables de entorno
          </div>
        </div>
      )}
    </div>
  );
};

export default TestConnection;