// Carousel
const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

// Dragging logic
slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

// Auto-scroll logic with looping effect
let currentIndex = 0;
const items = document.querySelectorAll('.gallery li');
const itemWidth = slider.clientWidth + 16; // 16px = 1rem gap

function autoScroll() {
  currentIndex++;

  // If we're at the end of the list, scroll back to the start
  if (currentIndex >= items.length) {
    currentIndex = 0; // Reset to first item
    slider.scrollLeft = 0; // Optionally reset scroll position immediately
  }

  slider.scrollTo({
    left: currentIndex * itemWidth,
    behavior: 'smooth'
  });
}

setInterval(autoScroll, 5000); // Change every 5 seconds

// =======port-gallery=======
// Enable drag-to-scroll on .portfolio
const portfolio = document.querySelector('.portfolio');

portfolio.addEventListener('mousedown', (e) => {
    isDown = true;
    portfolio.classList.add('active');
    startX = e.pageX - portfolio.offsetLeft;
    scrollLeft = portfolio.scrollLeft;
});

portfolio.addEventListener('mouseleave', () => {
    isDown = false;
    portfolio.classList.remove('active');
});

portfolio.addEventListener('mouseup', () => {
    isDown = false;
    portfolio.classList.remove('active');
});

portfolio.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - portfolio.offsetLeft;
    const walk = (x - startX) * 2; // adjust scroll speed
    portfolio.scrollLeft = scrollLeft - walk;
});

// Service Section Carousel (Owl Carousel)
$(".gallery-slider").owlCarousel({
  autoWidth: true,
  // Changed loop to false to prevent duplication
  loop: false, // <--- IMPORTANT CHANGE HERE
  dots: true,
  // Add rewind: true if you want it to go back to the beginning after the last item
  rewind: true
});

$(document).ready(function () {
  $(".gallery-slider .item").click(function () {
    $(".gallery-slider .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });
});