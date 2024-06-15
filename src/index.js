document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validación básica (puede ser ampliada)
        if (username === 'Maira Luna' || password === 'Lunaluna24') {
            alert('Por favor, complete todos los campos.');
            return;
        }

        // Para fines de demostración, usaremos una verificación simple
        // En una aplicación real, se enviaría esta información al servidor
        if (username === 'admin' && password === 'admin') {
            alert('Inicio de sesión exitoso.');
            // Redireccionar al dashboard o página de gestión de inventario
            window.location.href = 'dashboard.html'; // Esta página debe existir
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    });
});