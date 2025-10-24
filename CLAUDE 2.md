# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js React application for Cellna, a real estate/property development company. The application displays properties, events, company information, and includes a photo gallery and contact form.

## Commands

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

### Docker
- `docker build -t cellna .` - Build Docker image
- `docker run -p 3000:3000 cellna` - Run containerized application

## Architecture

### Framework & Stack
- **Next.js 9.x** with React 16.9
- **Apollo GraphQL** client connecting to `https://api.cellna.be/graphql`
- **SASS** for styling with component-specific stylesheets
- **Node.js 12** runtime (Dockerfile)

### Key Components Structure
- `pages/_app.js` - Apollo Provider wrapper for the entire application
- `pages/index.js` - Homepage with GraphQL query for projects, events, and content
- `pages/project/[id].js` - Dynamic project detail pages
- `lib/withApollo.js` - Apollo client configuration with GraphQL endpoint
- `components/Layout.js` - Main layout wrapper (Header, Footer, Formulier)

### Component Organization
All components are in `/components/` with co-located `.js` and `.scss` files:
- Layout components: `Layout.js`, `Header.js`, `Footer.js`
- Content sections: `projecten.js`, `events.js`, `wiezijnwe.js`, `investeren.js`
- Interactive: `formulier.js` (contact form), `fotoviewer.js` (image gallery)
- Utility: `container.js` (wrapper component)

### GraphQL Data Structure
The main homepage query fetches:
- `homepages` - Content sections (events, about us, investment info)
- `projects` - Property listings with details (name, type, location, price, photos)

### Styling Architecture
- Global styles in `components/reset.scss` and `components/style.scss`
- Variables defined in `components/_vars.scss`
- Component-specific SASS files follow naming convention: `[component].scss`
- Static assets in `/static/` including fonts, icons, and images

### Deployment
- Containerized with Docker using Node.js 12 base image
- Production build process: `npm install` → `npm run build` → `npm start`
- Exposes port 3000 for web traffic