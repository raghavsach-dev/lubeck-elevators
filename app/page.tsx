import type { Metadata } from 'next';
import HomePageClient from './components/HomePageClient';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Lubeck Elevators, where we provide luxury elevator solutions for residential and commercial properties. Lifting with luxury since 2009.',
};

export default function Home() {
  return <HomePageClient />;
}
