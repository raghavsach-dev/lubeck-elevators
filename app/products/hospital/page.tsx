import type { Metadata } from 'next';
import HospitalPageClient from '@/app/components/HospitalPageClient';

export const metadata: Metadata = {
  title: 'Hospital Elevators India | Medical Facility Lifts | Lubeck Elevators',
  description: 'Specialized hospital elevators for medical facilities in India. Patient-safe, stretcher-compatible, hygienic elevators with priority call systems. Smooth, reliable hospital lifts for healthcare buildings by Lubeck Elevators. Get medical elevator quote today!',
  keywords: [
    'hospital elevators India',
    'medical facility elevators',
    'healthcare elevators',
    'hospital lifts India',
    'medical center elevators',
    'clinic elevators',
    'stretcher elevators',
    'patient elevators',
    'medical equipment elevators',
    'hospital passenger elevators',
    'healthcare facility lifts',
    'medical building elevators',
    'hospital elevator installation',
    'medical elevator maintenance',
    'hospital elevator safety',
    'healthcare elevator systems',
    'medical center lifts',
    'hospital elevator manufacturers',
    'priority call elevators',
    'hygienic elevators',
    'smooth ride hospital elevators',
    'medical facility lifts Delhi',
    'hospital elevators Mumbai',
    'healthcare elevators Bangalore',
    'nursing home elevators'
  ],
  openGraph: {
    title: 'Hospital Elevators India | Medical Facility Lifts | Lubeck Elevators',
    description: 'Specialized hospital elevators for medical facilities. Patient-safe, stretcher-compatible, hygienic elevators with priority call systems.',
    url: 'https://lubeckelevators.com/products/hospital',
    images: [
      {
        url: '/Products/Hospital/1.png',
        width: 1200,
        height: 630,
        alt: 'Lubeck Hospital Elevators - Medical Facility Lifts',
      },
    ],
  },
  twitter: {
    title: 'Hospital Elevators India | Medical Facility Lifts | Lubeck Elevators',
    description: 'Specialized hospital elevators for medical facilities. Patient-safe, stretcher-compatible, hygienic elevators.',
  },
  alternates: {
    canonical: 'https://lubeckelevators.com/products/hospital',
  },
};

const hospitalElevatorJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Hospital Elevators',
  alternateName: ['Medical Facility Elevators', 'Healthcare Elevators', 'Patient Elevators'],
  description: 'Specialized elevators designed for healthcare facilities with features for patient safety, stretcher accommodation, and medical equipment transport.',
  category: 'Medical Elevator',
  brand: {
    '@type': 'Brand',
    name: 'Lubeck Elevators'
  },
  manufacturer: {
    '@type': 'Organization',
    name: 'Lubeck Elevators',
    url: 'https://lubeckelevators.com'
  },
  url: 'https://lubeckelevators.com/products/hospital',
  image: [
    'https://lubeckelevators.com/Products/Hospital/1.png',
    'https://lubeckelevators.com/Products/Hospital/2.png',
    'https://lubeckelevators.com/Products/Hospital/3.png'
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'INR',
    priceValidUntil: '2025-12-31',
    seller: {
      '@type': 'Organization',
      name: 'Lubeck Elevators'
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    }
  },
  additionalProperty: [
    {
      '@type': 'PropertyValue',
      name: 'Cabin Size',
      value: 'Spacious to accommodate stretchers and medical equipment'
    },
    {
      '@type': 'PropertyValue',
      name: 'Safety Features',
      value: 'Priority call systems, emergency communication, smooth operation'
    },
    {
      '@type': 'PropertyValue',
      name: 'Hygiene',
      value: 'Easy-to-clean surfaces, antimicrobial materials'
    },
    {
      '@type': 'PropertyValue',
      name: 'Compliance',
      value: 'Meets all healthcare facility safety and accessibility standards'
    },
    {
      '@type': 'PropertyValue',
      name: 'Operation',
      value: 'Jerk-free, smooth ride for patient comfort'
    }
  ],
  audience: {
    '@type': 'BusinessAudience',
    name: 'Hospitals, Medical Centers, Clinics, Healthcare Facilities'
  },
  applicationCategory: 'Healthcare Facility Equipment'
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
      name: 'Products',
      item: 'https://lubeckelevators.com/products'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Hospital Elevators',
      item: 'https://lubeckelevators.com/products/hospital'
    }
  ]
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What makes hospital elevators different from regular passenger elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hospital elevators are designed with larger cabins to accommodate stretchers and medical equipment, priority call systems for emergencies, smooth jerk-free operation for patient comfort, and hygienic easy-to-clean surfaces.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can hospital elevators accommodate wheelchairs and stretchers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our hospital elevators are specifically designed with spacious cabins to easily accommodate wheelchairs, stretchers, medical equipment, and accompanying medical staff.'
      }
    },
    {
      '@type': 'Question',
      name: 'What safety features are included in hospital elevators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hospital elevators include priority call systems for emergencies, backup power systems, emergency communication, door sensors, smooth operation for patient safety, and compliance with all healthcare facility standards.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are hospital elevators suitable for infection control?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our hospital elevators feature easy-to-clean stainless steel surfaces, antimicrobial materials where applicable, and designs that facilitate proper hygiene maintenance in healthcare environments.'
      }
    }
  ]
};

export default function HospitalElevatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hospitalElevatorJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HospitalPageClient />
    </>
  );
} 