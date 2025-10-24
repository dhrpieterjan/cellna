import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Cellna - Vastgoed & Projectontwikkeling',
    template: '%s | Cellna'
  },
  description: 'Cellna is uw partner voor vastgoedinvesteringen en projectontwikkeling. Ontdek onze projecten en investeringsmogelijkheden.',
  keywords: ['vastgoed', 'projectontwikkeling', 'investeren', 'bouwgrond', 'Cellna', 'België'],
  authors: [{ name: 'Cellna' }],
  creator: 'Cellna',
  publisher: 'Cellna',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cellna.be'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Cellna - Vastgoed & Projectontwikkeling',
    description: 'Uw partner voor vastgoedinvesteringen en projectontwikkeling',
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Cellna',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cellna - Vastgoed & Projectontwikkeling',
    description: 'Uw partner voor vastgoedinvesteringen en projectontwikkeling',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3C4146' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1d20' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="font-brandon antialiased">
        {children}
      </body>
    </html>
  );
}