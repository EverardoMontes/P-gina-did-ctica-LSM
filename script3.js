function verificarRespuestas() {
    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const input3 = document.getElementById('input3').value.trim();
    const input4 = document.getElementById('input4').value.trim();
    const input5 = document.getElementById('input5').value.trim();
    const input6 = document.getElementById('input6').value.trim();
    
    let correctas = 0;

    if (input1.toLowerCase() === 'soy') {
        correctas++;
        document.getElementById('input1').disabled = true;
        document.getElementById('input1').classList.add("correct");
    }
    if (input2.toLowerCase() === 'luis') {
        correctas++;
        document.getElementById('input2').disabled = true;
        document.getElementById('input2').classList.add("correct");
    }
    if (input3.toLowerCase() === 'yo') {
        correctas++;
        document.getElementById('input3').disabled = true;
        document.getElementById('input3').classList.add("correct");
    }
    if (input4.toLowerCase() === 'maria') {
        correctas++;
        document.getElementById('input4').disabled = true;
        document.getElementById('input4').classList.add("correct");
    }
    if (input5.toLowerCase() === 'yo') {
        correctas++;
        document.getElementById('input5').disabled = true;
        document.getElementById('input5').classList.add("correct");
    }
    if (input6.toLowerCase() === 'soy') {
        correctas++;
        document.getElementById('input6').disabled = true;
        document.getElementById('input6').classList.add("correct");
    }


    const resultadoDiv = document.getElementById('resultadoSec3');
    resultadoDiv.innerHTML = `Respuestas correctas: ${correctas} de 6`;
}

function verificarRespuestas2() {
    const input1 = document.getElementById('input2-1').value.trim();
    const input2 = document.getElementById('input2-2').value.trim();
    const input3 = document.getElementById('input2-3').value.trim();
    const input4 = document.getElementById('input2-4').value.trim();
    const input5 = document.getElementById('input2-5').value.trim();
    const input6 = document.getElementById('input2-6').value.trim();
    
    let correctas = 0;

    if (input1.toLowerCase() === 'llamo') {
        correctas++;
        document.getElementById('input2-1').disabled = true;
        document.getElementById('input2-1').classList.add("correct");
    }
    if (input2.toLowerCase() === 'luis') {
        correctas++;
        document.getElementById('input2-2').disabled = true;
        document.getElementById('input2-2').classList.add("correct");
    }
    if (input3.toLowerCase() === 'me') {
        correctas++;
        document.getElementById('input2-3').disabled = true;
        document.getElementById('input2-3').classList.add("correct");
    }
    if (input4.toLowerCase() === 'maria') {
        correctas++;
        document.getElementById('input2-4').disabled = true;
        document.getElementById('input2-4').classList.add("correct");
    }
    if (input5.toLowerCase() === 'llamo') {
        correctas++;
        document.getElementById('input2-5').disabled = true;
        document.getElementById('input2-5').classList.add("correct");
    }
    if (input6.toLowerCase() === 'me') {
        correctas++;
        document.getElementById('input2-6').disabled = true;
        document.getElementById('input2-6').classList.add("correct");
    }


    const resultadoDiv = document.getElementById('resultadoSec4');
    resultadoDiv.innerHTML = `Respuestas correctas: ${correctas} de 6`;
}



/////////// CÓDIGO DEL MEMORAMA

const cardsArray = [
    { type: 'phrase', content: 'Mi nombre es Luis' },
    { type: 'phrase', content: 'Mi nombre es María' },
    { type: 'phrase', content: 'Mi nombre es Pablo' },
    { type: 'phrase', content: 'Mi nombre es Diana' },
    { type: 'image', content: 'imgs/ejercicio/Luis.png' },
    { type: 'image', content: 'imgs/ejercicio/Maria.png' },
    { type: 'image', content: 'imgs/ejercicio/Pablo.png' },
    { type: 'image', content: 'imgs/ejercicio/Diana.png' }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

let shuffledCards = shuffle([...cardsArray]);
const gameBoard = document.getElementById('game-board');
let firstCard, secondCard, lockBoard = false, matchedPairs = 0;

function createCards() {
    shuffledCards.forEach((cardData) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.type = cardData.type;
        card.dataset.content = cardData.content;

        card.innerHTML = cardData.type === 'phrase' ? "" : `<img src="${cardData.content}" style="display: none;">`;
        card.addEventListener('click', flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard || this === firstCard) return;

    this.classList.add('flipped');
    if (this.dataset.type === 'phrase') {
        this.innerText = this.dataset.content;
    } else {
        this.querySelector('img').style.display = "block";
    }

    if (!firstCard) {
        firstCard = this;
    } else {
        secondCard = this;
        checkForMatch();
    }
}

function checkForMatch() {
    const firstCardContent = firstCard.dataset.content;
    const secondCardContent = secondCard.dataset.content;
    const firstCardImage = matchWithImage(firstCard);
    const secondCardImage = matchWithImage(secondCard);

    const isMatch = (firstCard.dataset.type === 'phrase' && firstCardContent === secondCardImage) ||
                    (secondCard.dataset.type === 'phrase' && secondCardContent === firstCardImage);

    isMatch ? disableCards() : unflipCards();
}

function matchWithImage(card) {
    const matches = {
        'Mi nombre es Luis': 'imgs/ejercicio/Luis.png',
        'Mi nombre es María': 'imgs/ejercicio/Maria.png',
        'Mi nombre es Pablo': 'imgs/ejercicio/Pablo.png',
        'Mi nombre es Diana': 'imgs/ejercicio/Diana.png'
    };
    return matches[card.dataset.content];
}

function disableCards() {
    [firstCard, secondCard].forEach(card => card.classList.add('matched'));
    resetBoard();
    matchedPairs++;
    if (matchedPairs === cardsArray.length / 2) setTimeout(() => alert('¡Ganaste!'), 500);
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        [firstCard, secondCard].forEach(card => {
            card.classList.remove('flipped');
            if (card.dataset.type === 'phrase') {
                card.innerText = "";
            } else {
                card.querySelector('img').style.display = "none";
            }
        });
        resetBoard();
    }, 1000);
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

createCards();

  
  // Resetear las variables para la siguiente jugada
  function resetBoard() {
      [firstCard, secondCard] = [null, null];
      lockBoard = false;
  }
  
  // Inicializar el juego
  createCards();
  