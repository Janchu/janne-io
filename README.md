# janne.io - Static Portfolio

A simple, fast, zero-dependency static portfolio website built with plain HTML + Tailwind CSS.

## Requirements

- nodejs
- pnpm

## Development

Install dependencies
```bash
pnpm install
```

Start tailwindcss in watch mode 
```bash
pnpm tailwindcss -i ./input.css -o ./output.css --watch
```

Serve locally
```bash
python3 -m http.server 8000
```

The website is served on `http://localhost:8000` and changes will auto-reload

## Deployment

Make sure a minified output.css is generated
```bash
pnpm tailwindcss -i ./input.css -o ./output.css --minify
```

Commit changes. Deployment will be automatically triggered from changes in master branch.
