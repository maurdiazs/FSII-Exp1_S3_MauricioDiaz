// Obtener el parámetro 'id' de la URL
// URLSearchParams es una API que permite acceder a los parámetros de la URL. 
// En este caso, se obtiene el valor del parámetro 'id' de la URL, que representa el ID del servicio.
const urlParams = new URLSearchParams(window.location.search);
const servicioId = parseInt(urlParams.get('id')); // Convierte el ID obtenido a un número entero.

// Verificar si el `servicioId` se obtiene correctamente
console.log("ID del servicio:", servicioId); // Muestra en consola el ID del servicio para asegurar que se obtuvo correctamente.

// Función para cargar el detalle del servicio
function loadServicioDetail() {
    // Busca el servicio en la lista de servicios (`servicios`) que tiene un ID que coincide con `servicioId`.
    const servicio = servicios.find(g => g.id === servicioId);

    // Verificar si el servicio fue encontrado en la lista
    console.log("Servicio encontrado:", servicio); // Muestra el servicio encontrado o `undefined` si no existe.

    // Si `servicio` existe, esto indica que el servicio fue encontrado en la lista.
    if (servicio) {
        // Asigna los detalles del servicio a los elementos HTML correspondientes en la página:
        
        // Asigna la imagen del servicio al elemento con id "servicioImage".
        document.getElementById("servicioImage").src = servicio.image;

        // Asigna el título del servicio al elemento con id "servicioTitle".
        document.getElementById("servicioTitle").textContent = servicio.title;

        // Asigna la descripción del servicio al elemento con id "servicioDescription".
        document.getElementById("servicioDescription").textContent = servicio.description;

        // Asigna el precio original del servicio al elemento con id "servicioPrice".
        document.getElementById("servicioPrice").textContent = `Precio: $${servicio.price}`;

        // Si el servicio tiene un descuento, calcula y muestra el precio con descuento.
        if (servicio.discount > 0) {
            // Calcula el precio con descuento usando el porcentaje de descuento.
            const discountPrice = servicio.price - (servicio.price * servicio.discount / 100);
            // Asigna el precio con descuento al elemento con id "servicioDiscountPrice", limitando a dos decimales.
            document.getElementById("servicioDiscountPrice").textContent = `Precio con descuento: $${discountPrice.toFixed(2)}`;
        } else {
            // Si no tiene descuento, muestra un mensaje indicándolo.
            document.getElementById("servicioDiscountPrice").textContent = "Este servicio no tiene descuento.";
        }
    } else {
        // Si no se encuentra el servicio, muestra una alerta al usuario y redirige a la página principal de servicios.
        alert("Servicio no encontrado.");
        window.location.href = "servicios.html";
    }
}

// Cargar el detalle del servicio al cargar la página
// `DOMContentLoaded` asegura que esta función se ejecuta solo cuando el contenido de la página está completamente cargado,
// para que los elementos HTML estén disponibles para ser manipulados.
document.addEventListener("DOMContentLoaded", loadServicioDetail);
