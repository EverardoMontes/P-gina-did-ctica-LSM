var modal = document.getElementById("verificarR");
var btn = document.getElementById("verificarRespuestas1");
var span = document.getElementsByClassName("close")[1];

// Al hacer clic en el botón, mostrar el modal
btn.onclick = function() {
    modal.style.display = "block";
    console.log("Entré")
}

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