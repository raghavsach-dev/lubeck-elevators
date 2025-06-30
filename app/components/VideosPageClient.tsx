'use client';

import { VideoPlayer } from './VideoPlayer';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const videos = [
  {
    src: '/Videos/NANITAL 2 LIFT HANDOVER.mp4',
    title: 'Nainital Project Handover',
    description: 'A showcase of the seamless integration and final handover of our dual-lift installation in a prestigious Nainital property.',
    isYoutube: false,
  },
  {
    src: 'https://www.youtube.com/embed/mfV0UB0U7DA',
    title: 'Shree Krishna Designer Cabin',
    description: 'An inside look at the exquisite craftsmanship of the custom Shree Krishna designer cabin, featuring intricate details.',
    isYoutube: true,
  },
  {
    src: 'https://www.youtube.com/embed/tg6sknhbQC4',
    title: 'Golden Designer 2200mm Cabin',
    description: 'Experience the grandeur of our 2200mm Golden Designer cabin, built for spaciousness and ultimate luxury.',
    isYoutube: true,
  },
  {
    src: 'https://www.youtube.com/embed/uuFONTS2xEM',
    title: 'Presidential Rose Gold Design',
    description: 'The epitome of elegance. Our Presidential suite cabin in a stunning rose gold finish, combining technology and artistry.',
    isYoutube: true,
  },
  {
    src: '/Videos/TRANSPARENT ROSE GOLD.mp4',
    title: 'Transparent Rose Gold Lift',
    description: 'A breathtaking panoramic elevator with rose gold accents, offering stunning views and a futuristic feel.',
    isYoutube: false,
  },
  {
    src: 'https://www.youtube.com/embed/UZVyRqLhmkY',
    title: 'Modern Commercial Installation',
    description: 'A versatile and sleek elevator designed for high-traffic commercial spaces, demonstrating smooth, reliable operation.',
    isYoutube: true,
  }
];

export default function VideosPageClient() {
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
  
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Video Gallery</motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            Witness the art of elevation. Our videos showcase the seamless performance, exquisite design, and superior engineering of Lubeck Elevators in action.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          initial="hidden"
          animate="visible"
          variants={gridVariants}
        >
            {videos.map((video, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-white/10">
                {video.isYoutube ? (
                  <div className="aspect-video">
                    <iframe
                      src={video.src}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    ></iframe>
                  </div>
                ) : (
                  <VideoPlayer src={video.src} title={video.title} />
                )}
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[#D4AF37]">{video.title}</h3>
                  <p className="text-white/70 mt-2 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
} 