import { render, screen, waitFor } from '@testing-library/react';
import DigitalClock from './DigitalClock';

// Test de integración para verificar que el reloj se actualiza en tiempo real
describe('DigitalClock - Integración en tiempo real', () => {
  beforeEach(() => {
    jest.useRealTimers(); // Usar temporizadores reales para esta prueba
  });

  afterEach(() => {
    jest.useFakeTimers(); // Volver a temporizadores falsos
  });

  it('debe actualizar el tiempo automáticamente', async () => {
    render(<DigitalClock />);
    
    const clockElement = screen.getByTestId('digital-clock');
    const initialTime = clockElement.textContent;
    
    // Esperar al menos 1 segundo para ver si el tiempo cambia
    await waitFor(
      () => {
        const currentTime = clockElement.textContent;
        expect(currentTime).not.toBe(initialTime);
      },
      { timeout: 2000 }
    );
  }, 5000); // Timeout de 5 segundos para esta prueba
});