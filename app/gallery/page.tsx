import type { Metadata } from 'next';
import GalleryPageClient from '@/app/components/GalleryPageClient';

export const metadata: Metadata = {
  title: 'Gallery | Lubeck Elevators',
  description: 'Browse our gallery to see a collection of our finest elevator installations, showcasing luxury designs and premium finishes.',
};

export default function GalleryPage() {
  return <GalleryPageClient />;
} 