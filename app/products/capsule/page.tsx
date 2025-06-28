import type { Metadata } from 'next';
import CapsulePageClient from '@/app/components/CapsulePageClient';

export const metadata: Metadata = {
  title: 'Capsule Lifts | Lubeck Elevators',
  description: 'Experience panoramic views with our elegant and futuristic capsule lifts, adding a touch of architectural brilliance to any building.',
};

export default function CapsuleLiftsPage() {
  return <CapsulePageClient />;
} 