'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const allImages = [
  { src: '/Designs/9d4b2b9da404f11fa7df56272cde503c.jpg', caption: 'Elegant wood-paneled interior with ambient lighting.' },
  { src: '/Designs/24da2f83a945c0930141f1105f89005c.jpg', caption: 'Sleek, futuristic design with integrated LED display.' },
  { src: '/Designs/da3f9a502b528f166209894b998a6794.jpg', caption: 'Minimalist interior featuring brushed metal and glass.' },
  { src: '/Designs/d702a70ab6fdca1c49c5ca7b05e942ba.jpg', caption: 'Spacious and accessible design, perfect for commercial use.' },
  { src: '/Designs/e667214d993fa4d1ebb4a39f8264e753.jpg', caption: 'Luxurious gold-accented cabin for a premium experience.' },
  { src: '/Designs/f3f633de0f0b3597bc5f43eb4e9bc68d.jpg', caption: 'Modern design combining functionality with high-end aesthetics.' },
  { src: '/Designs/57a751ae5177f201965c52846a7d41c5.jpg', caption: 'Classic elegance with polished marble and ornate details.' },
  { src: '/Designs/81be1a2070bedbe959b8eaa5446cd395.jpg', caption: 'High-tech cabin with panoramic glass walls for stunning views.' },
  { src: '/Designs/44eeea10436060595609ebb253d000fb.jpg', caption: 'Robust and functional design for industrial applications.' },
  { src: '/Designs/b24307517bb46aab1d479675cb8cbd69.jpg', caption: 'Vibrant and contemporary look with bold colors and patterns.' },
  { src: '/Designs/d32640dded209308e754e4d6ec2b22d4.jpg', caption: 'Understated sophistication with muted tones and clean lines.' },
  { src: '/Designs/efd8c8f9a88131665e567ecaaa20d757.jpg', caption: 'Art deco inspired cabin with geometric patterns and rich textures.' },
];

interface GalleryImage {
  src: string;
  caption: string;
}

// Function to shuffle an array
const shuffleArray = (array: GalleryImage[]): GalleryImage[] => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export default function GalleryPage() {
  const [shuffledImages, setShuffledImages] = useState<GalleryImage[]>([]);

  useEffect(() => {
    setShuffledImages(shuffleArray([...allImages]));
  }, []);
  
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

  const galleryVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <main className="relative text-white min-h-screen pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Gallery</motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            A showcase of our finest elevator designs, where innovation meets luxury and functionality.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          initial="hidden"
          animate="visible"
          variants={galleryVariants}
        >
          {shuffledImages.map((image, index) => (
            <motion.div key={index} variants={itemVariants}>
              {/* Mobile and Tablet View: Caption Below Image */}
              <div className="sm:hidden bg-[#1C1C1C] rounded-xl border border-white/10 overflow-hidden">
                <Image 
                  src={image.src} 
                  alt={image.caption}
                  width={400} 
                  height={600} 
                  className="object-cover w-full h-80"
                />
                <div className="p-4">
                  <p className="text-white text-base font-semibold">{image.caption}</p>
                </div>
              </div>

              {/* Desktop View: Hover Effect */}
              <div className="hidden sm:block group relative overflow-hidden rounded-xl border border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:scale-105">
                <Image 
                  src={image.src} 
                  alt={image.caption}
                  width={400} 
                  height={600} 
                  className="object-cover w-full h-96 transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <p className="text-white text-base font-semibold transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.caption}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 