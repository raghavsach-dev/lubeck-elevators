import type { Metadata } from 'next';
import StructurePageClient from '@/app/components/StructurePageClient';

export const metadata: Metadata = {
  title: 'Structure Lifts | Lubeck Elevators',
  description: 'Robust and versatile structure lifts designed for construction sites and industrial applications, providing safe and reliable vertical transport.',
};

export default function StructureLiftPage() {
  return <StructurePageClient />;
} 