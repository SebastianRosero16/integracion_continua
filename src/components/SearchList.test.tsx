import { render, screen, fireEvent } from '@testing-library/react';
// Importa las funciones necesarias para renderizar el componente y simular eventos.

import SearchList from './SearchList';
// Importa el componente SearchList que se va a testear.

describe('SearchList', () => {
// Inicia un bloque de pruebas para el componente SearchList.

  it('muestra todos los elementos inicialmente', () => {
    // Primer test: verifica que al renderizar, se muestran todos los elementos.
    render(<SearchList />);
    // Renderiza el componente en un entorno de prueba.
    const items = screen.getAllByRole('listitem');
    // Busca todos los elementos con el rol 'listitem' (los elementos de la lista).
    // Hay 8 nombres en la lista
    expect(items.length).toBe(8);
    // Verifica que la cantidad de elementos sea 8.
  });

  it('filtra los nombres que coincidan', () => {
    // Segundo test: verifica que el filtro funciona correctamente.
    render(<SearchList />);
    // Renderiza el componente.
    const input = screen.getByTestId('search-input');
    // Busca el input de búsqueda usando el atributo data-testid.
    fireEvent.change(input, { target: { value: 'lu' } });
    // Simula que el usuario escribe 'lu' en el input.
    const items = screen.getAllByRole('listitem');
    // Busca los elementos filtrados de la lista.
    // Luis y Lucía
    expect(items.length).toBe(2);
    // Verifica que solo hay 2 elementos que coinciden con 'lu'.
    expect(items[0].textContent?.toLowerCase()).toContain('lu');
    // Verifica que el primer elemento contiene 'lu'.
    expect(items[1].textContent?.toLowerCase()).toContain('lu');
    // Verifica que el segundo elemento contiene 'lu'.
  });

  it('muestra "No encontrado" si no hay coincidencias', () => {
    // Tercer test: verifica que se muestra el mensaje si no hay coincidencias.
    render(<SearchList />);
    // Renderiza el componente.
    const input = screen.getByTestId('search-input');
    // Busca el input de búsqueda.
    fireEvent.change(input, { target: { value: 'zzz' } });
    // Simula que el usuario escribe 'zzz', que no coincide con ningún nombre.
    expect(screen.getByText('No encontrado')).toBeInTheDocument();
    // Verifica que el mensaje "No encontrado" aparece en la pantalla.
  });

});
// Fin del bloque de pruebas.