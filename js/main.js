// Main JavaScript file for Ashley Lee Portfolio
// Enhanced with mobile menu and accessibility features

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Initialize all features
    initMobileMenu();
    initSmoothScrolling();
    initCardAnimations();
    initSkipNavigation();
    initFocusManagement();
    initPrintStyles();
    initActiveSectionIndicator();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (!mobileMenuButton || !mobileMenu) return;
    
    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        
        if (isExpanded) {
            mobileMenu.style.display = 'none';
        } else {
            mobileMenu.style.display = 'block';
        }
        
        // Update button icon
        const svg = this.querySelector('svg');
        if (isExpanded) {
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        } else {
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
        }
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target) && mobileMenu.style.display !== 'none') {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.style.display = 'none';
            const svg = mobileMenuButton.querySelector('svg');
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
    });
    
    // Close mobile menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.style.display !== 'none') {
            mobileMenuButton.setAttribute('aria-expanded', 'false');
            mobileMenu.style.display = 'none';
            mobileMenuButton.focus();
            const svg = mobileMenuButton.querySelector('svg');
            svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
        }
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Close mobile menu if open
                const mobileMenu = document.querySelector('.md\\:hidden.absolute.top-full');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    const mobileButton = document.querySelector('button[aria-expanded="true"]');
                    if (mobileButton) {
                        mobileButton.click();
                    }
                }
                
                // Smooth scroll to target
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update focus for accessibility
                setTimeout(() => {
                    targetElement.focus({ preventScroll: true });
                }, 500);
            }
        });
    });
}

// Enhanced Card Animations
function initCardAnimations() {
    const cards = document.querySelectorAll('article');
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply initial styles and observe
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
        
        observer.observe(card);
    });
}

// Skip Navigation Enhancement
function initSkipNavigation() {
    const skipLink = document.querySelector('a[href="#main-content"]');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.getElementById('main-content');
            if (target) {
                target.focus();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
}

// Focus Management
function initFocusManagement() {
    // Trap focus in mobile menu when open
    const mobileMenu = document.querySelector('.md\\:hidden.absolute.top-full');
    if (mobileMenu) {
        const focusableElements = mobileMenu.querySelectorAll('a, button');
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        mobileMenu.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        });
    }
    
    // Announce page changes for screen readers
    const sections = document.querySelectorAll('section[id]');
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.className = 'sr-only';
    document.body.appendChild(announcer);
    
    // Update announcement when scrolling to sections
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionName = entry.target.querySelector('h1, h2')?.textContent || 'Section';
                announcer.textContent = `Now viewing: ${sectionName}`;
            }
        });
    }, { threshold: 0.5 });
    
    sections.forEach(section => sectionObserver.observe(section));
}

// Print Styles Enhancement
function initPrintStyles() {
    // Add print button
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.className = 'hidden print:block fixed top-4 right-4 bg-brand-700 text-white px-4 py-2 rounded-lg hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2';
    printButton.addEventListener('click', () => window.print());
    
    // Add print styles
    const printStyles = document.createElement('style');
    printStyles.textContent = `
        @media print {
            .no-print { display: none !important; }
            body { font-size: 12pt; line-height: 1.4; }
            h1, h2, h3 { page-break-after: avoid; }
            article { page-break-inside: avoid; }
            a[href]:after { content: " (" attr(href) ")"; }
        }
    `;
    document.head.appendChild(printStyles);
    document.body.appendChild(printButton);
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Performance optimization
const debouncedResize = debounce(() => {
    // Handle resize events if needed
    console.log('Window resized');
}, 250);

window.addEventListener('resize', debouncedResize);

// Active Section Indicator
function initActiveSectionIndicator() {
    const sections = [...document.querySelectorAll('section[id]')];
    const navLinks = [...document.querySelectorAll('header nav a[href^="#"]')];
    
    if (sections.length === 0 || navLinks.length === 0) return;
    
    const map = new Map(navLinks.map(a => [a.getAttribute('href').slice(1), a]));
    
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active classes from all nav links
                navLinks.forEach(a => {
                    a.classList.remove('text-brand-700', 'font-semibold');
                    a.classList.add('text-slate-700');
                });
                
                // Add active class to current section's nav link
                const link = map.get(entry.target.id);
                if (link) {
                    link.classList.remove('text-slate-700');
                    link.classList.add('text-brand-700', 'font-semibold');
                }
                
                // Special handling for About section - highlight both About and Contact links
                if (entry.target.id === 'about') {
                    const aboutLink = map.get('about');
                    const contactLink = document.querySelector('a[aria-label="Contact Ashley"]');
                    if (aboutLink) {
                        aboutLink.classList.remove('text-slate-700');
                        aboutLink.classList.add('text-brand-700', 'font-semibold');
                    }
                    if (contactLink) {
                        contactLink.classList.remove('text-slate-700');
                        contactLink.classList.add('text-brand-700', 'font-semibold');
                    }
                }
            }
        });
    }, { 
        rootMargin: "-40% 0px -55% 0px", 
        threshold: 0.01 
    });
    
    sections.forEach(section => io.observe(section));
}
