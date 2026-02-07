// ==========================================
// LENSKART CLONE - JAVASCRIPT INTERACTIVITY
// ==========================================
// This file implements 7 JavaScript features:
// 1. Button Click Interaction (Modal & Alerts)
// 2. Form Validation (Login & Newsletter)
// 3. Dynamic Content Change (Theme Toggle)
// 4. Show/Hide Sections (Login Modal)
// 5. Interactive Navigation (Active Menu & Smooth Scroll)
// 6. Image Gallery/Slider (Hero Slider)
// 7. Local Storage (Theme Preference)
// ==========================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // FEATURE 1: BUTTON CLICK INTERACTION
    // ==========================================
    // Show modal when "Account" button is clicked
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    
    // Open login modal
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.classList.add('show');
        console.log('Login modal opened');
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        loginModal.classList.remove('show');
        console.log('Login modal closed');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });
    
    // Try Now button interaction - Show alert
    const tryOnBtn = document.getElementById('tryOnBtn');
    tryOnBtn.addEventListener('click', function() {
        showSuccessMessage('Virtual Try-On feature will be available soon! Stay tuned.');
        console.log('Try-On button clicked');
    });
    
    // ==========================================
    // FEATURE 2: FORM VALIDATION
    // ==========================================
    
    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Newsletter Form Validation
    const newsletterForm = document.getElementById('newsletterForm');
    const emailInput = document.getElementById('emailInput');
    const emailError = document.getElementById('emailError');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error message
        emailError.textContent = '';
        
        // Get email value
        const email = emailInput.value.trim();
        
        // Validate email
        if (email === '') {
            emailError.textContent = 'Email address is required';
            emailInput.focus();
            return false;
        }
        
        if (!emailPattern.test(email)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.focus();
            return false;
        }
        
        // Success - show message and reset form
        showSuccessMessage('Thank you for subscribing! Check your email for exclusive offers.');
        newsletterForm.reset();
        console.log('Newsletter subscription successful:', email);
    });
    
    // Login Form Validation
    const loginForm = document.getElementById('loginForm');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const loginEmailError = document.getElementById('loginEmailError');
    const loginPasswordError = document.getElementById('loginPasswordError');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset error messages
        loginEmailError.textContent = '';
        loginPasswordError.textContent = '';
        
        let isValid = true;
        
        // Validate email
        const email = loginEmail.value.trim();
        if (email === '') {
            loginEmailError.textContent = 'Email is required';
            isValid = false;
        } else if (!emailPattern.test(email)) {
            loginEmailError.textContent = 'Invalid email format';
            isValid = false;
        }
        
        // Validate password
        const password = loginPassword.value.trim();
        if (password === '') {
            loginPasswordError.textContent = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            loginPasswordError.textContent = 'Password must be at least 6 characters';
            isValid = false;
        }
        
        // If valid, proceed
        if (isValid) {
            showSuccessMessage('Login successful! Welcome back.');
            loginModal.classList.remove('show');
            loginForm.reset();
            console.log('Login successful for:', email);
        }
    });
    
    // ==========================================
    // FEATURE 3: DYNAMIC CONTENT CHANGE (DOM MANIPULATION)
    // ==========================================
    // Theme Toggle - Light/Dark Mode
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    // Load theme preference from local storage
    loadThemePreference();
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Change icon
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            saveThemePreference('dark');
            console.log('Switched to dark theme');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            saveThemePreference('light');
            console.log('Switched to light theme');
        }
    });
    
    // ==========================================
    // FEATURE 4: SHOW/HIDE SECTIONS
    // ==========================================
    // Modal visibility is already handled in Feature 1
    // Additionally implemented: Wishlist toggle
    
    const wishlistButtons = document.querySelectorAll('.product-wishlist');
    
    wishlistButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const icon = this.querySelector('i');
            
            // Toggle heart icon
            if (icon.classList.contains('far')) {
                icon.classList.remove('far');
                icon.classList.add('fas');
                this.classList.add('active');
                console.log('Added to wishlist');
            } else {
                icon.classList.remove('fas');
                icon.classList.add('far');
                this.classList.remove('active');
                console.log('Removed from wishlist');
            }
        });
    });
    
    // ==========================================
    // FEATURE 5: INTERACTIVE NAVIGATION
    // ==========================================
    
    // Highlight active menu item and smooth scroll
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Remove active class from all links
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Smooth scroll to section if it has a hash
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    console.log('Scrolled to section:', href);
                }
            }
        });
    });
    
    // Sticky header behavior on scroll
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ==========================================
    // FEATURE 6: IMAGE GALLERY / SLIDER
    // ==========================================
    
    let currentSlideIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.getElementById('prevSlide');
    const nextButton = document.getElementById('nextSlide');
    
    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        dots.forEach(function(dot) {
            dot.classList.remove('active');
        });
        
        // Handle index wrapping
        if (index >= slides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = slides.length - 1;
        } else {
            currentSlideIndex = index;
        }
        
        // Add active class to current slide and dot
        slides[currentSlideIndex].classList.add('active');
        dots[currentSlideIndex].classList.add('active');
        
        console.log('Showing slide:', currentSlideIndex + 1);
    }
    
    // Next slide button
    nextButton.addEventListener('click', function() {
        showSlide(currentSlideIndex + 1);
    });
    
    // Previous slide button
    prevButton.addEventListener('click', function() {
        showSlide(currentSlideIndex - 1);
    });
    
    // Dot navigation
    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            const slideIndex = parseInt(this.getAttribute('data-slide'));
            showSlide(slideIndex);
        });
    });
    
    // Auto-play slider every 5 seconds
    let autoPlayInterval = setInterval(function() {
        showSlide(currentSlideIndex + 1);
    }, 5000);
    
    // Pause auto-play on hover
    const heroSlider = document.getElementById('heroSlider');
    heroSlider.addEventListener('mouseenter', function() {
        clearInterval(autoPlayInterval);
        console.log('Slider auto-play paused');
    });
    
    heroSlider.addEventListener('mouseleave', function() {
        autoPlayInterval = setInterval(function() {
            showSlide(currentSlideIndex + 1);
        }, 5000);
        console.log('Slider auto-play resumed');
    });
    
    // ==========================================
    // FEATURE 7: LOCAL STORAGE (BONUS)
    // ==========================================
    
    // Save theme preference to local storage
    function saveThemePreference(theme) {
        localStorage.setItem('lenskartTheme', theme);
        console.log('Theme preference saved:', theme);
    }
    
    // Load theme preference from local storage
    function loadThemePreference() {
        const savedTheme = localStorage.getItem('lenskartTheme');
        const icon = themeToggle.querySelector('i');
        
        if (savedTheme === 'dark') {
            body.classList.add('dark-theme');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            console.log('Loaded dark theme from storage');
        } else {
            body.classList.remove('dark-theme');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            console.log('Loaded light theme from storage');
        }
    }
    
    // Track visit count (bonus feature)
    let visitCount = parseInt(localStorage.getItem('lenskartVisits') || '0');
    visitCount++;
    localStorage.setItem('lenskartVisits', visitCount);
    console.log('Visit count:', visitCount);
    
    // ==========================================
    // ADDITIONAL FEATURES
    // ==========================================
    
    // Cart count management
    let cartCount = 0; // Start with empty cart
    
    // Add to Cart button interaction
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartBadge = document.querySelector('.cart-badge');
    
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.background = '#4caf50';
            
            // Increment cart count
            cartCount++;
            updateCartBadge();
            
            // Show success message
            showSuccessMessage('Product added to cart successfully!');
            
            // Reset button after 1.5 seconds
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = '';
            }, 1500);
            
            console.log('Product added to cart. Total items:', cartCount);
        });
    });
    
    // Function to update cart badge
    function updateCartBadge() {
        // Create or update the badge number
        const badge = cartBadge.querySelector('.cart-count') || createCartBadge();
        badge.textContent = cartCount;
        
        // Add animation
        badge.style.transform = 'scale(1.3)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Function to create cart badge element
    function createCartBadge() {
        const badge = document.createElement('span');
        badge.className = 'cart-count';
        badge.textContent = cartCount;
        cartBadge.appendChild(badge);
        return badge;
    }
    
    // ==========================================
    // UTILITY FUNCTIONS
    // ==========================================
    
    // Show success message
    function showSuccessMessage(message) {
        const successMessage = document.getElementById('successMessage');
        const successText = document.getElementById('successText');
        
        successText.textContent = message;
        successMessage.classList.add('show');
        
        // Hide after 3 seconds
        setTimeout(function() {
            successMessage.classList.remove('show');
        }, 3000);
    }
    
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    console.log('='.repeat(50));
    console.log('Lenskart Clone - All JavaScript features loaded successfully!');
    console.log('Features implemented:');
    console.log('1. ✓ Button Click Interaction');
    console.log('2. ✓ Form Validation');
    console.log('3. ✓ Dynamic Content Change (Theme Toggle)');
    console.log('4. ✓ Show/Hide Sections');
    console.log('5. ✓ Interactive Navigation');
    console.log('6. ✓ Image Gallery/Slider');
    console.log('7. ✓ Local Storage (Bonus)');
    console.log('='.repeat(50));
});
