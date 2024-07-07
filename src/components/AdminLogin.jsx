// src/components/AdminLogin.js
import  { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { auth } from '';
import './AdminLogin.css';

const AdminLogin = () => {
//   const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    // try {
    //   // Aquí verificamos que el usuario y la contraseña coincidan
    //   if (username === 'hola123' && password === 'hola123') {
    //     // Iniciar sesión con Firebase Authentication
    //     await auth.signInWithEmailAndPassword(username, password);
    //     // Si el inicio de sesión es exitoso, redirigir al panel de administrador
    //     history.push('/admin/dashboard'); // Redireccionar a la página de administrador
    //   } else {
    //     setError('Credenciales incorrectas. Por favor, intenta de nuevo.');
    //   }
    // } catch (error) {
    //   setError(error.message);
    //   console.error('Error al iniciar sesión:', error);
    // }
  };

  return (
    <div className="admin-login-container">
      <form className="admin-login-form" onSubmit={handleLogin}>
        <h2>Inicio de Sesión de Administrador</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default AdminLogin;
