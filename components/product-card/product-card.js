/**
 * Product Card Component
 * 
 * Handles product card interactions and dynamic rendering
 * Automatically navigates to product details page when clicked
 */

(function(global) {
  'use strict';

  /**
   * Navigate to product details page
   * @param {HTMLElement} card - The product card element
   */
  function navigateToProductDetails(card) {
    const productName = card.querySelector('.product-card__name')?.textContent || '';
    const ean = card.querySelector('.product-card__ean')?.textContent || '';
    const image = card.querySelector('.product-card__image')?.src || '';
    
    // Build URL parameters
    const params = new URLSearchParams({
      name: productName,
      ean: ean,
      image: image
    });
    
    // Navigate to product details page
    window.location.href = './product-details.html?' + params.toString();
  }

  /**
   * Initialize product cards with optional configuration
   * @param {Object} config - Configuration options
   * @param {Function} config.onClick - Custom callback when card is clicked (overrides default navigation)
   * @param {Function} config.onButtonClick - Callback when "Ver preço" button is clicked
   * @param {boolean} config.disableNavigation - Set to true to disable automatic navigation
   */
  function initProductCards(config) {
    config = config || {};
    var onClick = config.onClick || null;
    var onButtonClick = config.onButtonClick || null;
    var disableNavigation = config.disableNavigation || false;

    var productCards = document.querySelectorAll('.product-card');

    productCards.forEach(function(card) {
      // Skip if card already has click handler initialized
      if (card.dataset.initialized === 'true') {
        return;
      }
      card.dataset.initialized = 'true';

      // Handle card click
      card.addEventListener('click', function(e) {
        // Don't trigger card click if button was clicked
        if (e.target.classList.contains('product-card__button')) {
          return;
        }
        
        var productName = card.querySelector('.product-card__name');
        productName = productName ? productName.textContent : '';
        var ean = card.querySelector('.product-card__ean');
        ean = ean ? ean.textContent : '';
        
        // If custom onClick handler provided, use it
        if (onClick) {
          onClick({
            element: card,
            productName: productName,
            ean: ean,
            event: e
          });
        } else if (!disableNavigation) {
          // Default behavior: navigate to product details
          navigateToProductDetails(card);
        }
      });

      // Handle button click
      var button = card.querySelector('.product-card__button');
      if (button) {
        button.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent card click from firing
          
          var productName = card.querySelector('.product-card__name');
          productName = productName ? productName.textContent : '';
          var ean = card.querySelector('.product-card__ean');
          ean = ean ? ean.textContent : '';
          
          if (onButtonClick) {
            onButtonClick({
              element: card,
              button: button,
              productName: productName,
              ean: ean,
              event: e
            });
          } else {
            console.log('View price clicked for:', productName);
          }
        });
      }
    });
  }

  /**
   * Create a product card element dynamically
   * @param {Object} product - Product data
   * @param {string} product.name - Product name
   * @param {string} product.ean - Product EAN code
   * @param {string} product.image - Product image URL
   * @param {string} product.imageAlt - Product image alt text
   * @returns {HTMLElement} Product card element
   */
  function createProductCard(product) {
    var card = document.createElement('article');
    card.className = 'product-card';

    var imageContainer = document.createElement('div');
    imageContainer.className = 'product-card__image-container';

    var image = document.createElement('img');
    image.className = 'product-card__image';
    image.src = product.image;
    image.alt = product.imageAlt || product.name;

    imageContainer.appendChild(image);

    var info = document.createElement('div');
    info.className = 'product-card__info';

    var ean = document.createElement('span');
    ean.className = 'product-card__ean';
    ean.textContent = product.ean;

    var name = document.createElement('h3');
    name.className = 'product-card__name';
    name.textContent = product.name;

    info.appendChild(ean);
    info.appendChild(name);

    var button = document.createElement('button');
    button.className = 'product-card__button';
    button.textContent = 'Ver preço';

    card.appendChild(imageContainer);
    card.appendChild(info);
    card.appendChild(button);

    return card;
  }

  // Make functions available globally
  global.initProductCards = initProductCards;
  global.navigateToProductDetails = navigateToProductDetails;
  global.createProductCard = createProductCard;

})(typeof window !== 'undefined' ? window : this);
