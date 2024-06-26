document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready');

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission handling
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        formResponse.textContent = `Thank you for your message, ${name}! I'll get back to you at ${email} soon.`;
        formResponse.style.color = 'green';

        // Clear the form fields
        form.reset();
    });
});
