document.addEventListener('DOMContentLoaded', () => {
    console.log('Iniciando quinto ejercicio'); // Verificar si esto se ejecuta

    const name = "Carlos";
    let shuffledName = shuffle(name.split('')).join('');
    const letterButtonsContainer = document.getElementById('letter-buttons5');
    const spacesContainer = document.getElementById('spaces5');
    const resetButton = document.getElementById('reset5');
    let spaces = [];

    // Verificar si los elementos se están obteniendo correctamente
    console.log(letterButtonsContainer, spacesContainer, resetButton);

    // Función para barajar un array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Inicializar el juego
    function init() {
        console.log('Inicializando quinto ejercicio'); // Verificar si esto se ejecuta
        letterButtonsContainer.innerHTML = ''; // Limpiar contenedor de botones
        spacesContainer.innerHTML = ''; // Limpiar contenedor de espacios
        spaces = []; // Resetear array de espacios
        shuffledName = shuffle(name.split('')).join(''); // Re-barajar el nombre

        // Crear espacios para las letras ordenadas
        for (let i = 0; i < name.length; i++) {
            const space = document.createElement('div');
            space.classList.add('space');
            spaces.push(space);
            spacesContainer.appendChild(space);
        }

        // Crear botones de letras desordenadas
        shuffledName.split('').forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', () => {
                // Encuentra el primer espacio disponible
                const firstEmptySpace = spaces.find(space => !space.textContent);
                if (firstEmptySpace) {
                    firstEmptySpace.textContent = button.textContent;
                    button.disabled = true; // Deshabilitar el botón
                }
            });
            letterButtonsContainer.appendChild(button);
        });
    }

    // Reiniciar el juego al hacer clic en el botón de reinicio
    resetButton.addEventListener('click', () => {
        init(); // Reiniciar todo llamando a init()
    });

    // Llamar a init() al cargar la página por primera vez
    init();
});
