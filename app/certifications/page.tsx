import CertificationsPageLoader from '@/app/components/CertificationsPageLoader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Certifications',
  description: 'Explore the certifications of Lubeck Elevators, showcasing our commitment to quality, safety, and environmental standards.',
};

const CertificationsPage = () => {
  return <CertificationsPageLoader />;
};

export default CertificationsPage; 