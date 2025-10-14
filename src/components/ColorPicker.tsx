// cambiar nombre"
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'color-picker-value';

export default function ColorPicker() {
  const [color, setColor] = useState<string>(() => {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || '#ffffffff';
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, color);
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <label className="mb-6 text-2xl font-bold text-gray-800">Selecciona un color:</label>
      <input
        type="color"
        value={color}
        onChange={e => setColor(e.target.value)}
        data-testid="color-input"
        className="w-16 h-16 rounded-lg border-2 border-slate-400 shadow-md cursor-pointer mb-6"
        style={{ background: color }}
      />
      <div
        data-testid="color-box"
        className="w-48 h-48 rounded-xl border-2 border-slate-400 shadow-lg"
        style={{ background: color }}
      />
    </div>
  );
}
