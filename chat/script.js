function checkAnswers() {
    const answer1 = document.getElementById('answer1').value.trim().toLowerCase();
    const answer2 = document.getElementById('answer2').value.trim().toLowerCase();
    let resultText = '';

    if (answer1 === 'mariajelena' && answer2 === 'crisalda') {
        resultText = '¡Correcto!';
    } else {
        resultText = 'Inténtalo de nuevo.';
    }

    document.getElementById('result').innerText = resultText;
}

function checkPresentations() {
    const input1 = document.getElementById('input1').value.trim().toLowerCase();
    const input2 = document.getElementById('input2').value.trim().toLowerCase();
    const input3 = document.getElementById('input3').value.trim().toLowerCase();
    let correctas = 0;

    if (input1 === 'soy') correctas++;
    if (input2 === 'juan' || input2 === 'pedro' || input2 === 'mario') correctas++;
    if (input3 === 'yo') correctas++;

    const resultPresentation = `Respuestas correctas: ${correctas} de 3`;
    document.getElementById('resultPresentation').innerText = resultPresentation;
}
