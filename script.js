/* Script til Vikinger */
// Funktion til at åbne et specifikt overlay
function openOverlay(overlayId) {
    // Lukker alle overlays
    closeOverlay();

    // Finder og viser det ønskede overlay
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'flex';
    }
}

// Funktion til at lukke alle overlays
function closeOverlay() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });
}
