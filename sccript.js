// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website initialization started');
    
    // ========== MOBILE NAVIGATION ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && navMenu) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // ========== HERO SLIDER (FULLY FIXED) ==========
    console.log('Initializing Hero Slider');
    const heroSlides = document.querySelectorAll('.hero .slide');
    const heroDots = document.querySelectorAll('.slider-dots .dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentHeroSlide = 0;
    let heroTimer;
    
    function showHeroSlide(index) {
        // Hide all slides
        heroSlides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active from all dots
        heroDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Set new index with bounds checking
        currentHeroSlide = index;
        if (currentHeroSlide >= heroSlides.length) currentHeroSlide = 0;
        if (currentHeroSlide < 0) currentHeroSlide = heroSlides.length - 1;
        
        // Show current slide and activate dot
        heroSlides[currentHeroSlide].classList.add('active');
        if (heroDots[currentHeroSlide]) {
            heroDots[currentHeroSlide].classList.add('active');
        }
    }
    
    function nextHeroSlide() {
        showHeroSlide(currentHeroSlide + 1);
    }
    
    function prevHeroSlide() {
        showHeroSlide(currentHeroSlide - 1);
    }
    
    function startHeroSlider() {
        clearInterval(heroTimer);
        heroTimer = setInterval(nextHeroSlide, 4000);
    }
    
    // Initialize hero slider
    if (heroSlides.length > 0) {
        console.log(`Found ${heroSlides.length} hero slides`);
        
        // Show first slide
        showHeroSlide(0);
        
        // Start auto slide
        startHeroSlider();
        
        // Add event listeners
        if (nextBtn) {
            nextBtn.addEventListener('click', function() {
                nextHeroSlide();
                clearInterval(heroTimer);
                setTimeout(startHeroSlider, 10000);
            });
        }
        
        if (prevBtn) {
            prevBtn.addEventListener('click', function() {
                prevHeroSlide();
                clearInterval(heroTimer);
                setTimeout(startHeroSlider, 10000);
            });
        }
        
        // Dot navigation
        heroDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showHeroSlide(index);
                clearInterval(heroTimer);
                setTimeout(startHeroSlider, 10000);
            });
        });
    }
    
    // ========== TESTIMONIAL SLIDER (FULLY FIXED) ==========
    console.log('Initializing Testimonial Slider');
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const testimonialDots = document.querySelectorAll('.t-dot');
    const tPrevBtn = document.querySelector('.testimonial-prev');
    const tNextBtn = document.querySelector('.testimonial-next');
    
    let currentTestimonial = 0;
    let testimonialTimer;
    
    function showTestimonial(index) {
        // Hide all testimonials
        testimonialCards.forEach(card => {
            card.classList.remove('active');
            card.style.display = 'none';
        });
        
        // Remove active from all dots
        testimonialDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Set new index with bounds checking
        currentTestimonial = index;
        if (currentTestimonial >= testimonialCards.length) currentTestimonial = 0;
        if (currentTestimonial < 0) currentTestimonial = testimonialCards.length - 1;
        
        // Show current testimonial and activate dot
        testimonialCards[currentTestimonial].classList.add('active');
        testimonialCards[currentTestimonial].style.display = 'block';
        
        if (testimonialDots[currentTestimonial]) {
            testimonialDots[currentTestimonial].classList.add('active');
        }
    }
    
    function nextTestimonial() {
        showTestimonial(currentTestimonial + 1);
    }
    
    function prevTestimonial() {
        showTestimonial(currentTestimonial - 1);
    }
    
    function startTestimonialSlider() {
        clearInterval(testimonialTimer);
        testimonialTimer = setInterval(nextTestimonial, 5000);
    }
    
    // Initialize testimonial slider
    if (testimonialCards.length > 0) {
        console.log(`Found ${testimonialCards.length} testimonials`);
        
        // Show first testimonial
        showTestimonial(0);
        
        // Start auto slide
        startTestimonialSlider();
        
        // Add event listeners
        if (tNextBtn) {
            tNextBtn.addEventListener('click', function() {
                nextTestimonial();
                clearInterval(testimonialTimer);
                setTimeout(startTestimonialSlider, 10000);
            });
        }
        
        if (tPrevBtn) {
            tPrevBtn.addEventListener('click', function() {
                prevTestimonial();
                clearInterval(testimonialTimer);
                setTimeout(startTestimonialSlider, 10000);
            });
        }
        
        // Dot navigation
        testimonialDots.forEach((dot, index) => {
            dot.addEventListener('click', function() {
                showTestimonial(index);
                clearInterval(testimonialTimer);
                setTimeout(startTestimonialSlider, 10000);
            });
        });
    }
    
    // ========== ANIMATED COUNTERS (FULLY FIXED) ==========
    console.log('Setting up animated counters');
    
    const statNumbers = document.querySelectorAll('.stat-number');
    let countersAnimated = false;
    
    // Function to animate counter
    function animateCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000; // 2 seconds
        const frameDuration = 1000 / 60; // 60fps
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;
        
        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentValue = Math.round(target * progress);
            
            if (element.getAttribute('data-count') === '98') {
                element.textContent = currentValue + '%';
            } else {
                element.textContent = currentValue + '+';
            }
            
            if (frame === totalFrames) {
                clearInterval(counter);
                if (element.getAttribute('data-count') === '98') {
                    element.textContent = target + '%';
                } else {
                    element.textContent = target + '+';
                }
            }
        }, frameDuration);
    }
    
    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Initialize counters when section enters viewport
    function checkAndAnimateCounters() {
        const statsSection = document.querySelector('.why-us');
        
        if (statsSection && !countersAnimated) {
            if (isElementInViewport(statsSection)) {
                console.log('Why Choose Us section in viewport - animating counters');
                countersAnimated = true;
                
                statNumbers.forEach((statNumber, index) => {
                    setTimeout(() => {
                        animateCounter(statNumber);
                    }, index * 300); // Stagger animations
                });
            }
        }
    }
    
    // Check on scroll and on load
    window.addEventListener('scroll', checkAndAnimateCounters);
    window.addEventListener('load', checkAndAnimateCounters);
    
    // Initial check
    setTimeout(checkAndAnimateCounters, 500);
    
    // ========== PROJECT FILTERING (FULLY FIXED) ==========
    console.log('Setting up project filtering');
    
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    function filterProjects(category) {
        console.log(`Filtering by: ${category}`);
        
        projectCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                // Trigger reflow for animation
                void card.offsetWidth;
                card.style.opacity = '1';
                card.style.transform = 'scale(1)';
                card.classList.remove('hidden');
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                    card.classList.add('hidden');
                }, 300);
            }
        });
    }
    
    // Initialize project filter
    if (filterButtons.length > 0 && projectCards.length > 0) {
        console.log(`Found ${filterButtons.length} filter buttons and ${projectCards.length} project cards`);
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value and apply filter
                const filterValue = this.getAttribute('data-filter');
                filterProjects(filterValue);
            });
        });
        
        // Set initial state
        filterProjects('all');
    }
    
    // ========== SMOOTH SCROLLING ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                // Calculate position
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Smooth scroll
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========== FORM HANDLING ==========
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const service = document.getElementById('service').value;
            
            // Simple validation
            if (!name || !email || !service) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Show success message
            alert(`Thank you ${name}! Your consultation request for ${service} has been received. We will contact you at ${email} shortly.`);
            
            // Reset form
            contactForm.reset();
        });
    }
    
    // Newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value && emailInput.value.includes('@')) {
                alert(`Thank you for subscribing with ${emailInput.value}! You'll receive our design updates.`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('glass-header');
            } else {
                header.classList.remove('glass-header');
            }
        });
        
        // Initial check
        if (window.scrollY > 100) {
            header.classList.add('glass-header');
        }
    }
    
    // ========== WHATSAPP BUTTON ==========
    const whatsappButton = document.getElementById('whatsapp-button');
    
    if (whatsappButton) {
        whatsappButton.addEventListener('mouseenter', () => {
            whatsappButton.style.animation = 'none';
            setTimeout(() => {
                whatsappButton.style.animation = 'float 3s ease-in-out infinite';
            }, 10);
        });
    }
    
    console.log('Website initialization complete');
});

// Fallback for browsers without console
if (typeof console === "undefined") {
    console = {
        log: function() {},
        error: function() {},
        warn: function() {}
    };
}