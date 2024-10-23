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

const cards=document.querySelectorAll('.memory-card');

let hasFlippedCard=false;
let lockBoard=false;
let firstCard, secondCard;
let cardsFlippedCounter=0;

function flipCard(){
    if(lockBoard) return;
    if(this=== firstCard) return;

    this.classList.add('flip');
    
    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard=this;

        return;
    }

    hasFlippedCard=false;
    secondCard=this;   

    checkForMatch();

}
function checkForMatch(){
    let isMatch = firstCard.dataset.name===secondCard.dataset.name
    isMatch ? disableCards():unflipCards();
}
function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
    cardsFlippedCounter+=2;
    const firstFrontFace = firstCard.querySelector('.front-face');
    const secondFrontFace = secondCard.querySelector('.front-face');

    if (firstFrontFace && secondFrontFace) {
        firstFrontFace.style.borderColor = 'green';
        secondFrontFace.style.borderColor = 'green';
    }

    if(cardsFlippedCounter==8){
        const resultadoDiv = document.getElementById('resultadoSec6');
        resultadoDiv.style.display = 'block';
    }
    resetBoard();
}
function unflipCards(){
    lockBoard=true;
    setTimeout(()=>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
    },4500);
    
}
function resetBoard(){
    [hasFlippedCard, lockBoard]=[false,false];
    [firstCard,secondCard]=[null,null]
}

(function shuffle(){
    cards.forEach(card =>{
        let randomPos=Math.floor(Math.random()*8);
        card.style.order=randomPos;
    });
})();

cards.forEach(card => card.addEventListener('click',flipCard))


