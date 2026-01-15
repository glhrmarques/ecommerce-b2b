/**
 * Product Card Component
 * 
 * Handles product card interactions and dynamic rendering
 */

/**
 * Initialize product cards with optional configuration
 * @param {Object} config - Configuration options
 * @param {Function} config.onClick - Callback when card is clicked
 * @param {Function} config.onButtonClick - Callback when "Ver preço" button is clicked
 */
export function initProductCards(config = {}) {
  const {
    onClick = null,
    onButtonClick = null
  } = config;

  const productCards = document.querySelectorAll('.product-card');

  productCards.forEach(card => {
    // Handle card click
    if (onClick) {
      card.addEventListener('click', (e) => {
        // Don't trigger card click if button was clicked
        if (e.target.classList.contains('product-card__button')) {
          return;
        }
        
        const productName = card.querySelector('.product-card__name')?.textContent;
        const ean = card.querySelector('.product-card__ean')?.textContent;
        
        onClick({
          element: card,
          productName,
          ean,
          event: e
        });
      });
    }

    // Handle button click
    const button = card.querySelector('.product-card__button');
    if (button && onButtonClick) {
      button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent card click from firing
        
        const productName = card.querySelector('.product-card__name')?.textContent;
        const ean = card.querySelector('.product-card__ean')?.textContent;
        
        onButtonClick({
          element: card,
          button,
          productName,
          ean,
          event: e
        });
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
export function createProductCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';

  const imageContainer = document.createElement('div');
  imageContainer.className = 'product-card__image-container';

  const image = document.createElement('img');
  image.className = 'product-card__image';
  image.src = product.image;
  image.alt = product.imageAlt || product.name;

  imageContainer.appendChild(image);

  const info = document.createElement('div');
  info.className = 'product-card__info';

  const ean = document.createElement('span');
  ean.className = 'product-card__ean';
  ean.textContent = product.ean;

  const name = document.createElement('h3');
  name.className = 'product-card__name';
  name.textContent = product.name;

  info.appendChild(ean);
  info.appendChild(name);

  const button = document.createElement('button');
  button.className = 'product-card__button';
  button.textContent = 'Ver preço';

  card.appendChild(imageContainer);
  card.appendChild(info);
  card.appendChild(button);

  return card;
}
