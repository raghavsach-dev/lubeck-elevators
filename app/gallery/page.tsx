import type { Metadata } from 'next';
import GalleryPageClient from '@/app/components/GalleryPageClient';

export const metadata: Metadata = {
  title: 'Elevator Gallery | Luxury Elevator Designs | Lubeck Elevators',
  description: 'Browse our stunning elevator gallery showcasing luxury elevator designs: Majesty, Imperial Gold, Prestige & Classic collections. Premium elevator interiors, cabin designs, and finishes by Lubeck Elevators. Get design inspiration for your elevator project.',
  keywords: [
    'elevator gallery',
    'luxury elevator designs',
    'elevator interior designs',
    'elevator cabin designs',
    'premium elevator finishes',
    'elevator design gallery',
    'luxury elevator interiors',
    'elevator design inspiration',
    'custom elevator designs',
    'elevator cabin finishes',
    'modern elevator designs',
    'classic elevator designs',
    'gold elevator finishes',
    'prestige elevator designs',
    'majesty elevator collection',
    'imperial gold elevators',
    'elevator design portfolio',
    'luxury lift designs India',
    'premium elevator aesthetics',
    'elevator interior gallery',
    'bespoke elevator designs',
    'elegant elevator cabins',
    'sophisticated elevator interiors',
    'elevator design showcase'
  ],
  openGraph: {
    title: 'Elevator Gallery | Luxury Elevator Designs | Lubeck Elevators',
    description: 'Browse our stunning elevator gallery showcasing luxury elevator designs: Majesty, Imperial Gold, Prestige & Classic collections.',
    url: 'https://lubeckelevators.com/gallery',
    images: [
      {
        url: '/Gallery/MAJESTY/2.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Luxury Elevator Design Gallery',
      },
    ],
  },
  twitter: {
    title: 'Elevator Gallery | Luxury Elevator Designs | Lubeck Elevators',
    description: 'Browse our stunning elevator gallery showcasing luxury elevator designs: Majesty, Imperial Gold, Prestige & Classic collections.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/gallery',
  },
};

const galleryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'Lubeck Elevators Design Gallery',
  description: 'Showcase of luxury elevator designs and premium cabin interiors featuring various collections and finishes.',
  url: 'https://lubeckelevators.com/gallery',
  author: {
    '@type': 'Organization',
    name: 'Lubeck Elevators'
  },
  about: {
    '@type': 'Thing',
    name: 'Luxury Elevator Designs',
    description: 'Premium elevator interior designs and cabin finishes'
  },
  hasPart: [
    {
      '@type': 'ImageObject',
      name: 'Majesty Collection',
      description: 'Dark & handsome designs with deep wood tones and subtle lighting for a classy ride',
      url: 'https://lubeckelevators.com/Gallery/MAJESTY/2.jpg',
      contentUrl: 'https://lubeckelevators.com/Gallery/MAJESTY/2.jpg',
      caption: 'Majesty Collection - Premium elevator interior design'
    },
    {
      '@type': 'ImageObject',
      name: 'Imperial Gold Edition',
      description: 'Pure opulence with golden finishes for the ultimate luxury experience',
      url: 'https://lubeckelevators.com/Gallery/IMPERIAL_GOLD_EDITION/1.jpg',
      contentUrl: 'https://lubeckelevators.com/Gallery/IMPERIAL_GOLD_EDITION/1.jpg',
      caption: 'Imperial Gold Edition - Luxury golden elevator interiors'
    },
    {
      '@type': 'ImageObject',
      name: 'Prestige Edition',
      description: 'Sleek & stylish contemporary designs with modern aesthetics',
      url: 'https://lubeckelevators.com/Gallery/PRESTIGE_EDITION/Picture1.png',
      contentUrl: 'https://lubeckelevators.com/Gallery/PRESTIGE_EDITION/Picture1.png',
      caption: 'Prestige Edition - Modern elevator design'
    },
    {
      '@type': 'ImageObject',
      name: 'Classic Edition',
      description: 'Timeless designs that never get old with warm finishes',
      url: 'https://lubeckelevators.com/Gallery/CLASSIC_EDITION/Picture1.png',
      contentUrl: 'https://lubeckelevators.com/Gallery/CLASSIC_EDITION/Picture1.png',
      caption: 'Classic Edition - Traditional elevator designs'
    }
  ]
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
      name: 'Gallery',
      item: 'https://lubeckelevators.com/gallery'
    }
  ]
};

export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galleryJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <GalleryPageClient />
    </>
  );
} 