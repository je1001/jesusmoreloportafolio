// Funcionalidades de los botones
const carousel = document.querySelector('.card-carousel');
const cards = Array.from(document.querySelectorAll('.card'));
let currentIndex = 0;

// Función para actualizar las clases de las tarjetas
function updateCards() {
    cards.forEach((card, index) => {
        const button = card.querySelector('.view-more');
        card.classList.remove('active', 'left', 'right');

        if (index === currentIndex) {
            card.classList.add('active'); // Tarjeta seleccionada
            button.style.pointerEvents = 'auto'; // Habilitar clic
        } else if (index === (currentIndex - 1 + cards.length) % cards.length) {
            card.classList.add('left'); // Tarjeta a la izquierda
            button.style.pointerEvents = 'none'; // Deshabilitar clic
        } else if (index === (currentIndex + 1) % cards.length) {
            card.classList.add('right'); // Tarjeta a la derecha
            button.style.pointerEvents = 'none'; // Deshabilitar clic
        }
    });
}

// Función para mover el carrusel hacia adelante
function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    updateCards();
}

// Función para mover el carrusel hacia atrás
function prevCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateCards();
}

// Escuchar los botones de navegación
document.querySelector('.carousel-button.next').addEventListener('click', nextCard);
document.querySelector('.carousel-button.prev').addEventListener('click', prevCard);

// Inicializar las tarjetas
updateCards();
function showPopup() {
    const popup = document.getElementById('popupCard');
    if (!popup.classList.contains('show')) {
      popup.classList.add('show');
      popup.classList.remove('hidden');
    }
  }
  
  function closePopup() {
    const popup = document.getElementById('popupCard');
    popup.classList.remove('show');
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 500); // Sincronizado con la animación de salida
  }
  function showModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    modal.classList.add('hidden');
}
function openNavbarModal() {
    const modal = document.getElementById('navbarModal');
    modal.classList.add('show');
  }
  
  function closeNavbarModal() {
    const modal = document.getElementById('navbarModal');
    modal.classList.remove('show');
  }
  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
  }
  
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
  }
    