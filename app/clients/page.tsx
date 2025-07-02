import type { Metadata } from 'next';
import ClientsPageClient from '@/app/components/ClientsPageClient';

export const metadata: Metadata = {
  title: 'Our Clients & Partners | Trusted Elevator Solutions | Lubeck Elevators',
  description: 'Meet our esteemed clients and global partners: GD Goenka School, GNIOT Group, Bikanerwala, Clarks Inn, Rising Group. Global collaborations with Fermator, Marazzi, Montanari Group. Trusted elevator solutions by Lubeck Elevators.',
  keywords: [
    'Lubeck Elevators clients',
    'elevator installation clients',
    'GD Goenka School elevators',
    'GNIOT Group elevators',
    'Bikanerwala elevator installation',
    'Clarks Inn hotel elevators',
    'Rising Group elevators',
    'VP Electronics elevators',
    'Gyaananada School elevators',
    'elevator company clients',
    'commercial elevator clients',
    'residential elevator clients',
    'elevator partnerships',
    'Fermator elevator doors',
    'Marazzi elevator materials',
    'Montanari Group elevators',
    'elevator component suppliers',
    'global elevator partnerships',
    'premium elevator clients',
    'luxury elevator installations',
    'trusted elevator solutions',
    'elevator client testimonials',
    'successful elevator projects',
    'elevator industry partnerships'
  ],
  openGraph: {
    title: 'Our Clients & Partners | Trusted Elevator Solutions | Lubeck Elevators',
    description: 'Meet our esteemed clients and global partners. Trusted elevator solutions for leading brands and organizations.',
    url: 'https://lubeckelevators.com/clients',
    images: [
      {
        url: '/Clientage/Clients/GD_Goenka.png',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Our Esteemed Clients',
      },
    ],
  },
  twitter: {
    title: 'Our Clients & Partners | Trusted Elevator Solutions | Lubeck Elevators',
    description: 'Meet our esteemed clients and global partners. Trusted elevator solutions for leading brands.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/clients',
  },
};

const clientsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators Clients and Partners',
  description: 'Showcase of our esteemed clients and global partnerships demonstrating trust and quality in elevator solutions.',
  url: 'https://lubeckelevators.com/clients',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    hasPartner: [
      {
        '@type': 'Organization',
        name: 'GD Goenka School',
        description: 'Leading educational institution known for its modern infrastructure',
        url: 'https://www.gdgoenka.com'
      },
      {
        '@type': 'Organization',
        name: 'GNIOT Group',
        description: 'A premier hub for technical and management education',
        url: 'https://www.gniotgroup.edu.in'
      },
      {
        '@type': 'Organization',
        name: 'Bikanerwala',
        description: 'Iconic brand for traditional Indian sweets and cuisine',
        url: 'https://www.bikanervala.com'
      },
      {
        '@type': 'Organization',
        name: 'Clarks Inn',
        description: 'Distinguished name in the hospitality sector, offering luxury stays',
        url: 'https://www.clarksinn.com'
      },
      {
        '@type': 'Organization',
        name: 'Rising Group',
        description: 'Prominent real estate developers creating landmark properties'
      }
    ],
    worksWith: [
      {
        '@type': 'Organization',
        name: 'Fermator',
        description: 'Global leader in manufacturing automatic elevator doors',
        specialty: 'Elevator Door Systems'
      },
      {
        '@type': 'Organization',
        name: 'Marazzi',
        description: 'World-renowned brand for premium ceramic and porcelain tiles',
        specialty: 'Elevator Interior Materials'
      },
      {
        '@type': 'Organization',
        name: 'Montanari Group',
        description: 'Leading producers of gearboxes, motors, and components for elevators',
        specialty: 'Elevator Mechanical Components'
      },
      {
        '@type': 'Organization',
        name: 'NBSL',
        description: 'Specialists in elevator safety and braking systems',
        specialty: 'Elevator Safety Systems'
      },
      {
        '@type': 'Organization',
        name: 'Torin Drive',
        description: 'Global supplier of elevator traction machines and motors',
        specialty: 'Elevator Drive Systems'
      }
    ]
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
      name: 'Clients',
      item: 'https://lubeckelevators.com/clients'
    }
  ]
};

export default function ClientsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clientsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ClientsPageClient />
    </>
  );
} 