/**
 * Footer Component JavaScript
 * 
 * Handles footer interactions and dynamic functionality.
 * Currently includes basic initialization, expandable for future features.
 */

class Footer {
  constructor(element) {
    this.footer = element;
    this.init();
  }

  /**
   * Initialize the footer component
   */
  init() {
    this.setupAccessibility();
    this.handleExternalLinks();
  }

  /**
   * Setup accessibility features
   */
  setupAccessibility() {
    const currentYear = new Date().getFullYear();
    
    // Add aria-current to current page links
    const currentPath = window.location.pathname;
    const links = this.footer.querySelectorAll('.footer__link');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.setAttribute('aria-current', 'page');
      }
    });
  }

  /**
   * Handle external links - open in new tab
   */
  handleExternalLinks() {
    const links = this.footer.querySelectorAll('.footer__link');
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      
      // Check if link is external
      if (href && (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:'))) {
        if (href.startsWith('http')) {
          link.setAttribute('target', '_blank');
          link.setAttribute('rel', 'noopener noreferrer');
        }
      }
    });
  }

  /**
   * Update footer content dynamically
   * @param {Object} data - Footer data object
   */
  updateContent(data) {
    if (!data) return;

    // Update links if data provided
    Object.keys(data).forEach(column => {
      const columnElement = this.footer.querySelector(`[data-column="${column}"]`);
      if (columnElement && data[column].links) {
        const linksList = columnElement.querySelector('.footer__links');
        if (linksList) {
          linksList.innerHTML = '';
          data[column].links.forEach(link => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = link.url;
            a.className = 'footer__link';
            a.textContent = link.text;
            li.appendChild(a);
            linksList.appendChild(li);
          });
        }
      }
    });

    // Re-initialize after content update
    this.init();
  }

  /**
   * Destroy the footer instance
   */
  destroy() {
    // Remove any event listeners if needed
    // Clean up
  }
}

// Auto-initialize all footers on page load
document.addEventListener('DOMContentLoaded', () => {
  const footers = document.querySelectorAll('.footer');
  footers.forEach(footer => {
    new Footer(footer);
  });
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Footer;
}
