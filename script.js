// script.js
// Scroll suave para navegação
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    // Só prevenir comportamento padrão para âncoras internas (hash)
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Para links de outras páginas (ex: about.html) não impedir a navegação
  });
});
const words = ["Full Stack Developer", "Software Developer", "Application Developer", "System Architect"];
let i = 0;
const textElement = document.getElementById("changing-text");

function changeWord() {
  // Apaga com fade
  textElement.classList.add("hidden");

  setTimeout(() => {
    // Troca a palavra
    textElement.textContent = words[i];
    textElement.classList.remove("hidden");
    i = (i + 1) % words.length; // volta ao início
  }, 500); // tempo do fade-out
}

// Troca a cada 3 segundos
setInterval(changeWord, 3000);
