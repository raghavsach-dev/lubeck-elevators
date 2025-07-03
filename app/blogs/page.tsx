import type { Metadata } from 'next';
import BlogPageClient from '@/app/components/BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | Lubeck Elevators - Insights & News',
  description: 'Read the official blog of Lubeck Elevators. Get insights on elevator technology, safety, maintenance tips, and why Lubeck is the premier choice for premium elevators in India. Stay updated with our latest articles and news.',
  keywords: [
    'elevator blog',
    'elevator technology blog',
    'elevator safety tips',
    'elevator maintenance guide',
    'premium elevator insights',
    'luxury elevator news',
    'why choose Lubeck Elevators',
    'elevator industry trends',
    'home lift articles',
    'passenger elevator news',
    'commercial elevator blog',
    'elevator modernization tips',
    'German elevator technology',
    'elevator company blog',
    'elevator case studies',
    'elevator project showcase'
  ],
  openGraph: {
    title: 'Blog | Lubeck Elevators - Insights & News',
    description: 'Read the official blog of Lubeck Elevators for insights on elevator technology, safety, and maintenance tips.',
    url: 'https://lubeckelevators.com/blogs',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators Blog',
      },
    ],
  },
  twitter: {
    title: 'Blog | Lubeck Elevators - Insights & News',
    description: 'Read the official blog of Lubeck Elevators for insights on elevator technology, safety, and maintenance tips.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/blogs',
  },
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
      name: 'Blogs',
      item: 'https://lubeckelevators.com/blogs'
    }
  ]
};

export default function BlogsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogPageClient />
    </>
  );
} 