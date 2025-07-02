import type { Metadata } from 'next';
import StructurePageClient from '@/app/components/StructurePageClient';

export const metadata: Metadata = {
  title: 'Structure Lifts India | External Elevators & Retrofit Solutions | Lubeck Elevators',
  description: 'Self-supporting structure lifts & external elevators for retrofit projects in India. No shaft required elevators for existing buildings. Weather-resistant outdoor lifts. Industrial structure elevators by Lubeck Elevators. Get external lift quote today!',
  keywords: [
    'structure lifts India',
    'external elevators India',
    'retrofit elevators',
    'self supporting elevators',
    'outdoor elevators',
    'external lifts',
    'no shaft elevators',
    'building retrofit lifts',
    'structure elevators',
    'external passenger lifts',
    'outdoor lifts India',
    'retrofit elevator solutions',
    'self contained elevators',
    'external elevator installation',
    'structure lift manufacturers',
    'outdoor elevator systems',
    'weather resistant elevators',
    'external lift price India',
    'building upgrade elevators',
    'external home lifts',
    'retrofit residential elevators',
    'structure elevator Delhi',
    'external lifts Mumbai',
    'retrofit elevators Bangalore',
    'construction site elevators'
  ],
  openGraph: {
    title: 'Structure Lifts India | External Elevators & Retrofit Solutions | Lubeck Elevators',
    description: 'Self-supporting structure lifts & external elevators for retrofit projects. No shaft required elevators for existing buildings.',
    url: 'https://lubeckelevators.com/products/structure',
    images: [
      {
        url: '/Products/Structure/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Structure Lifts - External Elevators',
      },
    ],
  },
  twitter: {
    title: 'Structure Lifts India | External Elevators & Retrofit Solutions | Lubeck Elevators',
    description: 'Self-supporting structure lifts & external elevators for retrofit projects. No shaft required elevators.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/structure',
  },
};

const structureElevatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Structure Lifts',
  alternateName: ['External Elevators', 'Retrofit Elevators', 'Self-Supporting Elevators', 'Outdoor Lifts'],
  description: 'Self-supporting elevator structures that can be installed internally or externally without requiring conventional lift shafts, perfect for building retrofits.',
  category: 'Retrofit Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/structure',
  image: [
    'https://lubeckelevators.com/Products/Structure/1.jpg',
    'https://lubeckelevators.com/Products/Structure/2.png',
    'https://lubeckelevators.com/Products/Structure/3.jpg'
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
      value: 'Self-supporting structure for easy retrofitting'
    },
    {
      '@type': 'PropertyValue',
      name: 'Location',
      value: 'Suitable for both indoor and outdoor installations'
    },
    {
      '@type': 'PropertyValue',
      name: 'Materials',
      value: 'Weather-resistant materials for external applications'
    },
    {
      '@type': 'PropertyValue',
      name: 'Design Flexibility',
      value: 'Adaptable to various architectural styles'
    },
    {
      '@type': 'PropertyValue',
      name: 'Compliance',
      value: 'Meets all safety standards for external and internal lifts'
    }
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Building Owners, Retrofit Projects, Industrial Facilities'
  },
  applicationCategory: 'Building Retrofit Solutions'
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
      name: 'Structure Lifts',
      item: 'https://lubeckelevators.com/products/structure'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are structure lifts and when are they used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structure lifts are self-supporting elevator systems that don\'t require conventional shafts. They are ideal for retrofit projects in existing buildings where adding a traditional elevator shaft would be difficult or impossible.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can structure lifts be installed outdoors?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, structure lifts can be installed both indoors and outdoors. For external installations, we use weather-resistant materials and protective coatings to withstand environmental conditions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Do structure lifts require major building modifications?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, structure lifts are designed to minimize building modifications. They are self-supporting and can be installed with minimal structural changes to the existing building.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the installation time for a structure lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structure lift installation is typically faster than conventional elevators since minimal building modifications are required. Installation time varies based on height and complexity but is generally completed within 10-20 days.'
      }
    }
  ]
};

export default function StructureLiftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structureElevatorJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <StructurePageClient />
    </>
  );
} 