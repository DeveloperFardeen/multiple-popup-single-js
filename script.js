document.addEventListener('DOMContentLoaded', function() {

    // Get all open buttons
    const openButtons = document.querySelectorAll('.open-popup');
    openButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'flex';
        });
    });

    // Get all close buttons
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.getAttribute('data-popup');
            document.getElementById(popupId).style.display = 'none';
        });
    });

    // Close the popup when clicking outside of the popup content
    window.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup')) {
            event.target.style.display = 'none';
        }
    });
});
