document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    
    let currentIndex = 2; // Starting with the green card (middle slide)
    let slideWidth = 600; // Default width of each slide
    const slideGap = 20; // Gap between slides

    // Function to update slide width based on viewport size
    function updateSlideWidth() {
        if (window.innerWidth <= 576) {
            slideWidth = 350; // Width of each slide for small screens
        } else {
            slideWidth = 600; // Default width for larger screens
        }
        calculateTrackWidth(); // Recalculate track width after updating slide width
    }
    
    // Initialize the carousel
    function initializeCarousel() {
        updateSlideWidth(); // Set initial slide width
        centerActiveSlide(false);
        updateActiveStates();
        
        // Handle window resize
        window.addEventListener('resize', () => {
            updateSlideWidth();
            centerActiveSlide(false);
        });
    }
    
    // Calculate track width
    function calculateTrackWidth() {
        const totalWidth = slides.length * slideWidth + (slides.length - 1) * slideGap;
        track.style.width = `${totalWidth}px`;
    }
    
    // Center the active slide
    function centerActiveSlide(animate = true) {
        const wrapperWidth = carouselWrapper.offsetWidth;
        const centerPosition = (wrapperWidth - slideWidth) / 2;
        const slidePosition = currentIndex * (slideWidth + slideGap);
        const translateX = centerPosition - slidePosition;
        
        if (!animate) {
            track.style.transition = 'none';
            requestAnimationFrame(() => {
                track.style.transform = `translateX(${translateX}px)`;
                requestAnimationFrame(() => {
                    track.style.transition = 'transform 0.5s ease-in-out';
                });
            });
        } else {
            track.style.transform = `translateX(${translateX}px)`;
        }
    }
    
    // Update active states
    function updateActiveStates() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
    
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    
        // Add "active" class to the card in the active slide
        document.querySelectorAll('.testimonial-card').forEach((card, index) => {
            card.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Move to slide
    function moveToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        currentIndex = index;
        centerActiveSlide();
        updateActiveStates();
    }
    
    // Next slide
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });
    
    // Previous slide
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
    
    // Indicator click
    indicators.forEach((indicator) => {
        indicator.addEventListener('click', () => {
            const slideIndex = parseInt(indicator.getAttribute('data-index'));
            moveToSlide(slideIndex);
        });
    });
    
    // Auto-advance the carousel every 5 seconds
    let autoplayInterval = setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
    
    // Pause autoplay on hover
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.addEventListener('mouseenter', () => {
        clearInterval(autoplayInterval);
    });
    
    carouselContainer.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 5000);
    });
    
    // Swipe functionality for touch devices
    let touchStartX = 0;
    let touchEndX = 0;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left
            moveToSlide(currentIndex + 1);
        } else if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right
            moveToSlide(currentIndex - 1);
        }
    }
    
    // Initialize
    initializeCarousel();
});
