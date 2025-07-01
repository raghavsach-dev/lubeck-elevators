'use client';

import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X } from 'lucide-react';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

export const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#D4AF37]"></div>
    </div>
);

interface PdfViewerPopupProps {
  file: string;
  name: string;
  onClose: () => void;
  activeCatalog: 'Main' | 'LOP';
  onCatalogSelect: (catalog: 'Main' | 'LOP') => void;
}

export default function PdfViewerPopup({ file, name, onClose, activeCatalog, onCatalogSelect }: PdfViewerPopupProps) {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageWidth, setPageWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      // Set width to be 90% of window width, or a max of 800px
      const newWidth = Math.min(window.innerWidth * 0.9, 800);
      setPageWidth(newWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-[9999] flex flex-col items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-800/50 hover:bg-red-500/80 text-white rounded-full p-2 z-[10000] transition-colors"
      >
        <X size={24} />
      </button>

      <div 
        className="w-full h-full p-2 md:p-8 overflow-auto pb-24"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl md:text-2xl font-bold text-center text-[#D4AF37] mb-4">{name}</h3>
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<LoadingSpinner />}
          className="flex flex-col items-center gap-4"
        >
          {Array.from(new Array(numPages), (el, index) => (
            <div key={`page_${index + 1}`} className="shadow-2xl">
                <Page
                    pageNumber={index + 1}
                    className="shadow-2xl"
                    width={pageWidth ?? undefined}
                />
            </div>
          ))}
        </Document>
      </div>

      <div 
        className="absolute bottom-0 left-0 right-0 h-20 bg-black/80 backdrop-blur-sm border-t border-white/10 flex justify-center items-center gap-4 px-4 z-[10000]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => onCatalogSelect('Main')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeCatalog === 'Main'
              ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              : 'bg-gray-800/50 text-white/70 hover:bg-gray-700/70'
          }`}
        >
          Main Catalog
        </button>
        <button
          onClick={() => onCatalogSelect('LOP')}
          className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
            activeCatalog === 'LOP'
              ? 'bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]'
              : 'bg-gray-800/50 text-white/70 hover:bg-gray-700/70'
          }`}
        >
          LOP Catalog
        </button>
      </div>
    </div>
  );
} 