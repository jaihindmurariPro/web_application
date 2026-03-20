// 1. Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeToggle.textContent = 'Toggle Dark Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = 'Toggle Light Mode';
    }
});

// 2. Simple Alert for Hero Button
function showAlert() {
    alert("Welcome! Let's build something amazing.");
}

// 3. Form Validation and Submission
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevents the page from refreshing
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        formStatus.innerText = `Thank you, ${name}! We will contact you at ${email}.`;
        formStatus.style.color = "green";
        contactForm.reset();
    } else {
        formStatus.innerText = "Please fill in all fields.";
        formStatus.style.color = "red";
    }
});