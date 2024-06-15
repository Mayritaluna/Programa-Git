import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renderiza el formulario de inicio de sesión', () =>{
    render(<App />);
    expect(screen.getByText(/Bienvenido al Sistema de Gestión de Inventario/i)).toBeInTheDocument();
    expect(screen.getByText(/Inicio de Sesión/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nombre de Usuario:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Contraseña:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Iniciar Sesión/i })).toBeInTheDocument();
});

test('renderiza el contenido del pie de página', () => {
    render(<App />);
    expect(screen.getByText(/© 2024 Salón de Belleza JMC. Todos los derechos reservados./i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo Salón de Belleza JMC/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo 192/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Logo 512/i)).toBeInTheDocument();
});