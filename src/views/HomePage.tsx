export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Bienvenido a los Componentes de Prueba
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Componentes disponibles:</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-medium text-lg">🎨 Color Picker</h3>
            <p className="text-gray-600">Selector de colores interactivo</p>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium text-lg">⏰ Countdown Timer</h3>
            <p className="text-gray-600">Temporizador de cuenta regresiva</p>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium text-lg">🕐 Digital Clock</h3>
            <p className="text-gray-600">Reloj digital en tiempo real</p>
          </div>
          
          <div className="border rounded p-4">
            <h3 className="font-medium text-lg">🔍 Search List</h3>
            <p className="text-gray-600">Lista con funcionalidad de búsqueda</p>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <p className="text-blue-800">
          Usa el menú lateral para navegar entre los diferentes componentes y probar su funcionalidad.
        </p>
      </div>
    </div>
  );
}