'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageGalleryModal } from '@/app/components/ImageGalleryModal';

// Define all accessory categories with their images
const accessoryCategories = [
  {
    name: 'WiFi Camera Systems',
    description: 'Advanced wireless camera systems for elevator security and monitoring with high-definition video quality and remote access capabilities.',
    folder: 'Wifi_Camera',
    images: [
      { src: '/Products/Accessories/Wifi_Camera/img83.jpg', alt: 'WiFi Camera System for elevator security monitoring' }
    ]
  },
  {
    name: 'Security Alarm & Fire Switch',
    description: 'Essential safety devices including emergency alarms and fire safety switches ensuring passenger protection and building safety compliance.',
    folder: 'Security_Alarm_And_Fire_Switch',
    images: [
      { src: '/Products/Accessories/Security_Alarm_And_Fire_Switch/img76.jpg', alt: 'Security alarm and fire safety switch system' }
    ]
  },
  {
    name: 'RFID Access Card Systems',
    description: 'Modern access control solutions using RFID technology for secure elevator operation and restricted floor access management.',
    folder: 'RFID_Access_Card',
    images: [
      { src: '/Products/Accessories/RFID_Access_Card/img69.jpg', alt: 'RFID access card reader system' },
      { src: '/Products/Accessories/RFID_Access_Card/img73.jpg', alt: 'Advanced RFID access control panel' }
    ]
  },
  {
    name: 'Android COP (Car Operating Panel)',
    description: 'State-of-the-art Android-based car operating panels with touchscreen interface, smart controls, and intuitive user experience.',
    folder: 'Android_Cop',
    images: [
      { src: '/Products/Accessories/Android_Cop/img55.jpg', alt: 'Android-based car operating panel' },
      { src: '/Products/Accessories/Android_Cop/img60.jpg', alt: 'Modern Android COP with touchscreen display' }
    ]
  },
  {
    name: 'TFT Display Cards',
    description: 'High-resolution TFT display systems providing clear floor indicators, destination information, and elevator status updates.',
    folder: 'TFT_Display_Card',
    images: [
      { src: '/Products/Accessories/TFT_Display_Card/img43.jpg', alt: 'TFT display card with floor indicators' },
      { src: '/Products/Accessories/TFT_Display_Card/img48.jpg', alt: 'Advanced TFT display system' }
    ]
  },
  {
    name: 'Touch Model Panels',
    description: 'Premium touch-sensitive control panels offering modern interface design with responsive touch controls and elegant aesthetics.',
    folder: 'Touch_Model',
    images: [
      { src: '/Products/Accessories/Touch_Model/img29.jpg', alt: 'Touch model control panel' },
      { src: '/Products/Accessories/Touch_Model/img34.jpg', alt: 'Modern touch-sensitive elevator panel' }
    ]
  },
  {
    name: 'Push Button Systems',
    description: 'Reliable and durable push button systems with various designs, illumination options, and tactile feedback for all elevator types.',
    folder: 'Push_Button',
    images: [
      { src: '/Products/Accessories/Push_Button/img14.jpg', alt: 'Premium push button system' },
      { src: '/Products/Accessories/Push_Button/img13.jpg', alt: 'Illuminated elevator push buttons' }
    ]
  }
];

export default function AccessoriesPageClient() {
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [selectedImages, setSelectedImages] = useState<{src: string, alt: string}[]>([]);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openGallery = (categoryImages: {src: string, alt: string}[], startIndex: number = 0) => {
        setSelectedImages(categoryImages);
        setSelectedImageIndex(startIndex);
        setGalleryOpen(true);
    };

    const closeGallery = () => {
        setGalleryOpen(false);
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 },
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
            Elevator Accessories
          </motion.h1>
          
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-white/80 mb-8 sm:mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Discover our comprehensive range of premium elevator accessories designed to enhance safety, functionality, and user experience. From advanced control systems to modern security solutions, we provide cutting-edge accessories that integrate seamlessly with any elevator system.
          </motion.p>

          {/* Accessories Categories */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {accessoryCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="bg-[#1C1C1C] p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10"
                variants={itemVariants}
              >
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-semibold text-[#D4AF37] mb-3 sm:mb-4">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-base text-white/80 mb-4 sm:mb-6 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Images Grid - Responsive based on number of images */}
                <div className={`grid gap-3 sm:gap-4 ${
                  category.images.length === 1 
                    ? 'grid-cols-1 max-w-xs sm:max-w-sm mx-auto' 
                    : 'grid-cols-1 sm:grid-cols-2'
                }`}>
                  {category.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer group"
                      onClick={() => openGallery(category.images, imageIndex)}
                      whileHover="hover"
                      initial="initial"
                    >
                      <motion.div
                        className="w-full h-full"
                        variants={{
                          initial: { scale: 1 },
                          hover: { scale: 1.05 },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={500}
                          height={400}
                          className="object-cover w-full h-48 sm:h-64 lg:h-80"
                        />
                      </motion.div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 bg-[#D4AF37] rounded-full flex items-center justify-center">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                          </div>
                          <span className="text-white text-xs sm:text-sm font-semibold">View Image</span>
                        </div>
                      </div>
                      
                      {/* Golden border on hover */}
                      <motion.div
                        className="absolute inset-0 border-4 pointer-events-none rounded-lg"
                        variants={{
                          initial: { borderColor: 'rgba(212, 175, 55, 0)' },
                          hover: { borderColor: 'rgba(212, 175, 55, 1)' },
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Key Features Section */}
          <motion.div 
            className="bg-gradient-to-r from-[#1C1C1C] to-[#2A2A2A] p-4 sm:p-6 lg:p-8 rounded-xl border border-white/10 mt-12 sm:mt-16"
            variants={itemVariants}
          >
            <h3 className="font-heading text-lg sm:text-xl font-semibold text-[#D4AF37] mb-4 sm:mb-6 text-center">
              Why Choose Lubeck Accessories?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Premium Quality</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Manufactured to the highest standards with premium materials for long-lasting performance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Smart Integration</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  IoT-enabled accessories that integrate seamlessly with modern building management systems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Enhanced Security</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Advanced security features including access control and monitoring systems for maximum safety.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#D4AF37] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Easy Maintenance</h4>
                <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                  Designed for minimal maintenance with self-diagnostic capabilities and remote monitoring.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="text-center mt-8 sm:mt-12"
            variants={itemVariants}
          >
            <p className="text-sm sm:text-base lg:text-lg text-white/60 mb-4 sm:mb-6 leading-relaxed px-4 sm:px-0">
              Enhance your elevator system with Lubeck&apos;s complete range of premium accessories designed for modern vertical transportation.
            </p>
          </motion.div>
        </motion.div>

        {isGalleryOpen && (
            <ImageGalleryModal
                images={selectedImages}
                startIndex={selectedImageIndex}
                onClose={closeGallery}
            />
        )}
        </>
    );
} 