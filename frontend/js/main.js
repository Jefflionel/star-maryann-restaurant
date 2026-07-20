// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Menu Logic ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        // Toggle menu open/close
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu automatically when a link is clicked
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // --- 2. Coming Soon Modal Logic ---
    const modal = document.getElementById('coming-soon-modal');

    // Function to open modal
    function openModal(e) {
        if (modal) {
            e.preventDefault(); // Prevents the link from jumping to the top of the page
            modal.classList.remove('hidden');
            modal.classList.add('flex');
        }
    }

    // Expose closeModal globally so the HTML onclick="closeModal()" attribute works
    window.closeModal = function() {
        if (modal) {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
        }
    };

    // Attach the open function to all buttons with the class 'order-btn'
    document.querySelectorAll('.order-btn').forEach(button => {
        button.addEventListener('click', openModal);
    });
});