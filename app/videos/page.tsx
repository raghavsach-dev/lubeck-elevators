import type { Metadata } from 'next';
import VideosPageClient from '@/app/components/VideosPageClient';

export const metadata: Metadata = {
  title: 'Videos | Lubeck Elevators',
  description: 'Watch videos of our elevators in action. See the smooth operation, elegant designs, and hear from our satisfied clients.',
};

export default function VideosPage() {
  return <VideosPageClient />;
} 