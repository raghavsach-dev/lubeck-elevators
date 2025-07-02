import type { Metadata } from 'next';
import VideosPageClient from '@/app/components/VideosPageClient';

export const metadata: Metadata = {
  title: 'Elevator Videos | See Our Elevators in Action | Lubeck Elevators',
  description: 'Watch our premium elevator videos showcasing smooth operation, elegant designs, and luxury finishes. See Presidential Rose Gold Design, Transparent Rose Gold Lift, and more elevator demonstrations by Lubeck Elevators.',
  keywords: [
    'elevator videos',
    'elevator demonstrations',
    'luxury elevator videos',
    'elevator operation videos',
    'elevator design videos',
    'presidential elevator design',
    'rose gold elevator videos',
    'transparent elevator videos',
    'panoramic elevator videos',
    'elevator showcase videos',
    'premium elevator videos',
    'elevator installation videos',
    'elevator performance videos',
    'smooth elevator operation',
    'elevator technology videos',
    'luxury lift videos',
    'elevator testimonials',
    'elevator product videos',
    'elevator features videos',
    'elevator gallery videos',
    'modern elevator videos',
    'elevator engineering videos',
    'elevator safety videos',
    'elevator efficiency videos'
  ],
  openGraph: {
    title: 'Elevator Videos | See Our Elevators in Action | Lubeck Elevators',
    description: 'Watch our premium elevator videos showcasing smooth operation, elegant designs, and luxury finishes. See Presidential Rose Gold Design and more.',
    url: 'https://lubeckelevators.com/videos',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - Premium Elevator Videos',
      },
    ],
    type: 'video.other',
  },
  twitter: {
    title: 'Elevator Videos | See Our Elevators in Action | Lubeck Elevators',
    description: 'Watch our premium elevator videos showcasing smooth operation, elegant designs, and luxury finishes.',
    card: 'player',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/videos',
  },
};

const videosJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'VideoGallery',
  name: 'Lubeck Elevators Video Gallery',
  description: 'Collection of videos showcasing our premium elevators in operation, design features, and luxury finishes.',
  url: 'https://lubeckelevators.com/videos',
  author: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    logo: {
      '@type': 'ImageObject',
      url: 'https://lubeckelevators.com/logo.jpeg'
    }
  },
  hasPart: [
    {
      '@type': 'VideoObject',
      name: 'Presidential Rose Gold Design',
      description: 'The epitome of elegance. Our Presidential suite cabin in a stunning rose gold finish, combining technology and artistry.',
      thumbnailUrl: 'https://img.youtube.com/vi/uuFONTS2xEM/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/uuFONTS2xEM',
      contentUrl: 'https://www.youtube.com/watch?v=uuFONTS2xEM',
      uploadDate: '2023-01-01',
      duration: 'PT3M',
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/WatchAction',
        userInteractionCount: 1000
      }
    },
    {
      '@type': 'VideoObject',
      name: 'Transparent Rose Gold Lift',
      description: 'A breathtaking panoramic elevator with rose gold accents, offering stunning views and a futuristic feel.',
      thumbnailUrl: 'https://img.youtube.com/vi/nASX_0NIhMA/maxresdefault.jpg',
      embedUrl: 'https://www.youtube.com/embed/nASX_0NIhMA',
      contentUrl: 'https://www.youtube.com/watch?v=nASX_0NIhMA',
      uploadDate: '2023-01-01',
      duration: 'PT2M30S',
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'https://schema.org/WatchAction',
        userInteractionCount: 800
      }
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
      name: 'Videos',
      item: 'https://lubeckelevators.com/videos'
    }
  ]
};

export default function VideosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videosJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <VideosPageClient />
    </>
  );
} 