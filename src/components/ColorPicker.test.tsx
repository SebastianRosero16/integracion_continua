import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from './ColorPicker';

// Mock localStorage para las pruebas
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('ColorPicker', () => {
  beforeEach(() => {
    // Limpiar mocks antes de cada test
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  it('renderiza correctamente con el color inicial', () => {
    localStorageMock.getItem.mockReturnValue('#ff0000');
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input');
    const colorBox = screen.getByTestId('color-box');
    
    expect(colorInput).toBeInTheDocument();
    expect(colorBox).toBeInTheDocument();
    expect(colorInput).toHaveValue('#ff0000');
  });

  it('usa el color por defecto cuando no hay valor en localStorage', () => {
    localStorageMock.getItem.mockReturnValue(null);
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input');
    // Los inputs tipo color normalizan el valor, verificamos que tenga el valor por defecto
    expect(colorInput).toHaveValue('#000000');
  });

  it('cambia el color cuando el usuario selecciona uno nuevo', () => {
    localStorageMock.getItem.mockReturnValue('#ff0000');
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input');
    fireEvent.change(colorInput, { target: { value: '#00ff00' } });
    
    expect(colorInput).toHaveValue('#00ff00');
  });

  it('guarda el color en localStorage cuando cambia', () => {
    localStorageMock.getItem.mockReturnValue('#ff0000');
    render(<ColorPicker />);
    
    const colorInput = screen.getByTestId('color-input');
    fireEvent.change(colorInput, { target: { value: '#0000ff' } });
    
    expect(localStorageMock.setItem).toHaveBeenCalledWith('color-picker-value', '#0000ff');
  });

  it('aplica el color seleccionado al cuadro de color', () => {
    localStorageMock.getItem.mockReturnValue('#ff0000');
    render(<ColorPicker />);
    
    const colorBox = screen.getByTestId('color-box');
    expect(colorBox).toHaveStyle('background: #ff0000');
    
    const colorInput = screen.getByTestId('color-input');
    fireEvent.change(colorInput, { target: { value: '#00ff00' } });
    
    expect(colorBox).toHaveStyle('background: #00ff00');
  });
});