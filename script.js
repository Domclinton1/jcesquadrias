const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuOverlay = document.getElementById("menuOverlay");
const header = document.querySelector("header");

let lastScroll = 0;

// Abrir/fechar menu
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
  menuOverlay.classList.toggle("active");
});

// Fechar menu ao clicar no overlay
menuOverlay.addEventListener("click", () => {
  menuToggle.classList.remove("active");
  navMenu.classList.remove("active");
  menuOverlay.classList.remove("active");
});

// Fechar menu ao clicar em um link
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
  });
});

// Mostrar/ocultar header ao rolar
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    // Rolando para baixo - esconder header
    header.style.transform = "translateY(-100%)";
  } else {
    // Rolando para cima - mostrar header
    header.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});

const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

let currentSlide = 0;

function updateSlide(position) {
  track.style.transform = `translateX(-${position * 100}%)`;
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlide(currentSlide);
});

/* Auto slide */
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlide(currentSlide);
}, 5000);

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
