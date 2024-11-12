const imageWrapper = document.querySelector('.image-wrapper');
const popup = document.getElementById('popup');
const popupText = document.getElementById('popup-text');
const hotspots = document.querySelectorAll('.hotspot');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 25;
  const y = (window.innerHeight / 2 - e.pageY) / 25;

  // Apply 3D transform to the entire image wrapper (image + hotspots)
  imageWrapper.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});

hotspots.forEach(hotspot => {
  hotspot.addEventListener('click', (e) => {
    const info = e.target.getAttribute('data-info');
    popupText.innerText = info;

    // Get click position and popup dimensions
    let popupX = e.pageX;
    let popupY = e.pageY;
    popup.style.display = 'block';

    // Temporarily position the popup to get its dimensions
    popup.style.left = `${popupX}px`;
    popup.style.top = `${popupY}px`;

    const popupRect = popup.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Adjust if the popup goes off the right edge
    if (popupRect.right > viewportWidth) {
      popupX -= (popupRect.right - viewportWidth + 10); // 10px padding
    }

    // Adjust if the popup goes off the bottom edge
    if (popupRect.bottom > viewportHeight) {
      popupY -= (popupRect.bottom - viewportHeight + 10); // 10px padding
    }

    // Apply final position with adjustments
    popup.style.left = `${popupX}px`;
    popup.style.top = `${popupY}px`;
  });
});

function closePopup() {
  popup.style.display = 'none';
}
