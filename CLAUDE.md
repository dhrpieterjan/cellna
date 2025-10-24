# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 15 application for Cellna, a real estate/property development company, built with TypeScript, App Router, and Tailwind CSS. The application displays properties, events, company information, photo gallery, and includes a contact form.

## Commands

### Development
- `yarn dev` - Start development server (recommended)
- `npm run dev` - Alternative development start
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn type-check` - Run TypeScript type checking
- `yarn lint` - Run ESLint

### Environment Setup
Copy `.env.example` to `.env.local` and configure:
- GraphQL endpoint
- EmailJS configuration
- Mapbox API token

## Architecture

### Framework & Stack
- **Next.js 15** with App Router and React 19
- **TypeScript** with strict mode enabled
- **Apollo GraphQL** client for data fetching
- **Tailwind CSS** for styling with custom design system
- **EmailJS** for contact form functionality

### Project Structure
```
src/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage with SSR
│   ├── loading.tsx         # Global loading component
│   ├── error.tsx           # Global error boundary
│   ├── not-found.tsx       # 404 page
│   └── project/[id]/       # Dynamic project pages
│       ├── page.tsx        # Project detail with SSG
│       ├── loading.tsx     # Project loading state
│       └── not-found.tsx   # Project not found
├── components/
│   ├── layout/             # Layout components (Header, Footer, Layout)
│   ├── sections/           # Page sections (Events, AboutUs, Investment, etc.)
│   ├── projects/           # Project-related components
│   └── ui/                 # Reusable UI components
└── lib/
    ├── apollo-client.ts    # Apollo Client configuration
    ├── apollo-wrapper.tsx  # Client-side Apollo Provider
    ├── queries.ts          # GraphQL queries
    └── types.ts            # TypeScript interfaces
```

### Key Features
- **SSR/SSG**: Homepage uses SSR, project pages use SSG with ISR
- **TypeScript**: Full type safety throughout the application
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Image Optimization**: Next.js Image component with proper sizing
- **Performance**: Optimized for Core Web Vitals
- **SEO**: Dynamic metadata and structured data

### GraphQL Integration
- Apollo Client with SSR support
- Homepage query fetches all data in one request
- Project detail pages use static generation with revalidation
- Error handling for GraphQL failures

### Styling System
- **Tailwind CSS** with custom configuration
- **Custom fonts**: Brandon Grotesque family
- **Design system**: Consistent spacing, colors, and typography
- **Responsive breakpoints**: Custom breakpoints matching original design
- **Component patterns**: Reusable CSS classes and components

### Data Flow
1. **Homepage**: Server-side rendering with fresh data on each request
2. **Project Pages**: Static generation at build time with incremental regeneration
3. **Contact Form**: Client-side form submission with EmailJS
4. **Photo Gallery**: Interactive modal gallery with optimized images

## Development Notes

### API Integration
- GraphQL endpoint: `https://api.cellna.be/graphql`
- Image assets served from: `https://api.cellna.be/[image_path]`
- Mapbox integration for project location maps

### Performance Optimizations
- Next.js Image component for all images
- Static generation for project pages
- Component-level code splitting
- Tailwind CSS purging for minimal bundle size

### Error Handling
- Comprehensive error boundaries
- Graceful fallbacks for missing data
- Loading states for all async operations
- User-friendly error messages