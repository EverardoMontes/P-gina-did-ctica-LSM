window.onload = function(){
    var modal = document.getElementById("emergente");
const buttons = document.querySelectorAll('[id*="modal"]');
var span = document.getElementById("span1");

console.log(buttons)
console.log("CARGARON")

var modalesExistentes = {
    "modalMisNuevosVecinos":`https://www.youtube.com/embed/zrpb7Lm5MY4?si=0lBt_qRMaFyprqSk`,
    "modalverificarRespuestas":`https://www.youtube.com/embed/PMZdq8qryPY?si=667Sy6NGvO72eoPF`,
    "modalLoHicisteBien":`https://www.youtube.com/embed/GEIR6rdUNUM?si=0o9SiLrXfnYwT2Ir`
}
// Al hacer clic en el botón, mostrar el modal
buttons.forEach(button => {
            button.addEventListener('click', function() {
                var idButton = this.id
                var videoUrl = modalesExistentes[idButton]
                var iframe = document.querySelector("#emergente iframe");
                iframe.src = videoUrl;
                console.log("EEEEEEEEEEEE")
                modal.style.display = "block";
            });
        });


// Al hacer clic en la "X", cerrar el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Al hacer clic fuera del modal, cerrarlo
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}


