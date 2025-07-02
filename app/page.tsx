import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Premium Elevators & Home Lifts in India | Lubeck Elevators - German Technology',
  description: 'Leading elevator manufacturer in India since 2009. Premium luxury elevators, home lifts, passenger, goods, hospital & capsule elevators with German technology. ISO certified. 1200+ projects delivered. Get free quote today!',
  keywords: [
    'elevators India',
    'home lifts India',
    'passenger elevators Delhi',
    'luxury elevators manufacturer',
    'elevator installation India',
    'German technology elevators',
    'ISO certified elevators',
    'elevator company Delhi',
    'premium lifts India',
    'commercial elevators',
    'residential elevators',
    'elevator maintenance India',
    'capsule lifts',
    'hospital elevators',
    'goods elevators India'
  ],
  openGraph: {
    title: 'Premium Elevators & Home Lifts in India | Lubeck Elevators - German Technology',
    description: 'Leading elevator manufacturer in India since 2009. Premium luxury elevators with German technology. 1200+ projects delivered. ISO certified quality.',
    url: 'https://lubeckelevators.com',
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
    title: 'Premium Elevators & Home Lifts in India | Lubeck Elevators - German Technology',
    description: 'Leading elevator manufacturer in India since 2009. Premium luxury elevators with German technology. 1200+ projects delivered.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com',
  },
};

const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators - Premium Elevator Solutions',
  description: 'Leading elevator manufacturer in India specializing in luxury passenger, home, goods, hospital, and capsule elevators with German technology since 2009.',
  url: 'https://lubeckelevators.com',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    slogan: 'Lifting With Luxury Since 2009',
    description: 'Premium elevator manufacturer in India with over 1200 successful installations',
    foundingDate: '2009',
    numberOfEmployees: '50-100',
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Elevator Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Passenger Elevators',
            description: 'Safe, reliable, and stylish passenger elevators for residential and commercial buildings'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Lifts',
            description: 'Luxury home elevators bringing convenience and style to private residences'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Goods Elevators',
            description: 'Heavy-duty freight elevators for industrial and commercial applications'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Hospital Elevators',
            description: 'Specialized elevators for healthcare facilities with patient safety focus'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Capsule Lifts',
            description: 'Panoramic glass elevators adding architectural elegance to buildings'
          }
        }
      ]
    }
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://lubeckelevators.com'
      }
    ]
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
