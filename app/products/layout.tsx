import type { Metadata } from 'next';
import ProductsLayoutClient from '../components/ProductsLayoutClient';

export const metadata: Metadata = {
  title: 'Our Products | Lubeck Elevators',
  description: 'Explore our wide range of luxurious and reliable elevators, including passenger, hospital, home, goods, capsule, and structure lifts.',
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <ProductsLayoutClient>{children}</ProductsLayoutClient>;
} 