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

    const updateMenuState = () => {
        navLinks.classList.toggle('open', isOpen);
        menuIcon.textContent = isOpen ? '✕' : '☰';
        menuIcon.setAttribute('aria-expanded', String(isOpen));
        menuIcon.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    };

    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        isOpen = !isOpen;
        updateMenuState();
    });

    document.addEventListener('click', function(e) {
        if (isOpen && !e.target.closest('.bottom-nav')) {
            isOpen = false;
            updateMenuState();
        }
    });

    updateMenuState();
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
        const hasValue = field.value.trim();
        const isInvalid = !hasValue;

        field.setAttribute('aria-invalid', String(isInvalid));

        if (isInvalid) {
            isValid = false;
            field.style.borderColor = '#ff4444';
        } else {
            field.style.borderColor = '';
            field.removeAttribute('aria-invalid');
        }
    });

    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isInvalid = !emailRegex.test(emailField.value);

        emailField.setAttribute('aria-invalid', String(isInvalid));
        if (isInvalid) {
            isValid = false;
            emailField.style.borderColor = '#ff4444';
        } else {
            emailField.style.borderColor = '';
            emailField.removeAttribute('aria-invalid');
        }
    }

    const telField = form.querySelector('input[type="tel"]');
    if (telField && telField.value) {
        const telRegex = /^[\d\s\-\+\(\)]{10,}$/;
        const isInvalid = !telRegex.test(telField.value);

        telField.setAttribute('aria-invalid', String(isInvalid));
        if (isInvalid) {
            isValid = false;
            telField.style.borderColor = '#ff4444';
        } else {
            telField.style.borderColor = '';
            telField.removeAttribute('aria-invalid');
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
            const isErrorState = this.style.borderColor === 'rgb(255, 68, 68)';
            if (isErrorState) {
                this.style.borderColor = '';
                this.removeAttribute('aria-invalid');
            }
        });
    });
}
