window.onload = function () {
  var modal = document.getElementById("emergente");
  const buttons = document.querySelectorAll('[id*="modal"]');
  var span = document.getElementById("span1");

  //   console.log(buttons);
  //   console.log("CARGARON");

  var modalesExistentes = {
    modalMisNuevosVecinos: `https://www.youtube.com/embed/zrpb7Lm5MY4?si=wsr_uB-Lk5pdV0lw`,
    modalverificarRespuestas: `https://www.youtube.com/embed/PMZdq8qryPY?si=667Sy6NGvO72eoPF`,
    modalLoHicisteBien: `https://www.youtube.com/embed/GEIR6rdUNUM?si=0o9SiLrXfnYwT2Ir`,
    modalAciertos: `https://www.youtube.com/embed/3wBzN_NTDto?si=YKwPcxb7BJ13IjU-`,
    modalErrores: `https://www.youtube.com/embed/OUSj2zRb_EE?si=8clQQSZxKd1etYq_`,
    modalConociéndonosEntreVecinos: ``,
    modalLlegaronNuevosVecinos: ``,
    modalJuguemosMemorama: `https://www.youtube.com/embed/_Vt7l2mDveA?si=juDhdXKq0CZU3CJW`,
    modalYoSoy: ``,
    modalNuevasFormasDePresentarnos: ``,
    modalRegresar: `https://www.youtube.com/embed/pV3O0vJA_84?si=DYpgJJZQIbpGbotV`,
    modalSiguiente: `https://www.youtube.com/embed/WHciLN4oqZk?si=ouUWc4obec4CltLn`,
  };
  // Al hacer clic en el botón, mostrar el modal
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      var idButton = this.id;
      var videoUrl = modalesExistentes[idButton];
      var iframe = document.querySelector("#emergente iframe");
      iframe.src = videoUrl;
      modal.style.display = "block";
    });
  });

  // Al hacer clic en la "X", cerrar el modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Al hacer clic fuera del modal, cerrarlo
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
};
