'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import PdfViewerPopup, { LoadingSpinner } from './PdfViewerPopup';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const certifications = [
  { name: 'USGB LEED Gold', file: '/Certifications/Lubeck-usgb-leed-gold.pdf' },
  { name: 'ISO 45001:2018 OHS', file: '/Certifications/Lubeck-iso-45001-2018-ohs.pdf' },
  { name: 'ISO 9001:2015 QMS', file: '/Certifications/Lubeck-iso-9001-2015-qms.pdf' },
  { name: 'ISO 14001:2015 EMS', file: '/Certifications/Lubeck-iso-14001-2015-ems.pdf' },
  { name: 'QMS, EMS & OHSMS India Certificate', file: '/Certifications/Lubeck-india-certificate-qms-ems-ohsms.pdf' }
];

const CertificationsClient = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pageWidth, setPageWidth] = useState(220);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  useEffect(() => {
    const handleResize = () => {
      setPageWidth(window.innerWidth > 640 ? 220 : 180);
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);

    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        setSelectedPdf(null);
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

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
          <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Certifications</motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
              We adhere to the highest standards of quality, safety, and environmental management.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-10"
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {certifications.map((cert, index) => (
              <motion.div 
                key={index} 
                onClick={() => setSelectedPdf(cert.file)} 
                className="group cursor-pointer relative w-full sm:w-80"
                variants={itemVariants}
              >
                <div className="bg-[#1C1C1C] border border-white/10 rounded-xl p-4 sm:p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20 overflow-hidden">
                  <div className="h-80 mb-4 flex items-center justify-center overflow-hidden rounded-md bg-black/20">
                    <Document file={cert.file} loading={<LoadingSpinner />} className="transition-transform duration-500 group-hover:scale-105">
                       <Page pageNumber={1} width={pageWidth} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  </div>
                  <h3 className="font-heading text-base sm:text-lg md:text-xl font-semibold text-white/90 transition-colors duration-300 h-12 flex items-center justify-center">{cert.name}</h3>
                </div>
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                    <div className="flex flex-col items-center text-white">
                        <Eye size={48} className="mb-2"/>
                        <span className="font-semibold text-lg">View Certificate</span>
                    </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center mt-20 max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            variants={itemVariants}
          >
            <p className="text-lg sm:text-xl md:text-2xl font-heading text-white/70 italic">
              &quot;Certified excellence, engineered for your peace of mind.&quot;
            </p>
          </motion.div>
        </div>
      </div>
      {selectedPdf && <PdfViewerPopup file={selectedPdf} name={certifications.find(c => c.file === selectedPdf)?.name || 'Certificate'} onClose={() => setSelectedPdf(null)} />}
    </>
  );
}

export default CertificationsClient; 