import type { Metadata } from 'next';
import HospitalPageClient from '@/app/components/HospitalPageClient';

export const metadata: Metadata = {
  title: 'Hospital Elevators | Lubeck Elevators',
  description: 'Explore our specialized hospital elevators, designed for patient safety, hygiene, and reliability in medical facilities.',
};

export default function HospitalElevatorPage() {
  return <HospitalPageClient />;
} 