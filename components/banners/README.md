# Banners Component

A responsive slideshow/carousel component for displaying promotional banners.

## Features

- **Auto-play**: Automatically cycles through slides
- **Navigation**: Dot indicators and arrow buttons for manual navigation
- **Keyboard Support**: Use arrow keys to navigate slides
- **Touch/Swipe Support**: Swipe gestures on mobile devices
- **Pause on Hover**: Auto-play pauses when hovering over the component
- **Responsive**: Adapts to different screen sizes
- **Accessible**: ARIA labels and keyboard navigation support

## Usage

### HTML

Include the banners component HTML in your page:

```html
<!-- Include in your HTML -->
<div id="banners-container"></div>

<!-- Or use the full component markup from banners.html -->
```

### CSS

Include the component styles:

```html
<link rel="stylesheet" href="./components/banners/banners.css">
```

### JavaScript

Initialize the component:

```javascript
import { initBanners } from './components/banners/banners.js';

// Initialize with default options
initBanners();

// Or customize the options
const bannersControl = initBanners({
  autoPlay: true,
  autoPlayInterval: 5000 // 5 seconds
});

// Control methods (optional)
bannersControl.goToSlide(2);
bannersControl.nextSlide();
bannersControl.prevSlide();
bannersControl.stopAutoPlay();
bannersControl.startAutoPlay();
```

## Configuration Options

- `autoPlay` (boolean): Enable/disable auto-play (default: `true`)
- `autoPlayInterval` (number): Time between slides in milliseconds (default: `5000`)

## Customization

### Adding Slides

To add more slides, add new slide elements in the HTML:

```html
<div class="banners__slide" data-slide="4">
  <img src="path/to/image.jpg" alt="Banner" class="banners__image" />
</div>
```

And add corresponding dot indicators:

```html
<button class="banners__dot" data-slide="4" aria-label="Ir para o slide 4"></button>
```

### Styling

The component uses CSS custom properties (design tokens) from `styles/tokens.css`:

- `--color-bg-primary`: Background color
- `--color-neutral-100`: Active dot color
- `--color-content-primary`: Arrow icon color

You can override these or modify the `banners.css` file directly.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome for Android)

## Accessibility

- ARIA labels for navigation buttons
- Keyboard navigation support (arrow keys)
- Screen reader friendly
