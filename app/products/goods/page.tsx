import type { Metadata } from 'next';
import GoodsPageClient from '@/app/components/GoodsPageClient';

export const metadata: Metadata = {
  title: 'Goods & Freight Elevators | Lubeck Elevators',
  description: 'Our heavy-duty goods and freight elevators are built for durability and performance, ensuring efficient transport of materials in any setting.',
};

export default function GoodsLiftPage() {
  return <GoodsPageClient />;
} 