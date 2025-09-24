import type { Metadata } from 'next';
import DigitalPrivacyPageClient from '@/app/components/DigitalPrivacyPageClient';

export const metadata: Metadata = {
  title: 'Lubeck Elevators Digital Privacy Policy | Mobile App Data Protection',
  description: 'Privacy Policy for Lubeck Elevators Digital mobile app. Learn how we collect, use, and protect your personal information when using our elevator management app. GDPR compliant data practices.',
  keywords: [
    'Lubeck Elevators Digital privacy policy',
    'elevator app privacy',
    'mobile app data protection',
    'GDPR compliance elevators',
    'elevator maintenance app privacy',
    'complaint management privacy',
    'firebase data privacy',
    'cloudinary privacy policy',
    'Indian data protection laws',
    'elevator app GDPR',
    'personal data protection',
    'mobile app security'
  ],
  openGraph: {
    title: 'Lubeck Elevators Digital Privacy Policy | Mobile App Data Protection',
    description: 'Privacy Policy for Lubeck Elevators Digital mobile app. Learn how we protect your data and comply with privacy regulations.',
    url: 'https://lubeckelevators.com/privacy/digital',
    images: [
      {
        url: '/logo-og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators Digital Privacy Policy',
      },
    ],
  },
  twitter: {
    title: 'Lubeck Elevators Digital Privacy Policy | Mobile App Data Protection',
    description: 'Privacy Policy for Lubeck Elevators Digital mobile app and data protection practices.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/privacy/digital',
  },
  robots: {
    index: false, // This page should not be indexed as it's link-only
    follow: false,
  },
};

const digitalPrivacyJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators Digital Privacy Policy',
  description: 'Privacy Policy for Lubeck Elevators Digital mobile application explaining data collection, usage, and protection practices.',
  url: 'https://lubeckelevators.com/privacy/digital',
  inLanguage: 'en-IN',
  about: {
    '@type': 'SoftwareApplication',
    name: 'Lubeck Elevators Digital',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Android, iOS',
    description: 'Mobile application for elevator maintenance and complaint management'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  }
};

export default function DigitalPrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalPrivacyJsonLd) }}
      />
      <DigitalPrivacyPageClient />
    </>
  );
}
