"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChatbotPopup from "./ChatbotPopup";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [mobileMenuOpen]);

  const productLinks = [
    { name: 'Passenger Elevator', href: '/products/passenger' },
    { name: 'Hospital Elevator', href: '/products/hospital' },
    { name: 'Capsule Lifts', href: '/products/capsule' },
    { name: 'Goods Lift', href: '/products/goods' },
    { name: 'Home Lift', href: '/products/home' },
    { name: 'Structure Lift', href: '/products/structure' },
  ];

  const allLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products/passenger', subLinks: productLinks },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Videos', href: '/videos' },
    { name: 'Clientage', href: '/clientage' },
    { name: 'Certifications', href: '/certifications' },
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isScrolled || mobileMenuOpen ? 'bg-black border-b border-white/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2 sm:space-x-4">
                <Image src="/logo-og.jpeg" alt="Lubeck Elevators Logo" width={50} height={50} className="rounded-lg" />
                <div>
                  <div className="font-heading text-lg sm:text-xl font-bold text-[#D4AF37]">Lubeck Elevators</div>
                  <div className="text-xs text-white/70">Lifting With Luxury</div>
                </div>
              </Link>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About Us</Link>
                 <div 
                    className="relative" 
                    onMouseEnter={() => setProductsOpen(true)} 
                    onMouseLeave={() => setTimeout(() => setProductsOpen(false), 200)}
                 >
                  <Link href="/products/passenger" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center py-4">
                    Products
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </Link>
                  {productsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-48 bg-black border border-white/10 rounded-lg shadow-lg">
                      {productLinks.map(p => (
                        <Link key={p.href} href={p.href} className="block px-4 py-2 text-sm text-white/80 hover:bg-white/5 hover:text-white">{p.name}</Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link href="/gallery" className="hover:text-[#D4AF37] transition-colors duration-300">Gallery</Link>
                <Link href="/videos" className="hover:text-[#D4AF37] transition-colors duration-300">Videos</Link>
                <Link href="/clientage" className="hover:text-[#D4AF37] transition-colors duration-300">Clientage</Link>
                <Link href="/certifications" className="hover:text-[#D4AF37] transition-colors duration-300">Certifications</Link>
                <Link href="/contact" className="px-5 py-2 bg-[#D4AF37] text-black font-semibold rounded-md transition-all duration-300 hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)]">Contact Us</Link>
              </div>
              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="relative z-50">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
                </button>
              </div>
            </div>
          </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="p-8 pt-28 flex flex-col h-full"
              initial={{ x: "-100%" }}
              animate={{ x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } }}
              exit={{ x: "-100%", transition: { duration: 0.3 } }}
            >
              <div className="space-y-6">
                {allLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * i + 0.2 } }}
                  >
                    {link.subLinks ? (
                      <div>
                        <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)} className="w-full text-left text-3xl font-heading text-white/80 hover:text-white transition-colors flex justify-between items-center">
                          <span>{link.name}</span>
                          <svg className={`w-6 h-6 transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <AnimatePresence>
                        {mobileProductsOpen && (
                          <motion.div 
                            className="pl-4 mt-2 space-y-2"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {link.subLinks.map(subLink => (
                              <Link key={subLink.href} href={subLink.href} onClick={() => setMobileMenuOpen(false)} className="block text-xl font-heading text-white/60 hover:text-white transition-colors">{subLink.name}</Link>
                            ))}
                          </motion.div>
                        )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-3xl font-heading text-white/80 hover:text-white transition-colors">{link.name}</Link>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div 
                className="mt-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 * allLinks.length + 0.2 } }}
              >
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center px-8 py-4 bg-[#D4AF37] text-black font-semibold rounded-lg">Contact Us</Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <main>{children}</main>

      <ChatbotPopup mobileMenuOpen={mobileMenuOpen} />
      
      <footer className="bg-black border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white/60">
            <div>
              <h3 className="font-heading text-lg text-white mb-3">Lubeck Elevators</h3>
              <p className="text-sm">Lifting With Luxury since 2009. We design, build, and install award-worthy elevators for your needs.</p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-white mb-3">Contact Info</h3>
              <p className="text-sm">A 264, SURJAMLA VIHAR , DELHI 110092</p>
              <p className="text-sm mt-1">LUBECKELEVATOR@GMAIL.COM</p>
              <p className="text-sm mt-1">+91-9811013981, +91-9310465077</p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-white mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/lubeckelevatorsdelhincr/#" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
                <a href="https://www.facebook.com/LUBECKELEVATORS" target="_blank" rel="noopener noreferrer" className="hover:text-white">Facebook</a>
                <a href="https://www.youtube.com/@LUBECKELEVATORS" target="_blank" rel="noopener noreferrer" className="hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm mt-8 pt-8 border-t border-white/10">
            <p>© 2024 Lubeck Elevators. All rights reserved.</p>
          </div>
      </footer>
    </>
  )
} 