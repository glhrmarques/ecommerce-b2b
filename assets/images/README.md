# Image Assets

This folder contains all image assets used in the project.

## Required Assets

### Logo
- **File**: `logo.svg` or `logo.png`
- **Dimensions**: 92px × 30px (desktop)
- **Usage**: Header component
- **Current**: Using Figma CDN URL as placeholder

### Icons
Future icon assets will be stored here.

## Notes

- Currently, the logo is loaded from Figma's CDN URL (temporary)
- Replace with your own logo file for production
- Recommended formats: SVG (preferred), PNG, WebP
- Use descriptive filenames (e.g., `logo-taiff.svg`, `icon-search.svg`)

## Optimizing Images

For production, consider:
- Compressing images (TinyPNG, ImageOptim)
- Using responsive images (`<picture>`, `srcset`)
- Converting to WebP format
- Lazy loading for below-the-fold images
