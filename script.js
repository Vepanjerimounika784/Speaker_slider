
// Get necessary DOM elements
const popup = document.getElementById('popup');
const closePopup = document.getElementById('close-popup');
const popupName = document.getElementById('popup-name');
const popupPosition = document.getElementById('popup-position');
const popupCompany = document.getElementById('popup-company');
const popupImage = document.getElementById('popup-image');
const cards = document.querySelectorAll('.card');
const carousel = document.getElementById('carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

// Function to open the popup with card details
function showPopup(card) {
    const name = card.getAttribute('data-name');
    const position = card.getAttribute('data-position');
    const company = card.getAttribute('data-company');
    const image = card.getAttribute('data-image');

    // Update popup content
    popupName.textContent = name;
    popupPosition.textContent = position;
    popupCompany.textContent = company;
    popupImage.src = image;

    // Show the popup
    popup.style.display = 'flex';


}

// Add event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        showPopup(card);
    });
});

// Close popup when 'X' button is clicked
closePopup.addEventListener('click', () => {
    popup.style.display = 'none';

    // Reset all cards scale
    cards.forEach(c => c.style.transform = 'scale(1)');
});

// Carousel navigation
let currentSlide = 0;

function updateCarousel() {
    const slideWidth = carousel.querySelector('.card').offsetWidth + 20; // 20 for margin
    carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentSlide = Math.max(currentSlide - 1, 0);
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    const maxSlides = carousel.children.length - 1;
    currentSlide = Math.min(currentSlide + 1, maxSlides);
    updateCarousel();
});
