import AccessoriesPageClient from '@/app/components/AccessoriesPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Elevator Accessories | Premium Lift Components | Lubeck Elevators',
  description: 'Explore our comprehensive range of elevator accessories including control panels, buttons, indicators, safety devices, and modern upgrade components for enhanced elevator functionality.',
  keywords: [
    'elevator accessories',
    'lift accessories',
    'elevator components',
    'elevator control panels',
    'elevator buttons',
    'elevator indicators',
    'elevator safety devices',
    'lift modernization parts',
    'elevator upgrade components',
    'elevator fixtures',
    'elevator cabin accessories',
    'elevator door accessories',
    'elevator control systems',
    'elevator emergency devices',
    'elevator communication systems',
    'elevator lighting',
    'elevator flooring',
    'elevator handrails',
    'elevator mirrors',
    'premium elevator accessories'
  ],
  openGraph: {
    title: 'Elevator Accessories | Premium Lift Components | Lubeck Elevators',
    description: 'Explore our comprehensive range of premium elevator accessories and components.',
    url: 'https://lubeckelevators.com/products/accessories',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Premium Elevator Accessories',
      },
    ],
  },
  twitter: {
    title: 'Elevator Accessories | Premium Lift Components | Lubeck Elevators',
    description: 'Explore our comprehensive range of premium elevator accessories and components.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/accessories',
  },
};

const accessoriesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Elevator Accessories by Lubeck Elevators',
  description: 'Comprehensive range of premium elevator accessories including control panels, safety devices, and modernization components.',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  category: 'Elevator Accessories and Components',
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
      name: 'Accessories',
      item: 'https://lubeckelevators.com/products/accessories'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What elevator accessories do you provide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide a comprehensive range including control panels, push buttons, indicators, safety devices, emergency communication systems, lighting, flooring, handrails, mirrors, and modernization components.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade my existing elevator with new accessories?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer modernization accessories that can upgrade existing elevators with new control systems, safety features, and aesthetic improvements while maintaining compatibility.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are your accessories compatible with different elevator brands?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many of our accessories are designed to be compatible with various elevator systems. Our technical team can assess compatibility and recommend the best solutions for your specific elevator.'
      }
    }
  ]
};

export default function AccessoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(accessoriesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AccessoriesPageClient />
    </>
  );
} 