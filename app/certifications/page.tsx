import CertificationsPageLoader from '@/app/components/CertificationsPageLoader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ISO Certifications | Quality Standards | Lubeck Elevators',
  description: 'View Lubeck Elevators ISO certifications: ISO 9001:2015 QMS, ISO 14001:2015 EMS, ISO 45001:2018 OHSMS, LEED Gold certification. Quality assured elevator manufacturer with international standards compliance in India.',
  keywords: [
    'ISO certified elevator company',
    'ISO 9001 2015 elevators',
    'ISO 14001 2015 elevator manufacturer',
    'ISO 45001 2018 elevator company',
    'LEED Gold certified elevators',
    'quality management system elevators',
    'environmental management elevators',
    'occupational health safety elevators',
    'certified elevator manufacturer India',
    'quality standards elevators',
    'international certification elevators',
    'QMS certified elevator company',
    'EMS certified elevators',
    'OHSMS certified elevator manufacturer',
    'green building certified elevators',
    'quality assurance elevators',
    'safety certified elevators',
    'environment friendly elevators'
  ],
  openGraph: {
    title: 'ISO Certifications | Quality Standards | Lubeck Elevators',
    description: 'View Lubeck Elevators ISO certifications: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, LEED Gold. Quality assured elevator manufacturer.',
    url: 'https://lubeckelevators.com/certifications',
    images: [
      {
        url: '/Certifications/Lubeck-iso-9001-2015-qms.pdf',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators ISO Certifications',
      },
    ],
  },
  twitter: {
    title: 'ISO Certifications | Quality Standards | Lubeck Elevators',
    description: 'View Lubeck Elevators ISO certifications: ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, LEED Gold.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/certifications',
  },
};

const certificationsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lubeck Elevators Certifications',
  description: 'International quality, environmental, and safety certifications held by Lubeck Elevators demonstrating our commitment to excellence.',
  url: 'https://lubeckelevators.com/certifications',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System',
        credentialCategory: 'Quality Management',
        educationalLevel: 'Professional Certification',
        competencyRequired: 'Quality Management Systems Implementation',
        description: 'International standard for Quality Management Systems ensuring consistent quality in elevator manufacturing and services.'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 14001:2015 Environmental Management System',
        credentialCategory: 'Environmental Management',
        educationalLevel: 'Professional Certification',
        competencyRequired: 'Environmental Management Systems',
        description: 'International standard for Environmental Management Systems demonstrating commitment to environmental responsibility.'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 45001:2018 Occupational Health and Safety Management',
        credentialCategory: 'Safety Management',
        educationalLevel: 'Professional Certification',
        competencyRequired: 'Occupational Health and Safety Management',
        description: 'International standard for Occupational Health and Safety Management Systems ensuring workplace safety.'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'LEED Gold Green Building Certification',
        credentialCategory: 'Sustainability',
        educationalLevel: 'Professional Certification',
        competencyRequired: 'Green Building Practices',
        description: 'Leadership in Energy and Environmental Design Gold certification for sustainable building practices.'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Integrated QMS, EMS & OHSMS Certification',
        credentialCategory: 'Integrated Management Systems',
        educationalLevel: 'Professional Certification',
        competencyRequired: 'Integrated Management Systems',
        description: 'Unified certification covering Quality, Environmental, and Occupational Health & Safety Management Systems.'
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
        name: 'Certifications',
        item: 'https://lubeckelevators.com/certifications'
      }
    ]
  }
};

const CertificationsPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(certificationsJsonLd) }}
      />
      <CertificationsPageLoader />
    </>
  );
};

export default CertificationsPage; 