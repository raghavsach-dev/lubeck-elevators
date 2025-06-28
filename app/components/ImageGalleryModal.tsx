'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryModalProps {
  images: {
    src: string;
    alt: string;
  }[];
  startIndex: number;
  onClose: () => void;
}

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export function ImageGalleryModal({ images, startIndex, onClose }: ImageGalleryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      } else if (e.key === 'ArrowLeft') {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={{
          visible: { opacity: 1, transition: { duration: 0.2 } },
          hidden: { opacity: 0, transition: { duration: 0.2 } },
        }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <motion.div
          variants={modalVariants}
          className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
        >
          {/* Main Image */}
          <div className="w-full h-full flex items-center justify-center">
            <Image
              key={currentIndex}
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={800}
              height={1200}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-0 right-0 m-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-all z-10"
          >
            <X size={28} />
          </button>

          {/* Previous Button */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 ml-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-all"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 mr-4 text-white bg-black/50 rounded-full p-2 hover:bg-black/80 transition-all"
          >
            <ChevronRight size={32} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
} 