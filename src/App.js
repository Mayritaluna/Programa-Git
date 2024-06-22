import React, { useState } from 'react';
import './Login.css'; // Archivo de estilos para el componente

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí podrías realizar la lógica de autenticación (omitiendo por simplicidad)

    // Llamar a la función de prop para indicar que el inicio de sesión fue exitoso
    onLogin();
  };

  return (
    <section id="loginSection" className="login-section">
      <h2>Inicio de Sesión</h2>
      <form id="loginForm" onSubmit={handleSubmit}>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
  );
};

export default Login;