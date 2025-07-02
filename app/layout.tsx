import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import MainLayout from './components/MainLayout';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lubeckelevators.com'),
  title: {
    default: 'Lubeck Elevators - Premium Elevator Solutions | Home & Commercial Lifts India',
    template: '%s | Lubeck Elevators'
  },
  description: 'Lubeck Elevators offers premium luxury elevator solutions in India since 2009. Specializing in passenger, home, goods, hospital, capsule & structure lifts with German technology. 1200+ projects delivered.',
  keywords: [
    'elevators India',
    'luxury elevators',
    'home lifts',
    'passenger elevators',
    'elevator installation',
    'elevator maintenance',
    'elevator modernization',
    'German technology elevators',
    'capsule lifts',
    'hospital elevators',
    'goods elevators',
    'elevator manufacturer India',
    'lift installation Delhi',
    'premium elevators',
    'ISO certified elevators',
    'energy efficient elevators',
    'custom elevator design',
    'commercial elevators',
    'residential elevators',
    'elevator repair services'
  ],
  authors: [{ name: 'Lubeck Elevators' }],
  creator: 'Lubeck Elevators',
  publisher: 'Lubeck Elevators',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://lubeckelevators.com',
    siteName: 'Lubeck Elevators',
    title: 'Lubeck Elevators - Premium Elevator Solutions | Home & Commercial Lifts India',
    description: 'Leading elevator manufacturer in India since 2009. Premium luxury elevators, home lifts, and commercial solutions with German technology. 1200+ successful installations.',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Premium Elevator Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubeck Elevators - Premium Elevator Solutions | Home & Commercial Lifts India',
    description: 'Leading elevator manufacturer in India since 2009. Premium luxury elevators, home lifts, and commercial solutions with German technology.',
    images: ['/logo-og.jpeg'],
    creator: '@LubeckElevators',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com',
  },
  other: {
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi',
    'geo.position': '28.6139;77.2090',
    'ICBM': '28.6139, 77.2090',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lubeck Elevators',
  alternateName: 'Lubeck Elevators India',
  url: 'https://lubeckelevators.com',
  logo: 'https://lubeckelevators.com/logo.jpeg',
  description: 'Premium elevator manufacturer in India specializing in luxury passenger, home, goods, hospital, and capsule elevators with German technology since 2009.',
  foundingDate: '2009',
  founder: {
    '@type': 'Person',
    name: 'Mr. Parveen Gupta'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'A 264, SURAJMAL VIHAR',
    addressLocality: 'Delhi',
    postalCode: '110092',
    addressCountry: 'IN'
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+91-9811013981',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+91-9310465077',
      contactType: 'sales',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    }
  ],
  email: 'LUBECKELEVATOR@GMAIL.COM',
  sameAs: [
    'https://www.justdial.com/delhi/lubeck-elevators',
    'https://www.indiamart.com/lubeck-elevators'
  ],
  serviceArea: {
    '@type': 'Country',
    name: 'India'
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'ISO 9001:2015',
      name: 'Quality Management System Certification'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'ISO 14001:2015',
      name: 'Environmental Management System Certification'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'ISO 45001:2018',
      name: 'Occupational Health & Safety Management Certification'
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'LEED Gold',
      name: 'Green Building Certification'
    }
  ],
  makesOffer: [
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Passenger Elevator Installation',
        description: 'Premium passenger elevator installation for residential and commercial buildings'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Home Lift Installation',
        description: 'Luxury home elevator installation for private residences'
      }
    },
    {
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: 'Elevator Maintenance',
        description: 'Comprehensive elevator maintenance and repair services'
      }
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://lubeckelevators.com" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <MainLayout>
          {children}
        </MainLayout>
      </body>
    </html>
  );
}
