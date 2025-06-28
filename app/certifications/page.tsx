import type { Metadata } from 'next';
import CertificationsPageLoader from '@/app/components/CertificationsPageLoader';

export const metadata: Metadata = {
  title: 'Certifications | Lubeck Elevators',
  description: 'View our certifications that reflect our commitment to quality, safety, and environmental standards, including ISO and LEED.',
};

export default function CertificationsPage() {
    return <CertificationsPageLoader />;
} 