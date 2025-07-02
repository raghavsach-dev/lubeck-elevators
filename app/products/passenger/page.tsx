import type { Metadata } from 'next';
import PassengerPageClient from '@/app/components/PassengerPageClient';

export const metadata: Metadata = {
  title: 'Passenger Elevators India | Commercial & Residential Lifts | Lubeck Elevators',
  description: 'Premium passenger elevators for commercial & residential buildings in India. Safe, reliable, stylish elevators with German technology, VvVF control, ARD safety features. Energy-efficient passenger lifts by Lubeck Elevators. Get quote today!',
  keywords: [
    'passenger elevators India',
    'commercial passenger elevators',
    'residential passenger elevators',
    'passenger lifts India',
    'office building elevators',
    'apartment elevators',
    'shopping mall elevators',
    'hospital passenger elevators',
    'school elevators',
    'hotel elevators',
    'passenger elevator installation',
    'passenger elevator maintenance',
    'passenger elevator price India',
    'passenger elevator manufacturers',
    'VvVF control elevators',
    'ARD safety elevators',
    'energy efficient passenger elevators',
    'smooth ride elevators',
    'noise free passenger elevators',
    'custom passenger elevators',
    'German technology passenger elevators',
    'ISO certified passenger elevators',
    'passenger elevator Delhi',
    'passenger elevator Mumbai',
    'passenger elevator Bangalore'
  ],
  openGraph: {
    title: 'Passenger Elevators India | Commercial & Residential Lifts | Lubeck Elevators',
    description: 'Premium passenger elevators for commercial & residential buildings. Safe, reliable, stylish elevators with German technology and VvVF control.',
    url: 'https://lubeckelevators.com/products/passenger',
    images: [
      {
        url: '/Products/Passenger/1.png',
        width: 1200,
        height: 630,
        alt: 'Lubeck Passenger Elevators - Commercial & Residential',
      },
    ],
  },
  twitter: {
    title: 'Passenger Elevators India | Commercial & Residential Lifts | Lubeck Elevators',
    description: 'Premium passenger elevators for commercial & residential buildings. Safe, reliable, stylish elevators with German technology.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/passenger',
  },
};

const passengerElevatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Passenger Elevators',
  description: 'Premium passenger elevators for commercial and residential buildings with advanced safety features, energy-efficient operation, and customizable designs.',
  category: 'Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/passenger',
  image: [
    'https://lubeckelevators.com/Products/Passenger/1.png',
    'https://lubeckelevators.com/Products/Passenger/2.png',
    'https://lubeckelevators.com/Products/Passenger/3.png'
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
      name: 'Safety Features',
      value: 'ARD (Automatic Rescue Device), VvVF Control, Emergency Communication'
    },
    {
      '@type': 'PropertyValue',
      name: 'Technology',
      value: 'German Technology, Energy-efficient drive systems'
    },
    {
      '@type': 'PropertyValue',
      name: 'Capacity Range',
      value: '6-20 Persons'
    },
    {
      '@type': 'PropertyValue',
      name: 'Speed Range',
      value: '1.0-2.5 m/s'
    },
    {
      '@type': 'PropertyValue',
      name: 'Application',
      value: 'Commercial Buildings, Residential Complexes, Hotels, Hospitals'
    }
  ],
  hasVariant: [
    {
      '@type': 'ProductModel',
      name: 'Standard Passenger Elevator',
      description: 'Basic passenger elevator for residential and small commercial buildings'
    },
    {
      '@type': 'ProductModel',
      name: 'Premium Passenger Elevator',
      description: 'High-end passenger elevator with luxury finishes and advanced features'
    },
    {
      '@type': 'ProductModel',
      name: 'High-Speed Passenger Elevator',
      description: 'Fast passenger elevator for high-rise commercial buildings'
    }
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Real Estate Developers, Building Owners, Architects'
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
      name: 'Passenger Elevators',
      item: 'https://lubeckelevators.com/products/passenger'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the capacity range of Lubeck passenger elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubeck passenger elevators are available in various capacities ranging from 6 persons to 20 persons, suitable for different building requirements from residential complexes to large commercial buildings.'
      }
    },
    {
      '@type': 'Question',
      name: 'What safety features are included in Lubeck passenger elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our passenger elevators include advanced safety features such as ARD (Automatic Rescue Device), VvVF control for smooth rides, emergency communication systems, and comply with all Indian safety standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can passenger elevators be customized for specific building requirements?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Lubeck passenger elevators can be fully customized including cabin interiors, finishes, capacity, speed, and dimensions to match your building\'s aesthetic and functional requirements.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the installation time for a passenger elevator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The installation time for a passenger elevator typically ranges from 15-30 days depending on the number of floors, customization requirements, and site conditions. Our team ensures minimal disruption during installation.'
      }
    }
  ]
};

export default function PassengerElevatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(passengerElevatorJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <PassengerPageClient />
    </>
  );
} 