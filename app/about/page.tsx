import type { Metadata } from 'next';
import AboutPageClient from '@/app/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us | Lubeck Elevators',
  description: 'Learn about Lubeck Elevators, our mission, and our commitment to quality and luxury. Founded in 2009 by Mr. Parveen Gupta with over 15 years of experience in the elevator industry.',
};

export default function AboutPage() {
  return <AboutPageClient />;
} 