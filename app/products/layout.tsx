import type { Metadata } from 'next';
import ProductsLayoutClient from '@/app/components/ProductsLayoutClient';

export const metadata: Metadata = {
  title: 'Elevator Products | Premium Lifts & Elevators | Lubeck Elevators',
  description: 'Explore our complete range of premium elevator products: Passenger elevators, Home lifts, Goods elevators, Hospital elevators, Capsule lifts, and Structure elevators. German technology, ISO certified, custom solutions by Lubeck Elevators.',
  keywords: [
    'elevator products',
    'lift products India',
    'passenger elevators',
    'home lifts',
    'goods elevators',
    'hospital elevators',
    'capsule lifts',
    'structure elevators',
    'elevator product range',
    'premium elevator solutions',
    'luxury elevator products',
    'commercial elevators',
    'residential elevators',
    'industrial elevators',
    'elevator types',
    'elevator categories',
    'custom elevator solutions',
    'German technology elevators',
    'ISO certified elevators',
    'elevator manufacturers India',
    'elevator product catalog',
    'elevator systems',
    'vertical transportation solutions',
    'elevator technology'
  ],
  openGraph: {
    title: 'Elevator Products | Premium Lifts & Elevators | Lubeck Elevators',
    description: 'Explore our complete range of premium elevator products with German technology and ISO certification.',
    url: 'https://lubeckelevators.com/products',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Premium Elevator Products',
      },
    ],
  },
  twitter: {
    title: 'Elevator Products | Premium Lifts & Elevators | Lubeck Elevators',
    description: 'Explore our complete range of premium elevator products with German technology and ISO certification.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products',
  },
};

const productsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lubeck Elevators Product Range',
  description: 'Complete collection of premium elevator products including passenger, home, goods, hospital, capsule, and structure elevators.',
  url: 'https://lubeckelevators.com/products',
  about: {
    '@type': 'ProductCategory',
    name: 'Elevators and Vertical Transportation Systems'
  },
  mainEntity: {
    '@type': 'ItemList',
    name: 'Elevator Product Categories',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Passenger Elevators',
        description: 'Safe, reliable, and stylish passenger elevators for residential and commercial buildings',
        url: 'https://lubeckelevators.com/products/passenger',
        item: {
          '@type': 'Product',
          name: 'Passenger Elevators',
          category: 'Commercial & Residential Elevators'
        }
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Home Lifts',
        description: 'Luxury home elevators bringing convenience and style to private residences',
        url: 'https://lubeckelevators.com/products/home',
        item: {
          '@type': 'Product',
          name: 'Home Lifts',
          category: 'Residential Elevators'
        }
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Goods Elevators',
        description: 'Heavy-duty freight elevators for industrial and commercial applications',
        url: 'https://lubeckelevators.com/products/goods',
        item: {
          '@type': 'Product',
          name: 'Goods Elevators',
          category: 'Industrial Elevators'
        }
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Hospital Elevators',
        description: 'Specialized elevators for healthcare facilities with patient safety focus',
        url: 'https://lubeckelevators.com/products/hospital',
        item: {
          '@type': 'Product',
          name: 'Hospital Elevators',
          category: 'Medical Facility Elevators'
        }
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Capsule Lifts',
        description: 'Panoramic glass elevators adding architectural elegance to buildings',
        url: 'https://lubeckelevators.com/products/capsule',
        item: {
          '@type': 'Product',
          name: 'Capsule Lifts',
          category: 'Architectural Elevators'
        }
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Structure Lifts',
        description: 'Self-supporting elevator structures for retrofit and external installations',
        url: 'https://lubeckelevators.com/products/structure',
        item: {
          '@type': 'Product',
          name: 'Structure Lifts',
          category: 'Retrofit Elevators'
        }
      }
    ]
  },
  breadcrumb: {
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
      }
    ]
  }
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
      />
      <ProductsLayoutClient>
        {children}
      </ProductsLayoutClient>
    </>
  );
} 