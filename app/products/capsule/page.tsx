import type { Metadata } from 'next';
import CapsulePageClient from '@/app/components/CapsulePageClient';

export const metadata: Metadata = {
  title: 'Capsule Lifts India | Panoramic Glass Elevators | Lubeck Elevators',
  description: 'Stunning capsule lifts & panoramic glass elevators in India. Architectural masterpiece elevators with 360° views for hotels, malls, offices. Futuristic design capsule elevators by Lubeck Elevators. Transform your building with panoramic lifts. Get quote today!',
  keywords: [
    'capsule lifts India',
    'panoramic elevators India',
    'glass elevators India',
    'scenic elevators',
    'observation elevators',
    'panoramic lifts',
    'glass capsule elevators',
    'architectural elevators',
    'scenic lifts',
    'transparent elevators',
    'sightseeing elevators',
    'decorative elevators',
    'luxury capsule lifts',
    'hotel capsule elevators',
    'mall panoramic elevators',
    'office building glass elevators',
    'capsule elevator installation',
    'panoramic elevator manufacturers',
    'glass elevator price India',
    'capsule lift designs',
    'futuristic elevators',
    'modern capsule lifts',
    'custom capsule elevators',
    'panoramic elevator Delhi',
    'capsule lifts Mumbai',
    'glass elevators Bangalore'
  ],
  openGraph: {
    title: 'Capsule Lifts India | Panoramic Glass Elevators | Lubeck Elevators',
    description: 'Stunning capsule lifts & panoramic glass elevators. Architectural masterpiece elevators with 360° views for hotels, malls, offices.',
    url: 'https://lubeckelevators.com/products/capsule',
    images: [
      {
        url: '/Products/Capsule/1.avif',
        width: 1200,
        height: 630,
        alt: 'Lubeck Capsule Lifts - Panoramic Glass Elevators',
      },
    ],
  },
  twitter: {
    title: 'Capsule Lifts India | Panoramic Glass Elevators | Lubeck Elevators',
    description: 'Stunning capsule lifts & panoramic glass elevators. Architectural masterpiece elevators with 360° views.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/capsule',
  },
};

const capsuleElevatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Capsule Lifts',
  alternateName: ['Panoramic Elevators', 'Glass Elevators', 'Scenic Elevators', 'Observation Elevators'],
  description: 'Architectural statement elevators with panoramic glass walls offering stunning views, perfect for hotels, shopping centers, and prestigious buildings.',
  category: 'Architectural Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/capsule',
  image: [
    'https://lubeckelevators.com/Products/Capsule/1.avif',
    'https://lubeckelevators.com/Products/Capsule/2.jpg',
    'https://lubeckelevators.com/Products/Capsule/3.jpg'
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
      name: 'Design',
      value: 'Panoramic glass-walled design with 360° views'
    },
    {
      '@type': 'PropertyValue',
      name: 'Materials',
      value: 'Tempered safety glass, premium finishes'
    },
    {
      '@type': 'PropertyValue',
      name: 'Customization',
      value: 'Various shapes, sizes, and interior designs available'
    },
    {
      '@type': 'PropertyValue',
      name: 'Installation',
      value: 'Indoor and outdoor installation options'
    },
    {
      '@type': 'PropertyValue',
      name: 'Applications',
      value: 'Hotels, Shopping Malls, Office Buildings, Residential Towers'
    }
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Hotels, Shopping Centers, Office Buildings, Luxury Residences'
  },
  additionalType: 'https://schema.org/ArchitecturalStructure'
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
      name: 'Capsule Lifts',
      item: 'https://lubeckelevators.com/products/capsule'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the advantages of capsule elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capsule elevators offer stunning panoramic views, serve as architectural focal points, enhance building aesthetics, provide unique user experiences, and can be installed both indoors and outdoors for maximum visual impact.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are capsule elevators safe with glass walls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, capsule elevators use tempered safety glass that meets all safety standards. The glass is designed to withstand environmental factors and includes safety features like emergency communication and backup systems.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can capsule elevators be customized for different building designs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely! We offer complete customization including different shapes (cylindrical, rectangular), sizes, glass types, interior finishes, and lighting options to match your building\'s architectural vision.'
      }
    },
    {
      '@type': 'Question',
      name: 'Where are capsule elevators typically installed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Capsule elevators are ideal for hotels, shopping malls, office buildings, residential towers, tourist attractions, and any building where aesthetics and views are important design considerations.'
      }
    }
  ]
};

export default function CapsuleLiftsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(capsuleElevatorJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CapsulePageClient />
    </>
  );
} 