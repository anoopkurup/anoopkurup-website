// Mobile Navigation Toggle - Pure client-side JavaScript
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Handle dropdown on mobile
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    if (toggle) {
        // Mobile dropdown toggle
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 968) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    }
});

// Close mobile menu when clicking on a link (except dropdown toggles)
const navItems = document.querySelectorAll('.nav-links a:not(.dropdown-toggle a)');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (hamburger && navLinks) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Newsletter form handling for static sites
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        // For static sites, you'll need to integrate with:
        // 1. Formspree (https://formspree.io)
        // 2. Netlify Forms (if hosting on Netlify)
        // 3. EmailJS (https://www.emailjs.com)
        // 4. Or point to your own serverless function
        
        // Example: Prevent default and show message
        // Remove this if using actual form services
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing! For production, integrate with a form service like Formspree or Netlify Forms.');
        this.reset();
    });
}

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.card, .timeline-item, .testimonial').forEach(el => {
    observer.observe(el);
});