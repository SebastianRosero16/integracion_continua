import { render, screen, act } from '@testing-library/react';
// Importa funciones para renderizar el componente, buscar elementos y simular acciones.

import DigitalClock from './DigitalClock';
// Importa el componente DigitalClock que se va a testear.

jest.useFakeTimers();
// Configura Jest para usar temporizadores falsos, permitiendo controlar el tiempo en las pruebas.

describe('DigitalClock', () => {
// Inicia el bloque de pruebas para el componente DigitalClock.

  it('muestra la hora en formato HH:MM:SS', () => {
    // Primer test: verifica que el reloj muestra la hora correctamente formateada.
    const date = new Date(2023, 0, 1, 9, 5, 7); // 09:05:07
    // Crea una fecha específica para la prueba.
    jest.setSystemTime(date);
    // Establece la hora del sistema simulada.
    render(<DigitalClock />);
    // Renderiza el componente.
    expect(screen.getByTestId('digital-clock').textContent).toBe('09:05:07');
    // Verifica que el reloj muestre la hora esperada.
  });

  it('avanza correctamente con el tiempo simulado', () => {
    // Segundo test: verifica que el reloj avanza correctamente con el tiempo.
    const date = new Date(2023, 0, 1, 10, 59, 58); // 10:59:58
    // Crea una fecha específica para la prueba.
    jest.setSystemTime(date);
    // Establece la hora del sistema simulada.
    render(<DigitalClock />);
    // Renderiza el componente.
    expect(screen.getByTestId('digital-clock').textContent).toBe('10:59:58');
    // Verifica que el reloj muestre la hora inicial.
    act(() => {
      jest.advanceTimersByTime(2000); // 2 segundos
    });
    // Simula que el tiempo avanza 2 segundos.
    // Simular que el sistema avanza 2 segundos
    expect(screen.getByTestId('digital-clock').textContent).toBe('11:00:00');
    // Verifica que el reloj muestre la hora actualizada correctamente.
  });
});
// Fin del bloque de pruebas.