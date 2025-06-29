'use client';

import dynamic from 'next/dynamic';

const CertificationsClient = dynamic(() => import('./CertificationsClient'), {
  ssr: false,
  loading: () => (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-20 flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D4AF37]"></div>
    </div>
  ),
});

const CertificationsPageLoader = () => {
  return <CertificationsClient />;
};

export default CertificationsPageLoader; 