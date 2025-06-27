'use client';

import dynamic from 'next/dynamic';

const LoadingSpinner = () => (
    <div className="flex items-center justify-center h-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
    </div>
);

const CertificationsClient = dynamic(() => import('../components/CertificationsClient'), { 
    ssr: false,
    loading: () => <div className="min-h-screen pt-32 pb-20 flex items-center justify-center"><LoadingSpinner /></div>
});

export default function CertificationsPage() {
    return <CertificationsClient />;
} 