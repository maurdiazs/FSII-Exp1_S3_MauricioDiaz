// Función para cargar y mostrar los servicios en la página de lista de Servicios (servicios.html)
function loadServicios() {
    // Selecciona el contenedor principal donde se mostrarán las tarjetas de cada servicio
    const servicesList = document.getElementById("servicesList");
    
    // Recorre la lista de servicios almacenada en `servicios` (proveniente de serviciosData.js)
    // y genera una tarjeta de Bootstrap para cada servicio.
    servicios.forEach(servicio => {
        // Crea un elemento `div` que contendrá la tarjeta de un servicio.
        const servicioCard = document.createElement("div");

        // Asigna las clases de Bootstrap para darle formato de tarjeta y para asegurar
        // que se vea bien en dispositivos móviles y de escritorio.
        servicioCard.className = "col-md-4 mb-4"; // Ocupa 4 columnas en tamaño medio (col-md-4) y agrega margen inferior

        // Define el contenido HTML de la tarjeta utilizando interpolación de strings (template literals).
        // Incluye la imagen, título, descripción, precio y un botón para ver más detalles.
        servicioCard.innerHTML = `
            <div class="card h-100">                     <!-- Tarjeta Bootstrap que ocupa todo el alto disponible -->
                <img src="${servicio.image}" class="card-img-top" alt="${servicio.title}"> <!-- Imagen del servicio -->
                <div class="card-body">                 <!-- Contenedor del cuerpo de la tarjeta -->
                    <h5 class="card-title">${servicio.title}</h5> <!-- Título del servicio -->
                    <p class="card-text">${servicio.description}</p> <!-- Breve descripción del servicio -->
                    <p class="card-text"><strong>Precio: </strong>$${servicio.price}</p> <!-- Precio del servicio -->
                    <!-- Enlace que redirige a la página de detalles del servicio, pasando el ID del servicio en la URL -->
                    <a href="servicio-detalle.html?id=${servicio.id}" class="btn btn-primary">Ver Detalle</a>
                </div>
            </div>
        `;

        // Agrega la tarjeta creada (`gameCard`) al contenedor principal (`gamesList`).
        gamesList.appendChild(gameCard);
    });
}
