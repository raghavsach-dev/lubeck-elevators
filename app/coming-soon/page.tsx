import { Construction } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
      <Construction className="w-20 h-20 md:w-28 md:h-28 text-[#D4AF37] animate-bounce" />
      <h1 className="mt-8 font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">
        Coming Soon
      </h1>
      <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
        We are working hard to bring you something amazing. This page is currently under construction. Please check back soon!
      </p>
    </div>
  );
} 