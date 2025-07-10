import DoorsPageClient from '@/app/components/DoorsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lift Doors | Premium Elevator Door Systems | Lubeck Elevators',
  description: 'Discover our premium lift door solutions including automatic doors, manual doors, and specialized door systems. High-quality, reliable, and stylish elevator doors for all applications.',
  keywords: [
    'lift doors',
    'elevator doors',
    'automatic elevator doors',
    'manual elevator doors',
    'elevator door systems',
    'lift door installation',
    'elevator door repair',
    'premium elevator doors',
    'commercial elevator doors',
    'residential elevator doors',
    'stainless steel elevator doors',
    'glass elevator doors',
    'elevator door safety',
    'elevator door accessories',
    'custom elevator doors',
    'elevator door design',
    'modern elevator doors',
    'elevator door technology',
    'elevator door solutions',
    'lift door maintenance'
  ],
  openGraph: {
    title: 'Lift Doors | Premium Elevator Door Systems | Lubeck Elevators',
    description: 'Discover our premium lift door solutions with German technology and superior craftsmanship.',
    url: 'https://lubeckelevators.com/products/doors',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Premium Lift Doors',
      },
    ],
  },
  twitter: {
    title: 'Lift Doors | Premium Elevator Door Systems | Lubeck Elevators',
    description: 'Discover our premium lift door solutions with German technology and superior craftsmanship.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/doors',
  },
};

const doorsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Lift Doors by Lubeck Elevators',
  description: 'Premium elevator door systems including automatic and manual doors with superior safety features and modern design.',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  category: 'Elevator Door Systems',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition'
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
      name: 'Lift Doors',
      item: 'https://lubeckelevators.com/products/doors'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of elevator doors do you offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer automatic sliding doors, manual swing doors, telescopic doors, and specialized door systems for different elevator applications including passenger, goods, and hospital elevators.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are your elevator doors safe and compliant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, all our elevator doors meet international safety standards and are equipped with advanced safety features including door sensors, emergency opening mechanisms, and fail-safe systems.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can you customize elevator doors for specific requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We offer custom elevator door solutions including different materials, finishes, sizes, and configurations to match your building\'s design and functional requirements.'
      }
    }
  ]
};

export default function DoorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(doorsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DoorsPageClient />
    </>
  );
} 