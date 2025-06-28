'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';

const LoadingComponent = () => (
  <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
    <div className="absolute inset-0 z-0">
      <Image
        src="/liftdesign.jpg"
        alt="Lubeck Elevators background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-80" />
    </div>
    <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-250px)]">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#D4AF37]"></div>
    </div>
  </div>
);

const CertificationsClient = dynamic(
  () => import('@/app/components/CertificationsClient'), 
  { 
    ssr: false,
    loading: () => <LoadingComponent />
  }
);

export default function CertificationsPageLoader() {
    return <CertificationsClient />;
} 