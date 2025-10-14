import { render, screen } from "@testing-library/react";
import App from "./App";

test("renderiza el título principal", () => {
  render(<App />);
  expect(screen.getByText(/Bienvenido a los Componentes de Prueba/i)).toBeInTheDocument();
});