// Función para registrar un usuario
function registerUser(user) {
    // Recupera la lista de usuarios almacenada en localStorage y la convierte en un array.
    // Si no hay usuarios, inicializa la variable `users` como un array vacío.
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Verifica si el nombre de usuario o el correo electrónico ya están registrados.
    // Utiliza `some()` para buscar coincidencias en el array de usuarios.
    if (users.some(u => u.username === user.username || u.email === user.email)) {
        alert("El nombre de usuario o el correo ya están registrados."); // Alerta si ya existe el usuario.
        return; // Termina la función sin registrar al usuario.
    }
    
    // Si no existen conflictos, añade el nuevo usuario al array de `users`.
    users.push(user);

    // Guarda la lista actualizada de usuarios en localStorage, convirtiéndola a JSON.
    localStorage.setItem('users', JSON.stringify(users));

    // Muestra una alerta confirmando el registro exitoso.
    alert("Registro exitoso.");
}

// Función para iniciar sesión
function login(username, password) {
    // Obtiene la lista de usuarios almacenada en localStorage y la convierte en un array.
    // Si no hay usuarios registrados, inicializa `users` como un array vacío.
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Busca en `users` un usuario que coincida con el nombre y la contraseña proporcionados.
    let user = users.find(u => u.username === username && u.password === password);

    // Si encuentra un usuario que coincide con las credenciales, inicia la sesión.
    if (user) {
        // Guarda el usuario autenticado en sessionStorage.
        // Esto asegura que el usuario esté autenticado solo durante la sesión actual del navegador.
        sessionStorage.setItem('authenticatedUser', JSON.stringify(user));

        // Alerta al usuario que el inicio de sesión fue exitoso.
        alert("Inicio de sesión exitoso!");

        // Redirige al usuario a `servicios .html` después del inicio de sesión.
        window.location.href = "servicios.html";
    } else {
        // Si no encuentra el usuario, muestra un mensaje de error.
        alert("Usuario o contraseña incorrectos");
    }
}

// Función para cerrar sesión
function logout() {
    // Elimina al usuario autenticado de sessionStorage.
    // Esto cierra la sesión efectivamente, ya que la aplicación depende de este valor para
    // saber si el usuario está autenticado.
    sessionStorage.removeItem('authenticatedUser');

    // Alerta al usuario que la sesión se ha cerrado.
    alert("Sesión cerrada");

    // Redirige al usuario a `index.html` después de cerrar sesión.
    window.location.href = "index.html";
}

// Función para verificar si el usuario está autenticado
function isAuthenticated() {
    // Verifica si existe un usuario autenticado en sessionStorage.
    // Retorna `true` si `authenticatedUser` existe, y `false` si no.
    // Esto permite condicionar el acceso a ciertas partes de la aplicación.
    return sessionStorage.getItem('authenticatedUser') !== null;
}
