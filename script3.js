function verificarRespuestas() {
    const input1 = document.getElementById('input1').value.trim();
    const input2 = document.getElementById('input2').value.trim();
    const input3 = document.getElementById('input3').value.trim();
    
    let correctas = 0;

    if (input1.toLowerCase() === 'soy') {
        correctas++;
    }
    if (input2.toLowerCase() === 'luis') {
        correctas++;
    }
    if (input3.toLowerCase() === 'yo') {
        correctas++;
    }
    if (input4.toLowerCase() === 'maria') {
        correctas++;
    }
    if (input5.toLowerCase() === 'yo') {
        correctas++;
    }
    if (input6.toLowerCase() === 'soy') {
        correctas++;
    }


    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Respuestas correctas: ${correctas} de 3`;
}
