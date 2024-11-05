// Cargar datos de usuario en el formulario de perfil
document.addEventListener("DOMContentLoaded", function () {
    // Al cargar la página, recupera los datos del usuario autenticado de sessionStorage.
    // sessionStorage almacena temporalmente los datos del usuario que ha iniciado sesión.
    const user = JSON.parse(sessionStorage.getItem('authenticatedUser'));

    // Si hay un usuario autenticado (es decir, si existe en sessionStorage),
    // carga sus datos en los campos del formulario de perfil.
    if (user) {
        document.getElementById("username").value = user.username; // Muestra el nombre de usuario en el campo de nombre
        document.getElementById("email").value = user.email;       // Muestra el correo electrónico en el campo de correo
    }
});

// Función para actualizar perfil del usuario
document.getElementById("profileForm").addEventListener("submit", function (e) {
    // Evita que el formulario se envíe de la manera predeterminada (recargando la página),
    // permitiendo que se maneje el envío de datos de forma controlada.
    e.preventDefault();
    
    // Obtiene el valor del campo de correo electrónico actualizado del formulario.
    const email = document.getElementById("email").value;

    // Recupera la lista completa de usuarios de localStorage para encontrar y actualizar al usuario actual.
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Obtiene los datos del usuario autenticado desde sessionStorage para identificar al usuario actual.
    let currentUser = JSON.parse(sessionStorage.getItem('authenticatedUser'));

    // Recorre la lista de usuarios en `users` y actualiza el correo electrónico del usuario actual.
    users = users.map(user => {
        if (user.username === currentUser.username) {
            user.email = email;           // Actualiza el correo en localStorage
            currentUser.email = email;     // Actualiza también en sessionStorage para reflejar el cambio actual
        }
        return user;                      // Devuelve cada usuario actualizado al array `users`
    });

    // Guarda la lista de usuarios actualizada en localStorage.
    localStorage.setItem('users', JSON.stringify(users));

    // Guarda los datos actualizados del usuario actual en sessionStorage.
    sessionStorage.setItem('authenticatedUser', JSON.stringify(currentUser));

    // Muestra una alerta para confirmar al usuario que el perfil fue actualizado con éxito.
    alert("Perfil actualizado exitosamente.");
});
