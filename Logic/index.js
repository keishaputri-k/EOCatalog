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
