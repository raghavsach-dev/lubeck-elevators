'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, Variants } from 'framer-motion';

const products = [
  { name: 'Passenger Elevator', path: '/products/passenger' },
  { name: 'Hospital Elevator', path: '/products/hospital' },
  { name: 'Capsule Lifts', path: '/products/capsule' },
  { name: 'Goods Lift', path: '/products/goods' },
  { name: 'Home Lift', path: '/products/home' },
  { name: 'Structure Lift', path: '/products/structure' },
];

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const contentVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const pathname = usePathname();

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 text-white">
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
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="flex flex-col md:flex-row">
          <motion.aside 
            className="w-full md:w-1/4 md:pr-8 mb-10 md:mb-0"
            variants={itemVariants}
          >
            <h2 className="font-heading text-2xl md:text-3xl text-[#D4AF37] mb-4">Our Products</h2>
            <nav className="md:hidden">
              <ul className="flex overflow-x-auto space-x-4 pb-4 -mx-6 px-6">
                {products.map((product) => (
                  <li key={product.path} className="flex-shrink-0">
                    <Link 
                      href={product.path} 
                      className={`block py-2 px-4 whitespace-nowrap rounded-md transition-colors ${
                        pathname === product.path 
                          ? 'bg-[#D4AF37] text-black font-semibold' 
                          : 'bg-[#1C1C1C] hover:text-[#D4AF37]'
                      }`}
                    >
                      {product.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="hidden md:block">
              <ul>
                {products.map((product) => (
                  <motion.li 
                    key={product.path}
                    variants={itemVariants}
                  >
                    <Link 
                      href={product.path} 
                      className={`block py-2 transition-colors ${
                        pathname === product.path 
                          ? 'text-[#D4AF37] font-bold' 
                          : 'text-white/80 hover:text-[#D4AF37]'
                      }`}
                    >
                      {product.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.aside>
          <motion.main 
            className="w-full md:w-3/4"
            variants={contentVariants}
          >
            {children}
          </motion.main>
        </div>
      </motion.div>
    </div>
  );
} 