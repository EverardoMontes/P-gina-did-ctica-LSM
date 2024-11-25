let javier = document.getElementById("javierTengo");
let maria = document.getElementById("mariaTengo");
let carlos1 = document.getElementById("soyCarlos");
let carlos2 = document.getElementById("carlostengo");
let diana1 = document.getElementById("miDiana");
let diana2 = document.getElementById("nombreDiana");
let diana3 = document.getElementById("esDiana");
let diana4 = document.getElementById("dianaTengo");

function verificarEdad1() {
  if (javier.value === "tengo" || javier.value === "Tengo") {
    javier.classList.add("correct");
    if (javier.classList.contains("incorrect")) {
      javier.classList.remove("incorrect");
    }
  } else {
    javier.classList.add("incorrect");
    javier.addEventListener("click", () => {
      if (javier.classList.contains("incorrect")) {
        javier.classList.remove("incorrect");
      }
    });
  }
  if (maria.value === "tengo" || maria.value === "Tengo") {
    maria.classList.add("correct");
    if (maria.classList.contains("incorrect")) {
      maria.classList.remove("incorrect");
    }
  } else {
    maria.classList.add("incorrect");
    maria.addEventListener("click", () => {
      if (maria.classList.contains("incorrect")) {
        maria.classList.remove("incorrect");
      }
    });
  }
}
function verificarEdad2() {
  if (diana1.value === "mi" || diana1.value === "Mi") {
    diana1.classList.add("correct");
    if (diana1.classList.contains("incorrect")) {
      diana1.classList.remove("incorrect");
    }
  } else {
    diana1.classList.add("incorrect");
    diana1.addEventListener("click", () => {
      if (diana1.classList.contains("incorrect")) {
        diana1.classList.remove("incorrect");
      }
    });
  }
  if (diana2.value === "nombre" || diana2.value === "NOMBRE") {
    diana2.classList.add("correct");
    if (diana2.classList.contains("incorrect")) {
      diana2.classList.remove("incorrect");
    }
  } else {
    diana2.classList.add("incorrect");
    diana2.addEventListener("click", () => {
      if (diana2.classList.contains("incorrect")) {
        diana2.classList.remove("incorrect");
      }
    });
  }
  if (diana3.value === "ES" || diana3.value === "es") {
    diana3.classList.add("correct");
    if (diana3.classList.contains("incorrect")) {
      diana3.classList.remove("incorrect");
    }
  } else {
    diana3.classList.add("incorrect");
    diana3.addEventListener("click", () => {
      if (diana3.classList.contains("incorrect")) {
        diana3.classList.remove("incorrect");
      }
    });
  }
  if (diana4.value === "tengo" || diana4.value === "Tengo") {
    diana4.classList.add("correct");
    if (diana4.classList.contains("incorrect")) {
      diana4.classList.remove("incorrect");
    }
  } else {
    diana4.classList.add("incorrect");
    diana4.addEventListener("click", () => {
      if (diana4.classList.contains("incorrect")) {
        diana4.classList.remove("incorrect");
      }
    });
  }
  if (carlos1.value === "soy" || carlos1.value === "Soy") {
    carlos1.classList.add("correct");
    if (carlos1.classList.contains("incorrect")) {
      carlos1.classList.remove("incorrect");
    }
  } else {
    carlos1.classList.add("incorrect");
    carlos1.addEventListener("click", () => {
      if (carlos1.classList.contains("incorrect")) {
        carlos1.classList.remove("incorrect");
      }
    });
  }
  if (carlos2.value === "tengo" || carlos2.value === "Tengo") {
    carlos2.classList.add("correct");
    if (carlos2.classList.contains("incorrect")) {
      carlos2.classList.remove("incorrect");
    }
  } else {
    carlos2.classList.add("incorrect");
    carlos2.addEventListener("click", () => {
      if (carlos2.classList.contains("incorrect")) {
        carlos2.classList.remove("incorrect");
      }
    });
  }
}
