# Footer Component

A reusable footer component for the Taiff e-commerce website.

## Overview

The footer provides essential navigation links, company information, and contact details organized in a clean, accessible layout.

## Features

- **Four Column Layout**: Organized sections for Institucional, Privacidade e termos, Suporte e soluções, and Fale conosco
- **Contact Information**: Includes phone number, email, and business hours
- **Brand Logo**: Centered logo at the bottom for brand consistency
- **Responsive Design**: Adapts to different screen sizes
- **Accessibility**: Semantic HTML with proper ARIA labels
- **Dynamic Content**: JavaScript support for updating footer content

## Usage

### Basic HTML Structure

```html
<!-- Include the footer CSS -->
<link rel="stylesheet" href="components/footer/footer.css">

<!-- Footer markup -->
<footer class="footer">
  <div class="footer__content">
    <!-- Footer columns with links -->
  </div>
  <div class="footer__bottom">
    <!-- Logo -->
  </div>
</footer>

<!-- Include the footer JavaScript -->
<script src="components/footer/footer.js"></script>
```

### File Structure

```
footer/
├── footer.html      # HTML template
├── footer.css       # Component styles
├── footer.js        # Component functionality
└── README.md        # Documentation
```

## Styling

The footer uses CSS custom properties (design tokens) defined in `styles/tokens.css`:

- **Colors**: `--color-bg-primary`, `--color-border-default`, `--color-content-tertiary`, `--color-neutral-500`
- **Typography**: Font families, sizes, and weights from the design system
- **Spacing**: Consistent spacing using `--spacing-*` tokens
- **Border Radius**: Standard radius values

## JavaScript API

### Initialization

The footer automatically initializes on page load:

```javascript
// Auto-initialized
const footer = new Footer(document.querySelector('.footer'));
```

### Methods

#### `init()`
Initializes the footer component with accessibility features and link handling.

#### `setupAccessibility()`
Adds accessibility features like `aria-current` for the current page.

#### `handleExternalLinks()`
Automatically adds `target="_blank"` to external links.

#### `updateContent(data)`
Dynamically updates footer content:

```javascript
footer.updateContent({
  institucional: {
    links: [
      { text: 'Sobre nós', url: '/sobre' },
      { text: 'Blog', url: '/blog' }
    ]
  }
});
```

#### `destroy()`
Cleans up the footer instance.

## Customization

### Adding New Columns

To add a new footer column, add the HTML structure in `footer.html`:

```html
<div class="footer__column">
  <h3 class="footer__title">New Section</h3>
  <ul class="footer__links">
    <li><a href="/link" class="footer__link">Link Text</a></li>
  </ul>
</div>
```

### Styling Custom Columns

Add custom styles in `footer.css`:

```css
.footer__column--custom {
  /* Custom column styles */
}
```

## Responsive Behavior

- **Desktop (>1024px)**: Four columns in a single row
- **Tablet (768px-1024px)**: Two columns per row
- **Mobile (<768px)**: Single column layout

## Accessibility

- Semantic HTML5 `<footer>` element
- Proper heading hierarchy with `<h3>` for column titles
- ARIA labels for the logo link
- Keyboard navigation support
- Screen reader friendly structure
- Current page indication with `aria-current`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- CSS custom properties support
- ES6 JavaScript support
- No external libraries required

## Assets

Uses the same logo as the header component for consistency:
- `assets/images/bright-logo.png`

## Notes

- The footer is designed to match the existing component architecture
- All colors and typography use design tokens for consistency
- Fully responsive and mobile-friendly
- Contact information can be easily updated in the HTML
- Email address placeholder needs to be updated with actual email
