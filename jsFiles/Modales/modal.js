//PARA AGREGAR CUALQUIER MODAL SE SIGUEN LAS SIGUIENTES INSTRUCCIONES:
//----------------------------------------------------------------
//Simplemente creas el botóon html de las manitas y lo pones en el lugar que mejor te parezca dentro del html, la plantilla es la siguiente:
/* <button class="iconlsmbutton" id="">
  <img
    src="./imgs/manitas.png"
    alt="Icono clickeable para traducción a lengua de señas mexicana"
  />
</button>; */
// y en el apartado id del button, le añades el nombre del modal que quieres que aparezca ahí
//Por facilidad decidimos empezar todos los nombres con "modal" y que tengan un nombre explícito de lo que dirá el modal
//una vez añadida la id del button, entra abajo en el diccionario de modales existentes y añade nombre del modal nuevo(key) y vinculo html del
//embebido de youtube(key). Cuando le das insertar en html a un video de youtube te da una etiqueta de iframe, el link embebido está dentro
//de esa etiqueta de iframe, solo copiala y pegala como value de la key.
//Ese es todo el proceso para añadir un nuevo modal.
//ALGUNOS MODALES YA ESTÁN DEFINIDOS, PERO DADO QUE AL MOMENTO DE ENTREGAR ESTE CÓDIGO AÚN NO SE GRABAN LOS VIDEOS, EL LINK EMBEBIDO ESTÁ EN BLANCO
//FAVOR DE REVISAR SI EL MODAL QUE INTENTA INGRESAR YA ESTÁ DEFINIDO PERO CON UN ENLACE VACÍO.
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
    modalObservaALosPersonajesYPracticaSusNombres: `https://www.youtube.com/embed/wDuisQBH8pY?si=AKLyZ0tNCDKcA-uo`,
    modalObservaYPracticaYoSoyParaPresentarte: `https://www.youtube.com/embed/Lb7hc9woHtk?si=PGEp788E8Me9i5M5`,
    modalJuguemosMemorama: `https://www.youtube.com/embed/_Vt7l2mDveA?si=juDhdXKq0CZU3CJW`,
    modalYoSoy: `https://www.youtube.com/embed/P4QdT7QfqAE?si=eAUOLRsUJyAYgstm`,
    modalNuevasFormasDePresentarnos: `https://www.youtube.com/embed/LRRLQZhCwBs?si=4oNFunX9qC0XkrOc`,
    modalRegresar: `https://www.youtube.com/embed/pV3O0vJA_84?si=DYpgJJZQIbpGbotV`,
    modalSiguiente: `https://www.youtube.com/embed/WHciLN4oqZk?si=ouUWc4obec4CltLn`,
    modalOrdenaLasLetrasDeCadaNombre: `https://www.youtube.com/embed/GVjSW21ZPBk?si=BojeQmwz6an4Wfdx`,
    modalSoyJavier: ``,
    modalSoyTeresa: ``,
    modalSoyLuis: ``,
    modalSoyPablo: ``,
    modalObservaElEjemploYCompletaLasTarjetasDePresentacion: `https://www.youtube.com/embed/xNPzHTFVNx0?si=B880vLsHmLq9kMHI`,
    modalEscribelapalabraqueFalta: `https://www.youtube.com/embed/hQzO3k0Hi18?si=LiJ4833KvamqFGlO`,
    modalObservaElEjemploYRelacionaElPersonajeConSuNombre: `https://www.youtube.com/embed/f8jPPIpONPE?si=ziUKjlphGeN_Wf_m`,
    modalEncuentroDeVecinos: ``,
    modalmiedad: `https://www.youtube.com/embed/foFml4xJWNY?si=8-8gPpGh2pwQjcSu`,
    modalLeeyRelacionaColumnas: `https://www.youtube.com/embed/32YwRcwFOGc?si=w8Q3NCSJb79yxz6g`,
    modalsoyluistengo8años: ``,
    modalRecordemosquienesquien: ``,
    modalElenaViveEnCasaVerde: `https://www.youtube.com/embed/70N2NsG9ZZE?si=ImT1dZNY_ex7cOMj`,
    modalJavierViveEnCasaVerde: `https://www.youtube.com/embed/EDuBKzUM5N4?si=Y7SmxN8zQ0UPyJ29`,
    modalHola: `https://www.youtube.com/embed/OUH3Upbb-MI?si=4s3Dg2KFFIAdMtvT`,
    modalHolaSiClaro: `https://www.youtube.com/embed/K1ZikGwotpc?si=EFmum9bBjaFqCrKn`,
    modalCarlosViveEnCasaAmarilla: `https://www.youtube.com/embed/FGP_TUcEu_s?si=BdFoUK9rFKLNOviX`,
    modalDianaViveEnCasaRosa: `https://www.youtube.com/embed/q6rfwgW7Z_E?si=JrPpyuEvxCUCyZaR`,
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
