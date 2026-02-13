// Handle mobile/tablet click to toggle description
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Only toggle on non-hover devices (touch)
        if (!window.matchMedia('(hover: hover)').matches) {
            card.classList.toggle('active');
            e.preventDefault();
        }
    });
});