import type { Metadata } from 'next';
import ClientsPageClient from "../components/ClientsPageClient";

export const metadata: Metadata = {
  title: 'Our Clientage & Collaborations | Lubeck Elevators',
  description: 'We are proud to work with a diverse range of prestigious clients and partner with leading global manufacturers for the best components.',
};

export default function ClientsPage() {
  return <ClientsPageClient />;
} 