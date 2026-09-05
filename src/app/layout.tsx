import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import '@/styles/landing.css';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { asset, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  metadataBase: new URL(`${siteConfig.url}/`),
  title: {
    default: 'IEEE NTU Student Branch',
    template: '%s | IEEE NTU Student Branch',
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: `${siteConfig.url}/images/social-card.png`,
        width: 1200,
        height: 630,
        alt: 'IEEE NTU Student Branch — Nanyang Technological University, Singapore',
      },
    ],
  },
  twitter: { card: 'summary_large_image' },
  icons: { icon: asset('/icon.svg') },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#0b293f' },
    { media: '(prefers-color-scheme: light)', color: '#00629b' },
  ],
};

const themeScript = `(function(){var t;try{t=localStorage.getItem('ieee-ntu-theme')}catch(e){}document.documentElement.dataset.theme=t==='dark'||t==='light'?t:window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'})()`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    foundingDate: '1991',
    description: siteConfig.description,
    ...(siteConfig.contactEmail ? { email: siteConfig.contactEmail } : {}),
    ...(siteConfig.socialLinks.length ? { sameAs: siteConfig.socialLinks.map((s) => s.url) } : {}),
  };
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body id="top">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
