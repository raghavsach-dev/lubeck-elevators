'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const certifications = [
  { name: 'USGB LEED Gold', file: '/Certifications/Lubeck-usgb-leed-gold.pdf' },
  { name: 'ISO 45001:2018 OHS', file: '/Certifications/Lubeck-iso-45001-2018-ohs.pdf' },
  { name: 'ISO 9001:2015 QMS', file: '/Certifications/Lubeck-iso-9001-2015-qms.pdf' },
  { name: 'ISO 14001:2015 EMS', file: '/Certifications/Lubeck-iso-14001-2015-ems.pdf' },
  { name: 'QMS, EMS & OHSMS India Certificate', file: '/Certifications/Lubeck-india-certificate-qms-ems-ohsms.pdf' }
];

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-full bg-[#1C1C1C] rounded-lg">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#D4AF37]"></div>
  </div>
);

interface PDFViewerModalProps {
  file: string;
  name: string;
  onClose: () => void;
}

const PDFViewerModal = ({ file, onClose, name }: PDFViewerModalProps) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (isClosing) {
      const timer = setTimeout(() => onClose(), 300);
      return () => clearTimeout(timer);
    }
  }, [isClosing, onClose]);

  const handleClose = () => {
    setIsClosing(true);
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const goToPrevPage = () => setPageNumber(pageNumber - 1 > 0 ? pageNumber - 1 : 1);
  const goToNextPage = () => {
    if (numPages) {
      setPageNumber(pageNumber + 1 <= numPages ? pageNumber + 1 : numPages);
    }
  };

  return (
    <div className={`fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ${isClosing ? 'opacity-0' : 'opacity-100'}`} onClick={handleClose}>
      <div className={`bg-[#1C1C1C] border-2 border-[#D4AF37]/50 rounded-xl shadow-2xl shadow-black/50 max-w-4xl w-full max-h-[90vh] flex flex-col transition-transform duration-300 ${isClosing ? 'scale-95' : 'scale-100'}`} onClick={(e) => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-white/10">
          <h3 className="font-heading text-xl text-[#D4AF37]">{name}</h3>
          <button onClick={handleClose} className="text-white hover:text-[#D4AF37] transition-colors">
            <X size={24} />
          </button>
        </header>
        <div className="flex-grow overflow-y-auto p-4 bg-black/30">
            <Document file={file} onLoadSuccess={onDocumentLoadSuccess} loading={<LoadingSpinner />}>
                <div className="flex justify-center">
                    <Page pageNumber={pageNumber} width={800} renderTextLayer={false} renderAnnotationLayer={false}/>
                </div>
            </Document>
        </div>
        {numPages && numPages > 1 && (
            <footer className="flex items-center justify-center p-2 border-t border-white/10 bg-[#111111]">
                <button onClick={goToPrevPage} disabled={pageNumber <= 1} className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-white/10 transition-colors">
                    <ChevronLeft size={24} />
                </button>
                <p className="mx-4 text-lg text-white/80">
                    Page {pageNumber} of {numPages}
                </p>
                <button onClick={goToNextPage} disabled={pageNumber >= numPages} className="p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed text-white hover:bg-white/10 transition-colors">
                    <ChevronRight size={24} />
                </button>
            </footer>
        )}
      </div>
    </div>
  );
};

export default function CertificationsClient() {
  const [selectedPdf, setSelectedPdf] = useState<{ name: string; file: string; } | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
       if (event.key === 'Escape') {
        setSelectedPdf(null);
       }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <>
      <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 z-0">
            <Image
            src="/liftdesign.jpg"
            alt="Lubeck Elevators background"
            layout="fill"
            objectFit="cover"
            quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Certifications</h1>
            <p className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
              We adhere to the highest standards of quality, safety, and environmental management.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {certifications.map((cert, index) => (
              <div key={index} onClick={() => setSelectedPdf(cert)} className="group cursor-pointer relative w-full sm:w-80">
                <div className="bg-[#1C1C1C] border border-white/10 rounded-xl p-6 text-center transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20 overflow-hidden">
                  <div className="h-80 mb-4 flex items-center justify-center overflow-hidden rounded-md bg-black/20">
                    <Document file={cert.file} loading={<LoadingSpinner />} className="transition-transform duration-500 group-hover:scale-105">
                       <Page pageNumber={1} width={220} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  </div>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-white/90 transition-colors duration-300 h-12 flex items-center justify-center">{cert.name}</h3>
                </div>
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl">
                    <div className="flex flex-col items-center text-white">
                        <Eye size={48} className="mb-2"/>
                        <span className="font-semibold text-lg">View Certificate</span>
                    </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 max-w-3xl mx-auto">
            <p className="text-xl md:text-2xl font-heading text-white/70 italic">
              &quot;Certified excellence, engineered for your peace of mind.&quot;
            </p>
          </div>
        </div>
      </div>
      {selectedPdf && <PDFViewerModal file={selectedPdf.file} name={selectedPdf.name} onClose={() => setSelectedPdf(null)} />}
    </>
  );
} 