'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageGalleryModal } from '@/app/components/ImageGalleryModal';

const doorImages = [
    { src: '/Products/Doors/1.jpg', alt: 'Premium elevator door system with modern design' },
    { src: '/Products/Doors/2.jpg', alt: 'Automatic sliding elevator doors with safety features' },
    { src: '/Products/Doors/3.jpg', alt: 'Elegant elevator door installation with custom finish' },
];

export default function DoorsPageClient() {
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openGallery = (index: number) => {
        setSelectedImageIndex(index);
        setGalleryOpen(true);
    };

    const closeGallery = () => {
        setGalleryOpen(false);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.2 },
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

    return (
        <>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="px-4 sm:px-6 lg:px-0"
        >
          <motion.h1 
            className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#D4AF37] mb-4 sm:mb-6"
            variants={itemVariants}
          >
            Lift Doors
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Our premium lift door systems combine safety, reliability, and aesthetic appeal. From automatic sliding doors to specialized manual systems, we offer comprehensive door solutions that meet international standards while enhancing the overall elevator experience.
          </motion.p>

          {/* Door Images Gallery */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 my-8 sm:my-12" variants={containerVariants}>
                {doorImages.map((image, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openGallery(index)}
                        whileHover="hover"
                        initial="initial"
                    >
                        <motion.div
                            className="w-full h-full"
                            variants={{
                                initial: { scale: 1 },
                                hover: { scale: 1.1 },
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={600}
                                className="object-cover w-full h-64 sm:h-80 lg:h-96"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 border-4 pointer-events-none rounded-lg"
                            variants={{
                                initial: { borderColor: 'rgba(212, 175, 55, 0)' },
                                hover: { borderColor: 'rgba(212, 175, 55, 1)' },
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        />
                    </motion.div>
                ))}
            </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-[#1C1C1C] p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">Automatic Sliding Doors</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
                State-of-the-art automatic doors with smooth operation, advanced safety sensors, and customizable opening speeds for optimal passenger flow.
              </p>
              <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                <li>• Infrared and pressure-sensitive safety systems</li>
                <li>• Adjustable opening and closing speeds</li>
                <li>• Emergency manual override capability</li>
                <li>• Low-noise operation</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-[#1C1C1C] p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">Manual Door Systems</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
                Robust manual door systems designed for durability and ease of operation, perfect for specific applications and budget-conscious installations.
              </p>
              <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                <li>• Heavy-duty construction</li>
                <li>• Smooth mechanical operation</li>
                <li>• Safety interlocks</li>
                <li>• Minimal maintenance requirements</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-[#1C1C1C] p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">Telescopic Doors</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
                Space-efficient telescopic door systems that provide maximum opening width while minimizing shaft requirements, ideal for high-capacity elevators.
              </p>
              <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                <li>• Maximum opening width efficiency</li>
                <li>• Synchronized panel movement</li>
                <li>• Enhanced passenger flow</li>
                <li>• Suitable for wide elevator cars</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-[#1C1C1C] p-4 sm:p-6 rounded-lg border border-white/10">
              <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">Specialized Door Solutions</h3>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-4 leading-relaxed">
                Custom door systems designed for specific applications including hospital environments, goods elevators, and high-security installations.
              </p>
              <ul className="text-xs sm:text-sm text-white/70 space-y-2">
                <li>• Hospital-grade antimicrobial finishes</li>
                <li>• Freight door configurations</li>
                <li>• Security-enhanced systems</li>
                <li>• Environmental protection options</li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-r from-[#1C1C1C] to-[#2A2A2A] p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 mb-6 sm:mb-8"
            variants={itemVariants}
          >
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-4 sm:mb-6 text-center">Key Features & Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Safety First</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  All door systems feature multiple safety mechanisms including sensors, emergency stops, and fail-safe operations.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Customizable Design</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Available in various materials, finishes, and configurations to match your building&apos;s aesthetic requirements.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Reliable Performance</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Engineered for millions of cycles with minimal maintenance and consistent performance throughout their lifespan.
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mx-0 mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Energy Efficient</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Advanced motor systems and smart controls ensure optimal energy consumption while maintaining performance.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              Trust Lubeck Elevators for premium door solutions that combine German engineering excellence with modern safety standards.
            </p>
          </motion.div>
        </motion.div>

        {isGalleryOpen && (
            <ImageGalleryModal
                images={doorImages.map(img => ({ src: img.src, alt: img.alt }))}
                startIndex={selectedImageIndex}
                onClose={closeGallery}
            />
        )}
        </>
    );
} 