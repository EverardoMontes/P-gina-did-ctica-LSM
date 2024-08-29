// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  let currentIndex = 0;

  function showSection(index) {
    sections.forEach((section, i) => {
      section.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
  }

  function nextSection() {
    currentIndex = (currentIndex + 1) % sections.length;
    showSection(currentIndex);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function prevSection() {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    showSection(currentIndex);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index;
      showSection(currentIndex);
    });
  });

  prevBtn.addEventListener("click", prevSection);
  nextBtn.addEventListener("click", nextSection);

  // Inicializar
  showSection(currentIndex);
});
