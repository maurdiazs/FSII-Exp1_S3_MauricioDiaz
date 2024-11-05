// Cuando el documento ha terminado de cargar completamente, se ejecuta esta función.
// Esto asegura que los elementos del DOM (HTML) ya están disponibles para manipulación.

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona los enlaces específicos en el navbar mediante el atributo 'href' o 'onclick'.
    // Estos son los enlaces a las secciones de Servicios, Perfil, y el botón para Cerrar Sesión.
    const serviciosLink = document.querySelector("a[href='servicios.html']");
    const profileLink = document.querySelector("a[href='perfil.html']");
    const logoutLink = document.querySelector("a[onclick='logout()']");

    // Verifica si el usuario está autenticado llamando a la función `isAuthenticated()`.
    // `isAuthenticated()` debe devolver true si el usuario ha iniciado sesión y está autenticado.
    if (isAuthenticated()) {
        // Si el usuario está autenticado, mostramos los enlaces a las secciones de Servicios,
        // Perfil, y el botón de Cerrar Sesión cambiando el estilo de display a "block".
        serviciosLink.style.display = "block";
        profileLink.style.display = "block";
        logoutLink.style.display = "block";
    } else {
        // Si el usuario no está autenticado, ocultamos los enlaces a las secciones de Servicios,
        // Perfil y el botón de Cerrar Sesión, cambiando el estilo de display a "none".
        serviciosLink.style.display = "none";
        profileLink.style.display = "none";
        logoutLink.style.display = "none";
    }
});