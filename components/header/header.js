/**
 * Header Component
 * 
 * A reusable header component that can be initialized on any page.
 * 
 * Usage:
 *   initHeader({ activeNavItem: 'produtos' });
 */

(function(global) {
  'use strict';

/**
 * Initialize the header component
 * @param {Object} options - Configuration options
 * @param {string} options.activeNavItem - The active navigation item ID
 * @param {Function} options.onSearch - Callback when search is triggered
 */
function initHeader(options) {
  options = options || {};
  var activeNavItem = options.activeNavItem || null;
  var onSearch = options.onSearch || null;

  // Set active navigation item
  if (activeNavItem) {
    var activeLink = document.querySelector('[data-nav-item="' + activeNavItem + '"]');
    if (activeLink) {
      activeLink.classList.add('header__nav-link--active');
    }
  }

  // Handle search functionality
  var searchInput = document.querySelector('.header__search-input');
  var searchForm = document.querySelector('.header__search-container');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var query = searchInput.value.trim();
      
      if (query && onSearch) {
        onSearch(query);
      }
    });

    // Optional: Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        var query = searchInput.value.trim();
        
        if (query && onSearch) {
          onSearch(query);
        }
      }
    });
  }

  // Add keyboard navigation for accessibility
  enhanceAccessibility();
}

/**
 * Enhance accessibility features
 */
function enhanceAccessibility() {
  var navLinks = document.querySelectorAll('.header__nav-link');
  
  navLinks.forEach(function(link) {
    link.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        link.click();
      }
    });
  });
}

/**
 * Set the active navigation item programmatically
 * @param {string} itemId - The navigation item ID
 */
function setActiveNavItem(itemId) {
  // Remove active class from all items
  var allLinks = document.querySelectorAll('.header__nav-link');
  allLinks.forEach(function(link) {
    link.classList.remove('header__nav-link--active');
  });
  
  // Add active class to specified item
  var activeLink = document.querySelector('[data-nav-item="' + itemId + '"]');
  if (activeLink) {
    activeLink.classList.add('header__nav-link--active');
  }
}

  // Make functions available globally
  global.initHeader = initHeader;
  global.setActiveNavItem = setActiveNavItem;

})(typeof window !== 'undefined' ? window : this);
