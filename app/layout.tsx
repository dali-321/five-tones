import type { Metadata } from 'next';
import './globals.css';

const SITE_URL = 'https://fivetones.cc';
const SITE_NAME = 'Five Tones';
const SITE_TITLE = 'Five Tones — Your Body Has a Soundtrack';
const SITE_DESC = 'Ancient Chinese healing meets modern music. Take a 2-min quiz to discover your five-element body type and get a personalized healing playlist.';

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESC,
  manifest: '/manifest.json',
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESC,
    siteName: SITE_NAME,
    type: 'website',
    images: [{ url: `${SITE_URL}/og-image.svg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESC,
    images: [`${SITE_URL}/og-image.svg`],
  },
};

import ServiceWorkerRegister from './components/ServiceWorkerRegister';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#FF6B6B" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
