const imageWrapper = document.querySelector('.image-wrapper');
const hotspotContents = document.querySelectorAll('.hotspot-content');
const container = document.getElementById('container');
const hotspots = document.querySelectorAll('.hotspot');

let zoomAmount = 1; // Initial zoom level
let rotationX = 0; // Initial X rotation
let rotationY = 0; // Initial Y rotation
let activeHotspotIndex = null;

// Mousemove event to handle rotation
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  rotationX = ((rect.width / 2 - (e.pageX - rect.left)) / 25).toFixed(2);
  rotationY = ((rect.height / 2 - (e.pageY - rect.top)) / 25).toFixed(2);
  imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
});

// Wheel event to handle zoom
container.addEventListener('wheel', (e) => {
  zoomAmount += e.deltaY < 0 ? 0.1 : -0.1;
  zoomAmount = Math.min(Math.max(zoomAmount, 0.5), 2);
  imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
  e.preventDefault();
});

// Hotspot click event to toggle popups
hotspots.forEach((hotspot, index) => {
  hotspot.addEventListener('click', () => {
    if (activeHotspotIndex === index) {
      closePopup(); // Close if the same hotspot is clicked again
    } else {
      closePopup(); // Close any open popup first
      activeHotspotIndex = index;
      hotspots.forEach(spot => (spot.style.opacity = "1"));
      hotspot.style.opacity = "0.5"; // Highlight selected hotspot
      hotspotContents[index].style.display = 'block'; // Show associated content
    }
  });
});

// Function to close any open popup
function closePopup() {
  if (activeHotspotIndex !== null) {
    hotspotContents[activeHotspotIndex].style.display = "none"; // Hide active content
    hotspots[activeHotspotIndex].style.opacity = "1"; // Reset hotspot opacity
    activeHotspotIndex = null; // Reset active index

  }
}
