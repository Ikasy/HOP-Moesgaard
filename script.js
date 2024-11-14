// Gemmer historikken af overlays
const overlayHistory = [];

// Funktion til at åbne et specifikt overlay
function openOverlay(overlayId) {
    // Hvis der allerede er et åbent overlay, gemmes det i historikken
    const openOverlay = document.querySelector('.overlay[style*="display: flex"]');
    if (openOverlay) {
        overlayHistory.push(openOverlay.id);
    }

    // Lukker alle overlays
    closeOverlay();

    // Finder og viser det ønskede overlay
    const overlay = document.getElementById(overlayId);
    if (overlay) {
        overlay.style.display = 'flex';

        // Tilføjer klik-hændelse til overlay for at lukke ved klik udenfor
        overlay.addEventListener('click', function (e) {
            if (e.target.classList.contains('overlay-background')) {
                closeOverlay();
            }
        });
    }
}

// Funktion til at lukke alle overlays
function closeOverlay() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });
}

// Funktion til at gå til tidligere overlay
function goBack() {
    // Hent det sidste overlay fra historikken
    const previousOverlayId = overlayHistory.pop();
    if (previousOverlayId) {
        closeOverlay();  // Lukker nuværende overlay
        openOverlay(previousOverlayId);  // Åbner tidligere overlay
    }
}

