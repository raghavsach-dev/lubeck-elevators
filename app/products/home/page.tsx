import type { Metadata } from 'next';
import ProductHomePageClient from '@/app/components/ProductHomePageClient';

export const metadata: Metadata = {
  title: 'Home Lifts | Lubeck Elevators',
  description: 'Bring convenience and luxury into your home with our bespoke, compact, and energy-efficient home lifts, designed for private residences.',
};

export default function HomeLiftPage() {
  return <ProductHomePageClient />;
} 