import type { Metadata } from 'next';
import PassengerPageClient from '@/app/components/PassengerPageClient';

export const metadata: Metadata = {
  title: 'Passenger Elevators | Lubeck Elevators',
  description: 'Discover our safe, reliable, and stylish passenger elevators, designed for a seamless and comfortable experience in residential and commercial buildings.',
};

export default function PassengerElevatorPage() {
  return <PassengerPageClient />;
} 