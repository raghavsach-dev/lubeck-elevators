import type { Metadata } from 'next';
import AboutPageClient from '@/app/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Lubeck Elevators - Premium Elevator Manufacturer India | Founded 2009',
  description: 'Learn about Lubeck Elevators, India\'s leading premium elevator manufacturer since 2009. Founded by Mr. Parveen Gupta with 15+ years experience. 1200+ projects delivered across India. ISO 9001, ISO 14001, ISO 45001 certified company with German technology.',
  keywords: [
    'about Lubeck Elevators',
    'elevator manufacturer India history',
    'Parveen Gupta elevator company',
    'ISO certified elevator company',
    'German technology elevators India',
    'elevator company founded 2009',
    'premium elevator manufacturer',
    'LEED Gold certified elevators',
    'elevator company Delhi history',
    'luxury elevator manufacturer India',
    'elevator installation company',
    'commercial elevator specialists',
    'residential elevator experts',
    'elevator maintenance services',
    'quality elevator manufacturer'
  ],
  openGraph: {
    title: 'About Lubeck Elevators - Premium Elevator Manufacturer India | Founded 2009',
    description: 'Premium elevator manufacturer since 2009. Founded by Mr. Parveen Gupta with 15+ years experience. 1200+ projects, ISO certified, German technology.',
    url: 'https://lubeckelevators.com/about',
    images: [
      {
        url: '/lift-sample.jpg',
        width: 1200,
        height: 630,
        alt: 'Lubeck Elevators - About Our Company',
      },
    ],
  },
  twitter: {
    title: 'About Lubeck Elevators - Premium Elevator Manufacturer India | Founded 2009',
    description: 'Premium elevator manufacturer since 2009. Founded by Mr. Parveen Gupta with 15+ years experience. 1200+ projects, ISO certified.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/about',
  },
};

const aboutPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'About Lubeck Elevators',
  description: 'Learn about Lubeck Elevators, premium elevator manufacturer in India since 2009 with German technology and ISO certifications.',
  url: 'https://lubeckelevators.com/about',
  mainEntity: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    foundingDate: '2009',
    founder: {
      '@type': 'Person',
      name: 'Mr. Parveen Gupta',
      jobTitle: 'Founder & CEO',
      worksFor: {
        '@type': 'Organization',
        name: 'Lubeck Elevators'
      }
    },
    description: 'Premium elevator manufacturer in India specializing in luxury passenger, home, goods, hospital, and capsule elevators with German technology.',
    numberOfEmployees: '50-100',
    yearlyRevenue: {
      '@type': 'QuantitativeValue',
      value: '10-50',
      unitCode: 'INR',
      unitText: 'Crores'
    },
    knowsAbout: [
      'Elevator Manufacturing',
      'German Technology Integration',
      'ISO Quality Standards',
      'Luxury Elevator Design',
      'Elevator Installation',
      'Elevator Maintenance',
      'Safety Systems',
      'Energy Efficient Elevators'
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 9001:2015 Quality Management System',
        credentialCategory: 'Quality Management'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 14001:2015 Environmental Management',
        credentialCategory: 'Environmental Management'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'ISO 45001:2018 Occupational Health & Safety',
        credentialCategory: 'Safety Management'
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'LEED Gold Green Building Certification',
        credentialCategory: 'Sustainability'
      }
    ],
    award: [
      'Government Certified Elevator Company',
      'Verified Business on Justdial',
      'Verified Business on Indiamart'
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
        name: 'About',
        item: 'https://lubeckelevators.com/about'
      }
    ]
  }
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When was Lubeck Elevators founded?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubeck Elevators was founded in 2009 by Mr. Parveen Gupta, making it one of India\'s established premium elevator manufacturers with over 14 years of experience.'
      }
    },
    {
      '@type': 'Question',
      name: 'How many projects has Lubeck Elevators completed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubeck Elevators has successfully delivered over 1200+ elevator installation projects across India, serving both residential and commercial clients.'
      }
    },
    {
      '@type': 'Question',
      name: 'What certifications does Lubeck Elevators have?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubeck Elevators holds multiple ISO certifications including ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), ISO 45001:2018 (Occupational Health & Safety), and LEED Gold certification for green building practices.'
      }
    },
    {
      '@type': 'Question',
      name: 'What makes Lubeck Elevators different from other elevator companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lubeck Elevators combines German technology with luxury design, offers customized solutions, maintenance-free operations, ultra-premium cabin interiors, and noise-free smooth rides. We are also government certified and verified on major business platforms.'
      }
    }
  ]
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <AboutPageClient />
    </>
  );
} 