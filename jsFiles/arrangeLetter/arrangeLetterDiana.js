// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const name = "Diana";
    const shuffledName = shuffle(name.split('')).join('');
    const letterButtonsContainer = document.getElementById('letter-buttons4');
    const spacesContainer = document.getElementById('spaces4');
    const resetButton = document.getElementById('reset4');
    
    let selectedLetter = null;
    let selectedSpace = null;

    // Función para barajar un array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Crear botones de letras desordenadas
    shuffledName.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        button.addEventListener('click', () => {
            selectedLetter = button;
        });
        letterButtonsContainer.appendChild(button);
    });

    // Crear espacios para las letras ordenadas
    for (let i = 0; i < name.length; i++) {
        const space = document.createElement('div');
        space.classList.add('space');
        space.addEventListener('click', () => {
            if (selectedLetter) {
                space.textContent = selectedLetter.textContent;
                selectedLetter.disabled = true;
                selectedLetter = null;
            }
        });
        spacesContainer.appendChild(space);
    }

    // Reiniciar el juego
    resetButton.addEventListener('click', () => {
        letterButtonsContainer.innerHTML = '';
        spacesContainer.innerHTML = '';
        selectedLetter = null;
        selectedSpace = null;
        init();
    });

    function init() {
        shuffledName.split('').forEach(letter => {
            const button = document.createElement('button');
            button.textContent = letter;
            button.addEventListener('click', () => {
                selectedLetter = button;
            });
            letterButtonsContainer.appendChild(button);
        });

        for (let i = 0; i < name.length; i++) {
            const space = document.createElement('div');
            space.classList.add('space');
            space.addEventListener('click', () => {
                if (selectedLetter) {
                    space.textContent = selectedLetter.textContent;
                    selectedLetter.disabled = true;
                    selectedLetter = null;
                }
            });
            spacesContainer.appendChild(space);
        }
    }

    // Inicializar el juego
    letterButtonsContainer.innerHTML = '';
        spacesContainer.innerHTML = '';
        selectedLetter = null;
        selectedSpace = null;
        init();
});
