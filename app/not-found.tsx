"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative z-10 max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <h1 className="font-heading text-8xl md:text-9xl font-bold text-[#D4AF37] drop-shadow-lg">404</h1>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-semibold text-white">Page Not Found</h2>
          <p className="mt-6 text-base md:text-lg text-white/70">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or maybe it never existed.
          </p>
          <Link href="/" passHref>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-md transition-all duration-300"
            >
              Go Back Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 