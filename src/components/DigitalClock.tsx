import { useEffect, useState } from 'react';

const pad = (n: number) => n.toString().padStart(2, '0');

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    // Función para actualizar el tiempo
    const updateTime = () => {
      setTime(new Date());
    };

    // Actualizar inmediatamente
    updateTime();

    // Configurar intervalo para actualizar cada segundo
    const interval = setInterval(updateTime, 1000);

    // Cleanup: limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h2 className="mb-6 text-2xl font-bold text-gray-800">Reloj Digital</h2>
      <div
        data-testid="digital-clock"
        className="text-6xl md:text-7xl font-mono font-bold text-white bg-gray-900 px-8 py-6 rounded-xl shadow-2xl border-4 border-blue-500"
      >
        {hours}:{minutes}:{seconds}
      </div>
      <p className="mt-4 text-gray-600">
        Actualización en tiempo real cada segundo
      </p>
    </div>
  );
}
