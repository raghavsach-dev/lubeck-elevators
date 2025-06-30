'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import ScrollingLogos from './ScrollingLogos';

const clients = [
  { src: '/Clientage/Clients/GD_Goenka.png', name: 'GD Goenka School', caption: "Leading educational institution known for its modern infrastructure." },
  { src: '/Clientage/Clients/GNIOT.png', name: 'GNIOT Group', caption: "A premier hub for technical and management education." },
  { src: '/Clientage/Clients/bikanerwala.png', name: 'Bikanerwala', caption: "Iconic brand for traditional Indian sweets and cuisine." },
  { src: '/Clientage/Clients/Clarks_inn.avif', name: 'Clarks Inn', caption: "Distinguished name in the hospitality sector, offering luxury stays." },
  { src: '/Clientage/Clients/Rising_Group.png', name: 'Rising Group', caption: "Prominent real estate developers creating landmark properties." },
  { src: '/Clientage/Clients/VPElectronics.png', name: 'VP Electronics', caption: "Trusted provider of a wide range of electronic components." },
  { src: '/Clientage/Clients/Gyaananada_School.jpeg', name: 'Gyaananada School', caption: "A progressive school focused on holistic child development." },
];

const collaborations = [
  { src: '/Clientage/Collaborations/Arkel.jpeg', name: 'Arkel', caption: 'Innovators in elevator control systems and components.' },
  { src: '/Clientage/Collaborations/Fermator.png', name: 'Fermator', caption: 'Global leader in manufacturing automatic elevator doors.' },
  { src: '/Clientage/Collaborations/JSLN.png', name: 'JSLN', caption: 'Expert manufacturers of high-quality steel products.' },
  { src: '/Clientage/Collaborations/Marazzi.png', name: 'Marazzi', caption: 'World-renowned brand for premium ceramic and porcelain tiles.' },
  { src: '/Clientage/Collaborations/Montanari_Group.png', name: 'Montanari Group', caption: 'Leading producers of gearboxes, motors, and components for elevators.' },
  { src: '/Clientage/Collaborations/NBSL.png', name: 'NBSL', caption: 'Specialists in elevator safety and braking systems.' },
  { src: '/Clientage/Collaborations/Tectronics.jpg', name: 'Tectronics', caption: 'Providers of advanced electronic solutions for various industries.' },
  { src: '/Clientage/Collaborations/torindrive.png', name: 'Torin Drive', caption: 'Global supplier of elevator traction machines and motors.' },
  { src: '/Clientage/Collaborations/Weco.png', name: 'Weco', caption: 'Experts in light curtains and safety sensors for elevators.' },
];

export default function ClientsPageClient() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const clientsRow1 = [...clients.slice(0, 4), ...clients.slice(0, 4), ...clients.slice(0, 4)];
  const clientsRow2 = [...clients.slice(4), ...clients.slice(4), ...clients.slice(4), ...clients.slice(4)];
  const collaborationsRow1 = [...collaborations.slice(0, 5), ...collaborations.slice(0, 5), ...collaborations.slice(0, 5)];
  const collaborationsRow2 = [...collaborations.slice(5), ...collaborations.slice(5), ...collaborations.slice(5)];

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      <div className="relative z-10 space-y-24">
        <motion.div 
          className="text-center max-w-7xl mx-auto px-6"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Esteemed Clients</motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">We are proud to have worked with a diverse range of prestigious clients who trust in our commitment to quality and excellence.</motion.p>
        </motion.div>
        
        <div className="space-y-4">
          <ScrollingLogos logos={clientsRow1} itemClassName="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56" speed="fast" />
          <ScrollingLogos logos={clientsRow2} itemClassName="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56" speed="fast" direction="reverse" />
        </div>

        <motion.div 
          className="text-center max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Collaborations</motion.h2>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">We partner with leading global manufacturers to ensure our elevators are built with the highest quality components and technology.</motion.p>
        </motion.div>

        <div className="space-y-4">
          <ScrollingLogos logos={collaborationsRow1} itemClassName="h-40 w-64 sm:h-48 sm:w-72 md:h-56 md:w-80" speed="normal" />
          <ScrollingLogos logos={collaborationsRow2} itemClassName="h-40 w-64 sm:h-48 sm:w-72 md:h-56 md:w-80" speed="normal" direction="reverse" />
        </div>
      </div>
    </div>
  );
} 