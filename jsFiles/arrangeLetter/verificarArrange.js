function desactivar(div, palabra) {
        console.log(div, "diveee")
        let word = "";
        div.childNodes.forEach(letra => {
        word += letra.textContent;
        });
        console.log(word, "pepe")
        let acomodado = word.toString() == palabra;
    
    if (acomodado == true) {
        if (div.parentNode.lastChild.previousSibling.className == "resetButton") {
            div.parentNode.lastChild.previousSibling.disabled = true;
        }
        div.setAttribute("class", "correct");
        return 1
    }
    else {
        console.log("error")
        return 0
    }
}
function verificarAcomodo() {
    console.log("me picaste");
    let javier = document.getElementById("spaces1")
    let elena= document.getElementById("spaces2")
    let maria= document.getElementById("spaces3")
    let diana= document.getElementById("spaces4")
    let carlos = document.getElementById("spaces5")
    let array = [javier, elena, maria, diana, carlos];
    let palabras = ["Javier", "Elena", "Maria", "Diana", "Carlos"]
    let contador = 0
    for (let i = 0; i <= array.length-1; i++){
        contador+= desactivar(array[i], palabras[i]);
    }
    let resultado = document.getElementById("resultadosSec2")
    console.log("contadoooo", contador.toString())
    resultado.innerHTML= "Respuestas correctas: "+contador +" de 6"
}





