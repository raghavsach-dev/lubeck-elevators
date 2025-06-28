import type { Metadata } from 'next';
import MainLayout from './components/MainLayout';
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: 'Lubeck Elevators - Lifting With Luxury',
    template: '%s | Lubeck Elevators',
  },
  description: 'Lubeck Elevators offers premium and luxurious elevator solutions. We design, build, and install award-worthy elevators for residential and commercial needs.',
  icons: {
    icon: '/logo-og.jpeg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
