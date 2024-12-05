const imageWrapper = document.querySelector('.image-wrapper');
const hotspotContents = document.querySelectorAll('.hotspot-content');
const container = document.getElementById('container');
const hotspots = document.querySelectorAll('.hotspot');

let zoomAmount = 0.8; // Initial zoom level
let rotationX = 0; // Initial X rotation
let rotationY = 0; // Initial Y rotation
let activeHotspotIndex = null;

// Mousemove event to handle rotation
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect(); // Get the bounding rectangle of the container
  const mouseX = e.clientX - rect.left; // Mouse X relative to the container
  const mouseY = e.clientY - rect.top;  // Mouse Y relative to the container

  // Calculate rotation based on the container's dimensions
  rotationX = ((rect.width / 2 - mouseX) / 25).toFixed(2);
  rotationY = ((rect.height / 2 - mouseY) / 25).toFixed(2);

  // Apply the transformations
  imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
});


// Wheel event to handle zoom
container.addEventListener('wheel', (e) => {
  if (!e.target.closest('.hotspot-content')) {
      zoomAmount += e.deltaY < 0 ? 0.1 : -0.1;
      zoomAmount = Math.min(Math.max(zoomAmount, 0.6), 1);
      imageWrapper.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg) scale(${zoomAmount})`;
      e.preventDefault();
  }
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
      imageWrapper.style.margin = "auto 0 auto auto"

    }
  });
});

// Function to close any open popup
function closePopup() {
  if (activeHotspotIndex !== null) {
    hotspotContents[activeHotspotIndex].style.display = "none"; // Hide active content
    hotspots[activeHotspotIndex].style.opacity = "1"; // Reset hotspot opacity
    activeHotspotIndex = null; // Reset active index
    imageWrapper.style.margin = "auto"

  }
}
