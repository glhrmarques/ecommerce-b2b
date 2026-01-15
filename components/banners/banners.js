/**
 * Banners Component Script
 * 
 * Handles slideshow/carousel functionality for promotional banners
 */

/**
 * Initialize the banners component
 * @param {Object} options - Configuration options
 * @param {number} options.autoPlayInterval - Auto-play interval in milliseconds (default: 5000)
 * @param {boolean} options.autoPlay - Enable auto-play (default: true)
 */
export function initBanners(options = {}) {
  const {
    autoPlayInterval = 5000,
    autoPlay = true
  } = options;

  const banners = document.querySelector('.banners');
  if (!banners) {
    console.warn('Banners component not found');
    return;
  }

  const slides = banners.querySelectorAll('.banners__slide');
  const dots = banners.querySelectorAll('.banners__dot');
  const prevArrow = banners.querySelector('.banners__arrow--prev');
  const nextArrow = banners.querySelector('.banners__arrow--next');

  let currentSlide = 1;
  let autoPlayTimer = null;

  /**
   * Go to a specific slide
   * @param {number} slideNumber - The slide number (1-based index)
   */
  function goToSlide(slideNumber) {
    // Remove active class from all slides and dots
    slides.forEach(slide => {
      slide.classList.remove('banners__slide--active');
    });
    dots.forEach(dot => {
      dot.classList.remove('banners__dot--active');
      dot.setAttribute('aria-current', 'false');
    });

    // Add active class to target slide and dot
    const targetSlide = banners.querySelector(`.banners__slide[data-slide="${slideNumber}"]`);
    const targetDot = banners.querySelector(`.banners__dot[data-slide="${slideNumber}"]`);

    if (targetSlide) {
      targetSlide.classList.add('banners__slide--active');
    }

    if (targetDot) {
      targetDot.classList.add('banners__dot--active');
      targetDot.setAttribute('aria-current', 'true');
    }

    currentSlide = slideNumber;

    // Reset auto-play timer
    if (autoPlay) {
      resetAutoPlay();
    }
  }

  /**
   * Go to the next slide
   */
  function nextSlide() {
    const next = currentSlide === slides.length ? 1 : currentSlide + 1;
    goToSlide(next);
  }

  /**
   * Go to the previous slide
   */
  function prevSlide() {
    const prev = currentSlide === 1 ? slides.length : currentSlide - 1;
    goToSlide(prev);
  }

  /**
   * Start auto-play
   */
  function startAutoPlay() {
    if (autoPlay && autoPlayInterval > 0) {
      autoPlayTimer = setInterval(nextSlide, autoPlayInterval);
    }
  }

  /**
   * Stop auto-play
   */
  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  /**
   * Reset auto-play timer
   */
  function resetAutoPlay() {
    stopAutoPlay();
    startAutoPlay();
  }

  // Event listeners for dots
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const slideNumber = parseInt(dot.getAttribute('data-slide'));
      goToSlide(slideNumber);
    });
  });

  // Event listeners for arrows
  if (prevArrow) {
    prevArrow.addEventListener('click', prevSlide);
  }

  if (nextArrow) {
    nextArrow.addEventListener('click', nextSlide);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      prevSlide();
    } else if (e.key === 'ArrowRight') {
      nextSlide();
    }
  });

  // Pause auto-play on hover
  banners.addEventListener('mouseenter', stopAutoPlay);
  banners.addEventListener('mouseleave', startAutoPlay);

  // Touch/swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  banners.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    stopAutoPlay();
  });

  banners.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoPlay();
  });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - go to next slide
        nextSlide();
      } else {
        // Swipe right - go to previous slide
        prevSlide();
      }
    }
  }

  // Start auto-play
  startAutoPlay();

  // Return control methods for external use
  return {
    goToSlide,
    nextSlide,
    prevSlide,
    startAutoPlay,
    stopAutoPlay
  };
}
