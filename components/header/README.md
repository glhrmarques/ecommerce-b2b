# Header Component

A reusable header component for the Taiff E-commerce B2B platform.

## Features

- **Responsive design** - Works on all screen sizes
- **Search functionality** - Integrated search bar with callback support
- **Authentication UI** - Login and Sign up buttons
- **Navigation menu** - Main navigation with active state support
- **Accessible** - Built with ARIA labels and keyboard navigation
- **Customizable** - Easy to configure via JavaScript options

## Structure

```
components/header/
├── header.html    # HTML template (for reference)
├── header.css     # Component styles
├── header.js      # Component logic
└── README.md      # This file
```

## Usage

### 1. Include the styles

```html
<link rel="stylesheet" href="./styles/tokens.css">
<link rel="stylesheet" href="./styles/base.css">
<link rel="stylesheet" href="./components/header/header.css">
```

### 2. Add the HTML markup

Copy the header markup from `header.html` or `index.html` to your page.

### 3. Initialize the component

```javascript
import { initHeader } from './components/header/header.js';

initHeader({
  activeNavItem: 'produtos',  // Optional: Set active nav item
  onSearch: (query) => {       // Optional: Handle search
    console.log('Search:', query);
  }
});
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `activeNavItem` | string | `null` | ID of the active navigation item (`produtos`, `novidades`, `marcas`, `promocoes`) |
| `onSearch` | function | `null` | Callback function called when search is triggered |

## JavaScript API

### `initHeader(options)`

Initialize the header component with configuration options.

```javascript
initHeader({
  activeNavItem: 'novidades',
  onSearch: (query) => {
    // Your search logic
    window.location.href = `/search?q=${encodeURIComponent(query)}`;
  }
});
```

### `setActiveNavItem(itemId)`

Programmatically set the active navigation item.

```javascript
import { setActiveNavItem } from './components/header/header.js';

setActiveNavItem('promocoes');
```

## Styling Customization

All colors and sizes are defined using CSS custom properties (design tokens). To customize the header, modify the tokens in `styles/tokens.css`:

```css
:root {
  --color-btn-primary-bg: #3d3d3d;
  --color-btn-primary-text: #ffffff;
  /* ... more tokens */
}
```

## Navigation Items

The header includes four navigation items by default:

- **Todos os produtos** (`produtos`) - All products
- **Novidades** (`novidades`) - New arrivals
- **Marcas** (`marcas`) - Brands
- **Promoções** (`promocoes`) - Promotions

To add or modify navigation items, edit the `<nav class="header__nav">` section in the HTML.

## Accessibility

The header component follows accessibility best practices:

- Semantic HTML5 elements (`<header>`, `<nav>`)
- ARIA labels for screen readers
- Keyboard navigation support
- Focus indicators
- Proper heading hierarchy

## Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: 767px and below

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

Potential improvements for future versions:

- Mobile hamburger menu for better mobile UX
- Search autocomplete/suggestions
- User account dropdown menu
- Shopping cart indicator
- Sticky header on scroll
- Dark mode support
