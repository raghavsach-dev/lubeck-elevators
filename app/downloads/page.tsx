import type { Metadata } from 'next';
import DownloadsPageClient from '@/app/components/DownloadsPageClient';

export const metadata: Metadata = {
  title: 'Mobile Apps | Lubeck Elevators Digital & Team Apps | Download Now',
  description: 'Download our official mobile apps: Lubeck Elevators Digital for customers and Lubeck Elevators Team for our staff. Available on iOS App Store and Google Play Store.',
  keywords: [
    'lubeck elevators app',
    'elevator mobile app',
    'lubeck digital app',
    'lubeck team app',
    'elevator customer app',
    'elevator team app',
    'download lubeck app',
    'ios elevator app',
    'android elevator app',
    'elevator app store',
    'google play elevator',
    'mobile elevator app',
    'lubeck elevators mobile',
    'digital elevator app',
    'team elevator app'
  ],
  openGraph: {
    title: 'Mobile Apps | Lubeck Elevators Digital & Team Apps | Download Now',
    description: 'Download our official mobile apps for customers and team members. Enhanced experience for elevator services.',
    url: 'https://lubeckelevators.com/downloads',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Mobile Apps',
      },
    ],
  },
  twitter: {
    title: 'Mobile Apps | Lubeck Elevators Digital & Team Apps | Download Now',
    description: 'Download our official mobile apps for customers and team members.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/downloads',
  },
};

const downloadsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators Mobile Apps',
  description: 'Download our official mobile applications for customers and team members.',
  url: 'https://lubeckelevators.com/downloads',
  mainEntity: {
    '@type': 'ItemList',
    name: 'Mobile Applications',
    description: 'Official mobile apps for Lubeck Elevators customers and team members.',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Lubeck Elevators Digital',
        description: 'Customer mobile app for exploring products, requesting quotes, and tracking installations'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Lubeck Elevators Team',
        description: 'Internal team application for project management and technical documentation access'
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
        name: 'Downloads',
        item: 'https://lubeckelevators.com/downloads'
      }
    ]
  }
};

export default function DownloadsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadsJsonLd) }}
      />
      <DownloadsPageClient />
    </>
  );
}
