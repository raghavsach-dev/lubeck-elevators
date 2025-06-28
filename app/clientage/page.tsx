import type { Metadata } from 'next';
import ClientagePageClient from '@/app/components/ClientagePageClient';

export const metadata: Metadata = {
  title: 'Our Clientage & Collaborations | Lubeck Elevators',
  description: 'We are proud to work with a diverse range of prestigious clients and partner with leading global manufacturers for the best components.',
};

export default function ClientagePage() {
  return <ClientagePageClient />;
} 