var modal = document.getElementById("Titulo1Modal");
var btn = document.getElementById("Titulo1ModalBtn");
var span = document.getElementsByClassName("close")[0];

// Al hacer clic en el botón, mostrar el modal
btn.onclick = function() {
    modal.style.display = "block";
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