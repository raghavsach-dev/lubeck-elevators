import type { Metadata } from 'next';
import GoodsPageClient from '@/app/components/GoodsPageClient';

export const metadata: Metadata = {
  title: 'Goods Elevators India | Freight Lifts & Cargo Elevators | Lubeck Elevators',
  description: 'Heavy-duty goods elevators & freight lifts for industrial use in India. High load capacity cargo elevators for warehouses, factories, hotels. Durable construction, wide doors, advanced safety. Industrial goods lifts by Lubeck Elevators. Get quote today!',
  keywords: [
    'goods elevators India',
    'freight elevators India',
    'cargo elevators India',
    'industrial elevators',
    'warehouse elevators',
    'factory elevators',
    'service elevators',
    'dumbwaiter elevators',
    'material handling elevators',
    'heavy duty elevators',
    'goods lift installation',
    'freight lift manufacturers',
    'cargo lift India',
    'goods elevator price India',
    'industrial lift systems',
    'warehouse lift solutions',
    'freight elevator maintenance',
    'goods elevator capacity',
    'commercial goods elevators',
    'hotel service elevators',
    'restaurant goods lifts',
    'hospital goods elevators',
    'shopping mall freight elevators',
    'construction goods elevators',
    'manufacturing facility elevators'
  ],
  openGraph: {
    title: 'Goods Elevators India | Freight Lifts & Cargo Elevators | Lubeck Elevators',
    description: 'Heavy-duty goods elevators & freight lifts for industrial use. High load capacity cargo elevators for warehouses, factories, hotels.',
    url: 'https://lubeckelevators.com/products/goods',
    images: [
      {
        url: '/Products/Goods/1.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Goods Elevators - Freight & Cargo Lifts',
      },
    ],
  },
  twitter: {
    title: 'Goods Elevators India | Freight Lifts & Cargo Elevators | Lubeck Elevators',
    description: 'Heavy-duty goods elevators & freight lifts for industrial use. High load capacity cargo elevators for warehouses.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/goods',
  },
};

const goodsElevatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Goods Elevators',
  alternateName: ['Freight Elevators', 'Cargo Elevators', 'Service Elevators'],
  description: 'Heavy-duty goods elevators designed for transporting materials, equipment, and cargo in industrial, commercial, and warehouse environments.',
  category: 'Industrial Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/goods',
  image: [
    'https://lubeckelevators.com/Products/Goods/1.jpg',
    'https://lubeckelevators.com/Products/Goods/2.png',
    'https://lubeckelevators.com/Products/Goods/3.jpg'
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
      name: 'Load Capacity',
      value: '500kg - 5000kg'
    },
    {
      '@type': 'PropertyValue',
      name: 'Door Type',
      value: 'Wide opening doors for easy loading'
    },
    {
      '@type': 'PropertyValue',
      name: 'Construction',
      value: 'Robust steel construction for durability'
    },
    {
      '@type': 'PropertyValue',
      name: 'Safety Features',
      value: 'Overload protection, emergency stops, safety sensors'
    },
    {
      '@type': 'PropertyValue',
      name: 'Applications',
      value: 'Warehouses, Factories, Hotels, Hospitals, Shopping Centers'
    }
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Industrial Facilities, Warehouses, Hotels, Hospitals, Retail Stores'
  },
  applicationCategory: 'Industrial Material Handling'
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
      name: 'Goods Elevators',
      item: 'https://lubeckelevators.com/products/goods'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the maximum load capacity of Lubeck goods elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our goods elevators can handle loads ranging from 500kg to 5000kg depending on your specific requirements. We can customize the capacity based on your industrial needs.'
      }
    },
    {
      '@type': 'Question',
      name: 'What industries use goods elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Goods elevators are used in warehouses, manufacturing facilities, hotels, hospitals, shopping centers, restaurants, and any facility that needs to transport heavy materials between floors.'
      }
    },
    {
      '@type': 'Question',
      name: 'How do goods elevators differ from passenger elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Goods elevators are designed for heavy-duty use with higher load capacity, wider doors, reinforced cabins, and slower speeds. They prioritize durability and cargo handling over passenger comfort.'
      }
    },
    {
      '@type': 'Question',
      name: 'What safety features are included in goods elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our goods elevators include overload protection, emergency stop buttons, safety sensors, door interlocks, and backup power systems to ensure safe material handling operations.'
      }
    }
  ]
};

export default function GoodsLiftPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(goodsElevatorJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <GoodsPageClient />
    </>
  );
} 