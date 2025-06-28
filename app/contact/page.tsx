import type { Metadata } from 'next';
import ContactPageClient from '../components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Lubeck Elevators for a free consultation. Contact us via phone, email, or visit our head office in Delhi.',
};

export default function ContactPage() {
  return <ContactPageClient />;
} 