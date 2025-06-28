"use client";

import { useState } from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function ContactPageClient() {
  const branchOffices = [
    "NOIDA SEC 135",
    "HALDWANI",
    "JODHPUR, RAJASTHAN",
    "MANALI",
    "GURUGRAM",
    "FARIDABAD",
  ];

  const [isMapLoading, setMapLoading] = useState(true);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const formVariants: Variants = {
    hidden: { x: -30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const detailsVariants: Variants = {
    hidden: { x: 30, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 z-0">
            <Image
                src="/liftdesign.jpg"
                alt="Lubeck Elevators background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/70" />
        </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Contact Us</motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">Get in touch with us for a free consultation.</motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-[#1C1C1C] p-6 md:p-8 rounded-lg border border-white/10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={formVariants}
          >
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6">Send us a Message</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input type="text" name="name" id="name" placeholder="Your Name" className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input type="email" name="email" id="email" placeholder="Your Email" className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">Phone Number</label>
                <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37]" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea name="message" id="message" rows={4} placeholder="Your Message" className="w-full bg-black/50 border border-white/20 rounded-md p-3 focus:ring-[#D4AF37] focus:border-[#D4AF37]"></textarea>
              </div>
              <button type="submit" className="w-full px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700]">Send Message</button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={detailsVariants}
          >
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">Head Office</h3>
              <p className="text-sm md:text-base text-white/80">A 264, SURJAMLA VIHAR , DELHI 110092</p>
              <p className="text-sm md:text-base text-white/80 mt-1">Email: LUBECKELEVATOR@GMAIL.COM</p>
              <p className="text-sm md:text-base text-white/80 mt-1">Phone: +91-9811013981, +91-9310465077</p>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">Branch Offices</h3>
              <ul className="space-y-1 text-sm md:text-base text-white/80 list-disc list-inside">
                {branchOffices.map(office => <li key={office}>{office}</li>)}
              </ul>
            </div>
            <div className="relative h-80 md:h-64 w-full rounded-lg overflow-hidden bg-[#1C1C1C]">
              {isMapLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#D4AF37]"></div>
                </div>
              )}
               <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.064751574877!2d77.28735979999999!3d28.657779800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb0e4bda55f3%3A0xb876c6112cdd1222!2sLubeck%20Elevators!5e0!3m2!1sen!2sin!4v1751016357089!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, visibility: isMapLoading ? 'hidden' : 'visible' }}
                allowFullScreen={true}
                referrerPolicy="no-referrer-when-downgrade"
                onLoad={() => setMapLoading(false)}
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 