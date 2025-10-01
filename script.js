// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const initialTheme = savedTheme || systemTheme;
    
    applyTheme(initialTheme);
    updateThemeIcon(initialTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
            updateThemeIcon(e.matches ? 'dark' : 'light');
        }
    });
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.getElementById('theme-icon');
    if (theme === 'dark') {
        themeIcon.innerHTML = `
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        `;
    } else {
        themeIcon.innerHTML = `
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        `;
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    applyTheme(newTheme);
    updateThemeIcon(newTheme);
    localStorage.setItem('theme', newTheme);
}

// Role rotation in hero section
function initializeRoleRotation() {
    const roles = ['Founder', 'Developer', 'Coach', 'Educator'];
    const roleElement = document.getElementById('rotating-role');
    let currentIndex = 0;
    
    function rotateRole() {
        // Fade out
        roleElement.style.opacity = '0';
        roleElement.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % roles.length;
            roleElement.textContent = roles[currentIndex];
            
            // Fade in
            roleElement.style.opacity = '1';
            roleElement.style.transform = 'translateY(0)';
        }, 250);
    }
    
    // Start rotation
    setInterval(rotateRole, 3000);
}

// Work section role switching
function initializeWorkSection() {
    const roleCards = document.querySelectorAll('.role-card');
    const roleDetails = document.querySelectorAll('.role-detail');
    
    roleCards.forEach(card => {
        card.addEventListener('click', () => {
            const role = card.getAttribute('data-role');
            
            // Remove active class from all cards and details
            roleCards.forEach(c => c.classList.remove('active'));
            roleDetails.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked card and corresponding detail
            card.classList.add('active');
            const targetDetail = document.querySelector(`.role-detail[data-role="${role}"]`);
            if (targetDetail) {
                targetDetail.classList.add('active');
            }
        });
    });
}

// Smooth scrolling
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Intersection Observer for scroll animations
function initializeScrollAnimations() {
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
    
    // Observe elements that should animate on scroll
    const animatedElements = document.querySelectorAll(`
        .role-card,
        .project-card,
        .skill-category,
        .cert-card,
        .contact-card
    `);
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Theme toggle with 'T' key
        if (e.key === 't' || e.key === 'T') {
            if (!e.ctrlKey && !e.metaKey) {
                toggleTheme();
            }
        }
        
        // Section navigation with number keys
        const sectionMap = {
            '1': 'hero',
            '2': 'work',
            '3': 'projects',
            '4': 'skills',
            '5': 'contact'
        };
        
        if (sectionMap[e.key]) {
            scrollToSection(sectionMap[e.key]);
        }
    });
}

// Handle contact card clicks
function initializeClickHandlers() {
    // Contact cards
    document.querySelectorAll('.contact-card').forEach(card => {
        card.addEventListener('click', (e) => {
            // Prevent event from firing twice if button inside card is clicked
            if (e.target.tagName === 'BUTTON') return;
            
            const cardText = card.innerHTML;
            if (cardText.includes('Professional Inquiries')) {
                window.open('mailto:hello@scottkirker.com', '_blank');
            } else if (cardText.includes('LinkedIn')) {
                window.open('https://www.linkedin.com/in/scottkirker/', '_blank');
            } else if (cardText.includes('Life Coaching')) {
                window.open('mailto:coaching@scottkirker.com', '_blank');
            } else if (cardText.includes('Speaking')) {
                window.open('mailto:speaking@scottkirker.com', '_blank');
            }
        });
    });
}

// Add loading state management
function initializeLoadingStates() {
    // Add loading class to external link buttons
    document.querySelectorAll('button[onclick*="window.open"], .project-btn, .contact-action').forEach(btn => {
        btn.addEventListener('click', function() {
            const originalText = this.textContent;
            this.textContent = 'Opening...';
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        });
    });
}

// Handle reduced motion preference
function respectReducedMotion() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        // Disable animations
        document.body.style.setProperty('--transition', 'none');
        
        // Remove scroll behavior
        document.documentElement.style.scrollBehavior = 'auto';
        
        // Stop role rotation
        clearInterval(window.roleRotationInterval);
    }
}

// Error handling for external resources
function initializeErrorHandling() {
    // Handle image loading errors
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn('Failed to load image:', this.src);
        });
    });
    
    // Handle font loading
    if ('fonts' in document) {
        document.fonts.ready.then(() => {
            document.body.classList.add('fonts-loaded');
        });
    }
}

// Performance optimization
function initializePerformanceOptimizations() {
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Prefetch important links
    const importantLinks = [
        'https://grativerse.io/',
        'https://utlimate.ly/',
        'https://www.linkedin.com/in/scottkirker/'
    ];
    
    importantLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeRoleRotation();
    initializeWorkSection();
    initializeScrollAnimations();
    initializeKeyboardNavigation();
    initializeClickHandlers();
    initializeLoadingStates();
    respectReducedMotion();
    initializeErrorHandling();
    initializePerformanceOptimizations();
    
    // Add theme toggle event listener
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    
    console.log('Scott Kirker\'s website initialized successfully! 🚀');
});

// Handle window resize
window.addEventListener('resize', function() {
    // Recalculate any viewport-dependent calculations
    // This is where you'd add any resize-specific logic
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.visibilityState === 'visible') {
        // Page became visible - resume any paused activities
    } else {
        // Page became hidden - pause any intensive activities
    }
});

// Export functions for testing or external use
window.ScottKirkerSite = {
    toggleTheme,
    scrollToSection,
    applyTheme
};