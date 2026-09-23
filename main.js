// Ankole Grill - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initClock();
    initMobileMenu();
    initSmoothScroll();
});

function initClock() {
    const clockElement = document.getElementById('clock');
    const dateElement = document.getElementById('date');
    
    if (!clockElement || !dateElement) return;
    
    function updateClock() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour12: false });
        const dateString = now.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        clockElement.textContent = timeString;
        dateElement.textContent = dateString;
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

function initMobileMenu() {
    const menuIcon = document.querySelector('.nav-icons .icon');
    const navLinks = document.querySelector('.nav-links');
    
    if (!menuIcon || !navLinks) return;
    
    let isOpen = false;
    
    menuIcon.addEventListener('click', function() {
        isOpen = !isOpen;
        navLinks.style.display = isOpen ? 'flex' : 'none';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.bottom = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '16px 16px 0 0';
        navLinks.style.marginBottom = '10px';
        navLinks.style.gap = '15px';
        
        menuIcon.textContent = isOpen ? '✕' : '☰';
    });
    
    document.addEventListener('click', function(e) {
        if (isOpen && !e.target.closest('.bottom-nav')) {
            isOpen = false;
            navLinks.style.display = 'none';
            menuIcon.textContent = '☰';
        }
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function validateReservationForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff4444';
        } else {
            field.style.borderColor = '';
        }
    });
    
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            isValid = false;
            emailField.style.borderColor = '#ff4444';
        }
    }
    
    const telField = form.querySelector('input[type="tel"]');
    if (telField && telField.value) {
        const telRegex = /^[\d\s\-\+\(\)]{10,}$/;
        if (!telRegex.test(telField.value)) {
            isValid = false;
            telField.style.borderColor = '#ff4444';
        }
    }
    
    return isValid;
}

const reservationForm = document.querySelector('.booking-form');
if (reservationForm) {
    reservationForm.addEventListener('submit', function(e) {
        if (!validateReservationForm(this)) {
            e.preventDefault();
            alert('Please fill in all required fields correctly.');
        }
    });
    
    reservationForm.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', function() {
            if (this.style.borderColor === 'rgb(255, 68, 68)') {
                this.style.borderColor = '';
            }
        });
    });
}