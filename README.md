# janne.io - Static Portfolio

A simple, fast, zero-dependency static portfolio website built with plain HTML + Tailwind CSS.

## Quick Start

**Option 1: Zero Dependencies (Recommended)**
Just open `index.html` in your browser. Uses Tailwind CSS via CDN.

**Option 2: With Tailwind CLI**
For local development with the Tailwind CLI:
```bash
# Install Tailwind CSS globally (one time)
npm install -g tailwindcss

# Generate CSS
npx tailwindcss -i input.css -o output.css --watch

# Start a local server (Python 3)
python3 -m http.server 8000
```

## Development

### Using CDN (Simplest)
1. Open `index.html` directly in your browser
2. Edit the file and refresh

### Using Tailwind CLI
1. Run `npx tailwindcss -i input.css -o output.css --watch`
2. In another terminal: `python3 -m http.server 8000`
3. Visit `http://localhost:8000`
4. Edit `index.html` or `input.css` - changes will auto-reload

## Deployment

### CDN Version (Single File)
Just deploy `index.html` and the `assets/fonts/` folder:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag & drop
- **GitHub Pages**: Push to `gh-pages` branch
- **Any static host**: Upload files

### CLI Version
Deploy `index.html`, `output.css`, and `assets/fonts/`:
```bash
# Build CSS once
npx tailwindcss -i input.css -o output.css --minify

# Then deploy the output
```

## Project Structure

```
.
├── index.html          # Main HTML file (CDN version works standalone)
├── input.css           # Tailwind input (for CLI version)
├── output.css          # Generated Tailwind CSS (for CLI version)
├── tailwind.config.js  # Tailwind configuration
└── assets/
    └── fonts/
        └── Inter/      # Inter Variable font files
```

## Features

- ✅ Single HTML file approach (CDN) or CLI build
- ✅ No framework overhead
- ✅ Dark mode with system preference detection
- ✅ Responsive design
- ✅ Inter Variable font (self-hosted)
- ✅ Theme toggle persisted to localStorage

## Customization

Edit `index.html` directly. All components are inlined as HTML:
- Header with theme toggle
- Bio section with highlighted text
- Projects list with icons and tags
- Sidebar with avatar and contact info
- Footer with links

The Highlight effect is implemented via CSS in the `<style>` tag.

## Fonts

The Inter Variable font files are self-hosted from `assets/fonts/Inter/` for optimal performance and privacy.
