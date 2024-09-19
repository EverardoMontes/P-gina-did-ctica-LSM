document.addEventListener('DOMContentLoaded', () => {
    const name = "Javier";
    let shuffledName = shuffle(name.split('')).join('');
    const letterButtonsContainer = document.getElementById('letter-buttons1');
    const spacesContainer = document.getElementById('spaces1');
    const resetButton = document.getElementById('reset1');
    let spaces = [];

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
        let dragbtnnumber = 1
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
            button.setAttribute('draggable', true);
            button.className = "dragButton"+dragbtnnumber.toString()
            letterButtonsContainer.appendChild(button);
            dragbtnnumber+=1
        });

        //Drag n drop de los botones
        letterButtonsContainer.childNodes.forEach(letter => {
            letter.addEventListener("dragstart", (e)=> {
                let selected = e.target;
                spacesContainer.childNodes.forEach(space => {
                    space.addEventListener("dragover", (e)=> {
                        e.preventDefault();
                    });
                    space.addEventListener("drop", (e)=>{
                        space.textContent = selected.textContent
                        selected.disabled = true
                        selected = null;
                    });
                })

               
            })
        })
    }

    // Reiniciar el juego al hacer clic en el botón de reinicio
    resetButton.addEventListener('click', () => {
        init(); // Reiniciar todo llamando a init()
    });

    // Llamar a init() al cargar la página por primera vez
    init();
});
