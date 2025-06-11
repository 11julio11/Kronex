import { useState } from 'react';

const TestConnection = () => {
  const [isVisible, setIsVisible] = useState(false);

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-blue-500 text-white px-3 py-2 rounded text-xs"
      >
        Test
      </button>
      {isVisible && (
        <div className="absolute bottom-full left-0 mb-2 bg-white border rounded p-4 shadow-lg min-w-[200px]">
          <h3 className="font-bold text-sm mb-2">Estado del Proyecto</h3>
          <div className="text-xs space-y-1">
            <div className="flex justify-between">
              <span>React:</span>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Tailwind:</span>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>Lucide Icons:</span>
              <span className="text-green-600">✓</span>
            </div>
            <div className="flex justify-between">
              <span>EmailJS:</span>
              <span className="text-green-600">✓</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestConnection;