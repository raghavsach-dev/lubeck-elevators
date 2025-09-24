import type { Metadata } from 'next';
import TeamPrivacyPageClient from '@/app/components/TeamPrivacyPageClient';

export const metadata: Metadata = {
  title: 'Lubeck Elevators Team Privacy Policy | Internal App Data Protection',
  description: 'Privacy Policy for Lubeck Elevators Team mobile app. Learn how we collect, use, and protect your personal information for internal team operations and project management. GDPR compliant.',
  keywords: [
    'Lubeck Elevators Team privacy policy',
    'internal team app privacy',
    'project management app privacy',
    'elevator installation team privacy',
    'mobile app data protection',
    'GDPR compliance team app',
    'firebase privacy policy',
    'cloudinary privacy policy',
    'airtable privacy policy',
    'internal employee data protection'
  ],
  openGraph: {
    title: 'Lubeck Elevators Team Privacy Policy | Internal App Data Protection',
    description: 'Privacy Policy for Lubeck Elevators Team mobile app for internal operations and project management.',
    url: 'https://lubeckelevators.com/privacy/team',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators Team Privacy Policy',
      },
    ],
  },
  twitter: {
    title: 'Lubeck Elevators Team Privacy Policy | Internal App Data Protection',
    description: 'Privacy Policy for Lubeck Elevators Team mobile app and internal data protection practices.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/privacy/team',
  },
  robots: {
    index: false, // This page should not be indexed as it's link-only
    follow: false,
  },
};

const teamPrivacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators Team Privacy Policy',
  description: 'Privacy Policy for Lubeck Elevators Team mobile application explaining data collection, usage, and protection practices for internal operations.',
  url: 'https://lubeckelevators.com/privacy/team',
  inLanguage: 'en-IN',
  about: {
    '@type': 'SoftwareApplication',
    name: 'Lubeck Elevators Team',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, iOS',
    description: 'Internal mobile application for team operations and project management'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  }
};

export default function TeamPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamPrivacyJsonLd) }}
      />
      <TeamPrivacyPageClient />
    </>
  );
}
