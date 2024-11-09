document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('nav ul');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active'); 
    });

    const form = document.getElementById('contactForm');
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirmEmail');

    if (form) {
        form.addEventListener('submit', function (e) {
            if (email.value !== confirmEmail.value) {
                alert('The email addresses do not match');
            } else {
                alert('Does not submit to server');
            }

            e.preventDefault();
        });
    }
});
