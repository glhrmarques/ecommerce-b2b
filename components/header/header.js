/**
 * Header Component
 * 
 * A reusable header component that can be initialized on any page.
 * 
 * Usage:
 *   import { initHeader } from './components/header/header.js';
 *   initHeader({ activeNavItem: 'produtos' });
 */

/**
 * Initialize the header component
 * @param {Object} options - Configuration options
 * @param {string} options.activeNavItem - The active navigation item ID
 * @param {Function} options.onSearch - Callback when search is triggered
 */
export function initHeader(options = {}) {
  const {
    activeNavItem = null,
    onSearch = null
  } = options;

  // Set active navigation item
  if (activeNavItem) {
    const activeLink = document.querySelector(`[data-nav-item="${activeNavItem}"]`);
    if (activeLink) {
      activeLink.classList.add('header__nav-link--active');
    }
  }

  // Handle search functionality
  const searchInput = document.querySelector('.header__search-input');
  const searchForm = document.querySelector('.header__search-container');
  
  if (searchForm && searchInput) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = searchInput.value.trim();
      
      if (query && onSearch) {
        onSearch(query);
      }
    });

    // Optional: Search on Enter key
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const query = searchInput.value.trim();
        
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
  const navLinks = document.querySelectorAll('.header__nav-link');
  
  navLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
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
export function setActiveNavItem(itemId) {
  // Remove active class from all items
  const allLinks = document.querySelectorAll('.header__nav-link');
  allLinks.forEach(link => link.classList.remove('header__nav-link--active'));
  
  // Add active class to specified item
  const activeLink = document.querySelector(`[data-nav-item="${itemId}"]`);
  if (activeLink) {
    activeLink.classList.add('header__nav-link--active');
  }
}
