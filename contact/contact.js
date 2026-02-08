// GLOBAL THEME TOGGLE - Works on ANY page
function toggleGlobalTheme() {
    const body = document.body;
    const btn = document.getElementById('themeBtn');

    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        btn.textContent = '☀️';
        localStorage.setItem('theme', 'light');
        document.title = 'Ecom Store - Light Mode';
    } else {
        body.setAttribute('data-theme', 'dark');
        btn.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
        document.title = 'Ecom Store - Dark Mode';
    }
}

// Load saved theme preference
const savedTheme = localStorage.getItem('theme');
const themeBtn = document.getElementById('themeBtn');
if (savedTheme === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '🌙';
} else {
    themeBtn.textContent = '☀️';
}

// Mobile menu toggle
function toggleMobileMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('mobile-open');
}

// Form submission
document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    setTimeout(() => {
        btn.textContent = 'Message Sent! ✨';
    }, 1500);
    setTimeout(() => {
        btn.textContent = originalText;
    }, 3000);
});
/* send message btn */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-panel");
  
  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent default form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation check
    if (!name || !email || !message) {
      alert("Please fill in all required fields!");
      return;
    }

    // WhatsApp number (replace with your number including country code)
    const whatsappNumber = "923001234567"; 

    // Construct message
    let whatsappMessage = `*New Contact Form Submission*%0A`;
    whatsappMessage += `*Name:* ${name}%0A`;
    whatsappMessage += `*Email:* ${email}%0A`;
    if (phone) whatsappMessage += `*Phone:* ${phone}%0A`;
    whatsappMessage += `*Message:* ${message}`;

    // Open WhatsApp
    const whatsappURL = `https://wa.me/${+923142239774}?text=${whatsappMessage}`;
    window.open(whatsappURL, "_blank");
  });
});

