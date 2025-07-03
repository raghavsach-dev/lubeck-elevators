'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ImageGalleryModal } from './ImageGalleryModal';
import { imageData } from './galleryData';

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

const GalleryPageClient = () => {
  const [activeTab, setActiveTab] = useState(Object.keys(imageData)[0]);
  const [modalState, setModalState] = useState<{ isOpen: boolean; startIndex: number }>({ isOpen: false, startIndex: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const hash = window.location.hash.replace('#', '');
    const validTabs = Object.keys(imageData);
    if (hash && validTabs.includes(hash)) {
      setActiveTab(hash);
    }
  }, []);

  const openModal = (index: number) => {
    setModalState({ isOpen: true, startIndex: index });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, startIndex: 0 });
  };

  const currentImages = imageData[activeTab as keyof typeof imageData] || [];

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return (
      <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/liftdesign.jpg"
            alt="Lubeck Elevators background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37]">Our Design Gallery</motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
              Explore our curated collections, where unparalleled craftsmanship meets visionary design.
            </motion.p>
          </motion.div>
          <div className="flex items-center justify-center min-h-96">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D4AF37]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/liftdesign.jpg"
            alt="Lubeck Elevators background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
          >
            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37]">Our Design Gallery</motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
              Explore our curated collections, where unparalleled craftsmanship meets visionary design.
            </motion.p>
          </motion.div>

          <div className="mb-12">
            <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
              {Object.keys(imageData).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm sm:text-base font-semibold rounded-md transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.5)]' 
                      : 'bg-gray-800/50 text-white/70 hover:bg-gray-700/60'
                  }`}
                >
                  {tab.replace(/_/g, ' ')}
                </button>
              ))}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.05 } }}
              exit={{ opacity: 0, y: -30 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  variants={itemVariants}
                  onClick={() => openModal(index)}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[3/4]"
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-white text-lg font-bold">{image.title}</h3>
                    <p className="text-white/80 text-sm mt-1 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      {modalState.isOpen && (
        <ImageGalleryModal
          images={currentImages.map(img => ({ src: img.src, alt: img.title }))}
          startIndex={modalState.startIndex}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default GalleryPageClient; 