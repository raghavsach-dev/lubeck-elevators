"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { VideoPlayer } from './VideoPlayer';
import dynamic from 'next/dynamic';
import { motion, Variants } from 'framer-motion';

const PdfViewerPopup = dynamic(() => import('./PdfViewerPopup'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#D4AF37]"></div></div> 
});

interface Image {
  src: string;
  caption: string;
}

const allImages: Image[] = [
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

const videoPreviews = [
  {
    src: '/Videos/PRESIDENTIAL ROSE GOLD DESIGN.mp4',
    title: 'Presidential Rose Gold Design',
    description: 'The epitome of elegance. Our Presidential suite cabin in a stunning rose gold finish, combining technology and artistry.'
  },
  {
    src: '/Videos/TRANSPARENT ROSE GOLD.mp4',
    title: 'Transparent Rose Gold Lift',
    description: 'A breathtaking panoramic elevator with rose gold accents, offering stunning views and a futuristic feel.'
  }
];

const shuffleArray = (array: Image[]): Image[] => {
  let currentIndex = array.length, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};


export default function HomePageClient() {
  const [galleryImages, setGalleryImages] = useState<Image[]>([]);
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);

  useEffect(() => {
    setGalleryImages(shuffleArray([...allImages]).slice(0, 3));
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute z-0 w-full h-full object-cover"
        >
          <source src="/Final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <motion.div 
          className="relative z-20 max-w-4xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Elevating</span> <span className="text-gradient-gold">Excellence</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/80 mb-10 max-w-3xl mx-auto">
            Experience the pinnacle of vertical transportation. We deliver premium elevator solutions that combine cutting-edge technology with uncompromising luxury.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] w-full sm:w-auto">
              Request a Quote
            </Link>
            <button
              onClick={() => setIsCatalogOpen(true)}
              className="px-8 py-3 bg-transparent border border-white/50 text-white font-semibold rounded-md transition-all duration-300 hover:bg-white/10 hover:border-white w-full sm:w-auto"
            >
              View Catalog
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section 
        id="services" 
        className="py-20 bg-[#0D0D0D]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#D4AF37]">Premium Services</span></h2>
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">From installation to maintenance, we provide comprehensive solutions tailored to your needs with unmatched attention to detail.</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            <motion.div variants={cardVariants} className="bg-[#1C1C1C] border border-white/10 rounded-xl p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M2 21h11.5v-1.5h-10v-15h5.62l1.38 1.38V7.5h1.5v-3.38l-1.38-1.37H2v17zM22 6.5v15H10.5v-15H22m-1.5 1.5h-9v12h9v-12zM5.5 3.5h3.13l-1 1H5.5v-1zm9 3h3v1.5h-3V6.5zm0 3h3v1.5h-3V9.5zm0 3h3v1.5h-3v-1.5z"/></svg></div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">New Installation</h3>
              <p className="text-sm md:text-base text-white/60">State-of-the-art elevator installations with premium materials and cutting-edge technology.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-[#1C1C1C] border border-white/10 rounded-xl p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg></div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">Maintenance & Repair</h3>
              <p className="text-sm md:text-base text-white/60">Comprehensive programs and expert repairs to ensure your elevators operate safely and efficiently.</p>
            </motion.div>
            <motion.div variants={cardVariants} className="bg-[#1C1C1C] border border-white/10 rounded-xl p-6 md:p-8 text-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)]">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-6"><svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 15l-3.5-3.5 1.41-1.41L10.5 13.17l5.59-5.59L17.5 9l-7 7z"/></svg></div>
              <h3 className="font-heading text-xl md:text-2xl font-semibold mb-3">Modernization</h3>
              <p className="text-sm md:text-base text-white/60">Transform your existing elevators with modern technology, improved efficiency, and enhanced safety.</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Snippet Section */}
      <motion.section 
        id="about-snippet" 
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="md:pr-8 text-center md:text-left">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">About <span className="text-[#D4AF37]">Lubeck</span></h2>
              <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                Founded on the principles of innovation and excellence, Lubeck Elevators has been a leader in the vertical transportation industry for over two decades. We are dedicated to delivering superior quality, safety, and reliability in every project.
              </p>
              <Link href="/about" className="px-8 py-3 bg-transparent text-[#D4AF37] font-semibold rounded-lg border-2 border-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-black transform hover:-translate-y-1">
                Read More
              </Link>
            </motion.div>
             <motion.div variants={itemVariants} className="rounded-xl overflow-hidden shadow-2xl h-80 order-first md:order-last">
          <Image
                src="/lift-sample.jpg" 
                alt="Lubeck elevator interior" 
                width={600} 
                height={400}
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Gallery Snippet Section */}
      <motion.section 
        id="gallery-snippet" 
        className="py-20 bg-[#0D0D0D]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#D4AF37]">Gallery</span></h2>
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">Explore a selection of our finest elevator designs, where innovation meets luxury.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {galleryImages.map((image, index) => (
              <motion.div key={index} variants={cardVariants}>
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
                    <p className="text-white text-lg font-semibold transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.caption}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link href="/gallery" className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:scale-105">
              See More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Video Showcase Section */}
      <motion.section 
        id="video-showcase" 
        className="py-20 bg-black"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Video <span className="text-[#D4AF37]">Showcase</span></h2>
            <p className="text-base md:text-lg text-white/60 max-w-3xl mx-auto">Watch our elevators in action and see the future of vertical transportation.</p>
          </motion.div>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-10" variants={containerVariants}>
            {videoPreviews.map((video, index) => (
                <motion.div key={index} variants={cardVariants}>
                  <VideoPlayer src={video.src} title={video.title} description={video.description} />
                </motion.div>
            ))}
          </motion.div>
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <Link href="/videos" className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:scale-105">
              Watch More
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {isCatalogOpen && (
        <PdfViewerPopup 
          file="/Main_Catalogue.pdf" 
          onClose={() => setIsCatalogOpen(false)} 
        />
      )}
    </>
  );
}