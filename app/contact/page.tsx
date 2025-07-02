import type { Metadata } from 'next';
import ContactPageClient from '../components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Lubeck Elevators Delhi | Get Free Quote | Elevator Installation & Service',
  description: 'Contact Lubeck Elevators for premium elevator installation in Delhi, Noida, Gurugram, Faridabad. Get free consultation and quote. Call +91-9811013981, +91-9310465077. Head office: A-264, Surajmal Vihar, Delhi 110092. Email: lubeckelevator@gmail.com',
  keywords: [
    'contact Lubeck Elevators',
    'elevator installation Delhi',
    'elevator company contact Delhi',
    'elevator service Delhi NCR',
    'elevator installation Noida',
    'elevator company Gurugram',
    'elevator service Faridabad',
    'elevator quote Delhi',
    'elevator consultation Delhi',
    'elevator repair Delhi',
    'elevator maintenance Delhi',
    'lift installation Delhi',
    'home lift installation Delhi',
    'commercial elevator Delhi',
    'elevator company near me',
    'Surajmal Vihar elevator company',
    'Delhi elevator manufacturer contact',
    'elevator emergency service Delhi',
    'elevator AMC Delhi',
    'passenger elevator Delhi'
  ],
  openGraph: {
    title: 'Contact Lubeck Elevators Delhi | Get Free Quote | Elevator Installation & Service',
    description: 'Contact Lubeck Elevators for premium elevator installation in Delhi, Noida, Gurugram, Faridabad. Get free consultation and quote.',
    url: 'https://lubeckelevators.com/contact',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Contact Lubeck Elevators - Premium Elevator Services',
      },
    ],
  },
  twitter: {
    title: 'Contact Lubeck Elevators Delhi | Get Free Quote | Elevator Installation & Service',
    description: 'Contact Lubeck Elevators for premium elevator installation in Delhi, Noida, Gurugram, Faridabad. Get free consultation.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/contact',
  },
};

const contactPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Lubeck Elevators',
  description: 'Get in touch with Lubeck Elevators for premium elevator installation, maintenance, and repair services across Delhi NCR.',
  url: 'https://lubeckelevators.com/contact',
  mainEntity: {
    '@type': 'LocalBusiness',
    '@id': 'https://lubeckelevators.com/#organization',
    name: 'Lubeck Elevators',
    alternateName: 'Lubeck Elevators India',
    description: 'Premium elevator manufacturer and service provider in Delhi NCR specializing in luxury elevators, home lifts, and commercial elevator solutions.',
    url: 'https://lubeckelevators.com',
    telephone: ['+91-9811013981', '+91-9310465077'],
    email: 'LUBECKELEVATOR@GMAIL.COM',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'A 264, SURAJMAL VIHAR',
      addressLocality: 'Delhi',
      addressRegion: 'Delhi',
      postalCode: '110092',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 28.6139,
      longitude: 77.2090
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Delhi',
        containsPlace: [
          { '@type': 'City', name: 'New Delhi' },
          { '@type': 'City', name: 'Delhi' }
        ]
      },
      {
        '@type': 'State',
        name: 'Haryana',
        containsPlace: [
          { '@type': 'City', name: 'Gurugram' },
          { '@type': 'City', name: 'Faridabad' }
        ]
      },
      {
        '@type': 'State',
        name: 'Uttar Pradesh',
        containsPlace: [
          { '@type': 'City', name: 'Noida' },
          { '@type': 'City', name: 'Ghaziabad' }
        ]
      },
      {
        '@type': 'State',
        name: 'Rajasthan',
        containsPlace: [
          { '@type': 'City', name: 'Jodhpur' }
        ]
      },
      {
        '@type': 'State',
        name: 'Himachal Pradesh',
        containsPlace: [
          { '@type': 'City', name: 'Manali' }
        ]
      },
      {
        '@type': 'State',
        name: 'Uttarakhand',
        containsPlace: [
          { '@type': 'City', name: 'Haldwani' }
        ]
      }
    ],
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: '₹₹₹',
    paymentAccepted: ['Cash', 'Bank Transfer', 'Cheque'],
    currenciesAccepted: 'INR',
    hasMap: 'https://maps.google.com/?q=A+264,+SURAJMAL+VIHAR,+DELHI+110092',
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 28.6139,
        longitude: 77.2090
      },
      geoRadius: '500000'
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
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://lubeckelevators.com/contact'
      }
    ]
  }
};

const branchOfficesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Lubeck Elevators Branch Offices',
  itemListElement: [
    {
      '@type': 'LocalBusiness',
      name: 'Lubeck Elevators - Noida Branch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Noida Sector 135',
        addressRegion: 'Uttar Pradesh',
        addressCountry: 'IN'
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Lubeck Elevators'
      }
    },
    {
      '@type': 'LocalBusiness',
      name: 'Lubeck Elevators - Gurugram Branch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Gurugram',
        addressRegion: 'Haryana',
        addressCountry: 'IN'
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Lubeck Elevators'
      }
    },
    {
      '@type': 'LocalBusiness',
      name: 'Lubeck Elevators - Faridabad Branch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Faridabad',
        addressRegion: 'Haryana',
        addressCountry: 'IN'
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Lubeck Elevators'
      }
    },
    {
      '@type': 'LocalBusiness',
      name: 'Lubeck Elevators - Jodhpur Branch',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Jodhpur',
        addressRegion: 'Rajasthan',
        addressCountry: 'IN'
      },
      parentOrganization: {
        '@type': 'Organization',
        name: 'Lubeck Elevators'
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(branchOfficesJsonLd) }}
      />
      <ContactPageClient />
    </>
  );
} 