import type { Metadata } from 'next';
import ProductHomePageClient from '@/app/components/ProductHomePageClient';

export const metadata: Metadata = {
  title: 'Home Lifts India | Residential Elevators for Private Homes | Lubeck Elevators',
  description: 'Premium home lifts & residential elevators for private homes in India. Compact, energy-efficient, luxury home elevators with German technology. Easy installation, minimal space required. Custom home lifts by Lubeck Elevators. Get free quote today!',
  keywords: [
    'home lifts India',
    'residential elevators India',
    'home elevators India',
    'private home lifts',
    'villa elevators',
    'house elevators',
    'home lift installation',
    'home lift price India',
    'home lift manufacturers India',
    'compact home elevators',
    'luxury home lifts',
    'energy efficient home lifts',
    'silent home elevators',
    'home lift designs',
    'home lift for elderly',
    'home accessibility lifts',
    'home elevator maintenance',
    'home lift cost India',
    'home elevator Delhi',
    'home lift Mumbai',
    'home elevator Bangalore',
    'residential lift installation',
    'custom home elevators',
    'German technology home lifts',
    'small home elevators',
    'hydraulic home lifts',
    'machine room less home lifts'
  ],
  openGraph: {
    title: 'Home Lifts India | Residential Elevators for Private Homes | Lubeck Elevators',
    description: 'Premium home lifts & residential elevators for private homes. Compact, energy-efficient, luxury home elevators with German technology.',
    url: 'https://lubeckelevators.com/products/home',
    images: [
      {
        url: '/Products/Home/1.png',
        width: 1200,
        height: 630,
        alt: 'Lubeck Home Lifts - Residential Elevators',
      },
    ],
  },
  twitter: {
    title: 'Home Lifts India | Residential Elevators for Private Homes | Lubeck Elevators',
    description: 'Premium home lifts & residential elevators for private homes. Compact, energy-efficient, luxury home elevators.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/home',
  },
};

const homeLiftJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Home Lifts',
  alternateName: ['Residential Elevators', 'Home Elevators', 'Private Home Lifts'],
  description: 'Luxury home lifts designed for private residences, offering convenience, accessibility, and style with compact design and energy-efficient operation.',
  category: 'Home Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/home',
  image: [
    'https://lubeckelevators.com/Products/Home/1.png',
    'https://lubeckelevators.com/Products/Home/2.png',
    'https://lubeckelevators.com/Products/Home/3.png'
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    priceValidUntil: '2025-12-31',
    seller: {
      '@type': 'Organization',
      name: 'Lubeck Elevators'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    }
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Installation Type',
      value: 'Minimal structural changes required'
    },
    {
      '@type': 'PropertyValue',
      name: 'Power Consumption',
      value: 'Low energy consumption'
    },
    {
      '@type': 'PropertyValue',
      name: 'Capacity',
      value: '2-6 Persons'
    },
    {
      '@type': 'PropertyValue',
      name: 'Space Required',
      value: 'Compact design for small spaces'
    },
    {
      '@type': 'PropertyValue',
      name: 'Operation',
      value: 'Quiet and smooth operation'
    }
  ],
  audience: {
    '@type': 'Audience',
    name: 'Homeowners, Villa Owners, Senior Citizens'
  },
  isAccessibleForFree: false,
  hasMeasurement: {
    '@type': 'QuantitativeValue',
    name: 'Minimum Shaft Size',
    value: '1000x1000',
    unitCode: 'MMT',
    unitText: 'mm'
  }
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://lubeckelevators.com'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Products',
      item: 'https://lubeckelevators.com/products'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Home Lifts',
      item: 'https://lubeckelevators.com/products/home'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much space is required for a home lift installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our home lifts require minimal space with compact designs starting from 1000x1000mm shaft size. We can customize the elevator to fit your available space and structural requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do home lifts require major structural changes to the house?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, our home lifts are designed for easy installation with minimal structural changes. The installation process is quick and causes minimal disruption to your daily life.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are home lifts energy efficient?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Lubeck home lifts are highly energy-efficient with low power consumption, LED lighting, and standby mode functionality to minimize electricity usage.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the cost of installing a home lift in India?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost varies based on capacity, customization, number of floors, and specific requirements. Contact us for a personalized quote based on your home\'s specifications.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can home lifts be used by elderly people and wheelchairs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! Our home lifts are designed with accessibility in mind, featuring wide doors, smooth operation, and safety features making them perfect for elderly users and wheelchair accessibility.'
      }
    }
  ]
};

export default function HomeLiftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLiftJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ProductHomePageClient />
    </>
  );
} 