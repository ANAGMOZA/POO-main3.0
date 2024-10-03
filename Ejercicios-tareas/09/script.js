// Obtener todos los botones de like
const likeButtons = document.querySelectorAll('.like-button');

// Agregar evento de clic a cada botón de like
likeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener el ID del botón de like
        const id = button.getAttribute('data-id');

        // Obtener el elemento que muestra el número de likes
        const likesElement = document.getElementById(`likes-${id}`);

        // Obtener el número actual de likes
        let likes = parseInt(likesElement.textContent);

        // Aumentar el número de likes en 1
        likes++;

        // Actualizar el texto del elemento que muestra el número de likes
        likesElement.textContent = likes;
    });
});
