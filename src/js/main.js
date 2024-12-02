// Importa los estilos CSS
import '../css/style.css';

// Animación de movimiento aleatorio para conejos
function animateBunnies() {
  const bunnies = document.querySelectorAll('.bunny');
  bunnies.forEach((bunny) => {
      setInterval(() => {
          const newX = Math.random() * window.innerWidth;
          const newY = Math.random() * window.innerHeight;

          bunny.style.transform = `translate(${newX}px, ${newY}px)`;
      }, 4000);
  });
}

// Animación de movimiento aleatorio para huevos
function animateEggs() {
  const eggs = document.querySelectorAll('.egg');
  eggs.forEach((egg) => {
      setInterval(() => {
          const newX = Math.random() * window.innerWidth;
          const newY = Math.random() * window.innerHeight;

          egg.style.transform = `translate(${newX}px, ${newY}px) rotate(${Math.random() * 360}deg)`;
      }, 3000);
  });
}

// Inicia las animaciones
window.onload = () => {
  animateBunnies();
  animateEggs();
};
