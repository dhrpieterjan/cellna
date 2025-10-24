# Cellna Modern - Next.js 15 Application

A modern, fully-featured website for Cellna real estate and property development company, built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 15** with App Router
- 💻 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌐 **GraphQL** with Apollo Client
- 📱 **Responsive Design** mobile-first approach
- 🖼️ **Image optimization** with Next.js Image
- 📧 **Contact form** with EmailJS integration
- 🗺️ **Interactive maps** with Mapbox
- 📄 **SSR/SSG** for optimal performance
- ♿ **Accessibility** focused

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn or npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`

5. Start the development server:
   ```bash
   yarn dev
   # or
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Environment Variables

Create a `.env.local` file with the following variables:

```env
NEXT_PUBLIC_GRAPHQL_ENDPOINT=https://api.cellna.be/graphql
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_emailjs_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
```

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript compiler

## Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/             # React components
├── lib/                    # Utilities and configurations
└── ...
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Apollo Client
- **Forms**: EmailJS
- **Images**: Next.js Image
- **Maps**: Mapbox

## Migration from Legacy

This is a modern rewrite of the original Cellna project, featuring:

- Migration from Pages Router to App Router
- SASS to Tailwind CSS conversion
- Full TypeScript integration
- Modern React patterns
- Improved performance and SEO
- Enhanced accessibility

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

Private project for Cellna.