"use client";

import Image from "next/image";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import ChatbotPopup from "./components/ChatbotPopup";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <html lang="en">
      <body className={mobileMenuOpen ? 'overflow-hidden' : ''}>
        <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isScrolled || mobileMenuOpen ? 'bg-black border-b border-white/10' : 'bg-transparent'}`}>
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-4">
                <Image src="/logo-og.jpeg" alt="Lubeck Elevators Logo" width={50} height={50} className="rounded-lg" />
                <div>
                  <div className="font-heading text-xl font-bold text-[#D4AF37]">Lubeck Elevators</div>
                  <div className="text-xs text-white/70">Lifting With Luxury</div>
                </div>
              </Link>
              {/* Desktop Nav */}
              <div className="hidden md:flex items-center space-x-6">
                <Link href="/" className="hover:text-[#D4AF37] transition-colors duration-300">Home</Link>
                <Link href="/about" className="hover:text-[#D4AF37] transition-colors duration-300">About Us</Link>
                 <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
                  <Link href="/products/passenger" className="hover:text-[#D4AF37] transition-colors duration-300 flex items-center">
                    Products
                    <svg className={`w-4 h-4 ml-1 transition-transform duration-300 ${productsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </Link>
                  {productsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-black border border-white/10 rounded-lg shadow-lg">
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
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-black z-40 pt-24 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-2xl font-heading">
            {allLinks.map(link => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} className="hover:text-[#D4AF37] transition-colors duration-300">{link.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="mt-4 px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-md">Contact Us</Link>
          </div>
        </div>
        
        <main>{children}</main>

        <ChatbotPopup />
        
        <footer className="bg-black border-t border-white/10 py-8">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-white/60">
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
                <a href="#" className="hover:text-white">YouTube</a>
              </div>
            </div>
          </div>
          <div className="text-center text-white/40 text-sm mt-8 pt-8 border-t border-white/10">
            <p>© 2024 Lubeck Elevators. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
