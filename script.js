// 1. Scroll Reveal Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// 2. Modal Logic
const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModal");
const span = document.getElementsByClassName("close")[0];

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// 3. Simple Theme Vibe Switcher
const themeBtn = document.getElementById('theme-toggle');
themeBtn.onclick = () => {
    const root = document.documentElement;
    const isDark = getComputedStyle(root).getPropertyValue('--bg').trim() === '#0f172a';
    
    if (isDark) {
        root.style.setProperty('--bg', '#f8fafc');
        root.style.setProperty('--text', '#0f172a');
        root.style.setProperty('--glass', 'rgba(0, 0, 0, 0.05)');
        root.style.setProperty('--border', 'rgba(0, 0, 0, 0.1)');
    } else {
        root.style.setProperty('--bg', '#0f172a');
        root.style.setProperty('--text', '#f8fafc');
        root.style.setProperty('--glass', 'rgba(255, 255, 255, 0.05)');
        root.style.setProperty('--border', 'rgba(255, 255, 255, 0.1)');
    }
};

// 4. Form Handling
document.getElementById('contactForm').onsubmit = (e) => {
    e.preventDefault();
    alert("Message Received! We'll get back to you shortly.");
    modal.style.display = "none";
};