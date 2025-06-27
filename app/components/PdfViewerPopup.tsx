'use client';

import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { X } from 'lucide-react';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#D4AF37]"></div>
    </div>
);

interface PdfViewerPopupProps {
  file: string;
  onClose: () => void;
}

export default function PdfViewerPopup({ file, onClose }: PdfViewerPopupProps) {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="fixed inset-0 bg-black/90 z-[100] flex flex-col items-center justify-center">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-800/50 hover:bg-red-500/80 text-white rounded-full p-2 z-[101] transition-colors"
      >
        <X size={24} />
      </button>
      <div className="w-full h-full p-4 md:p-16 overflow-auto">
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
                />
            </div>
          ))}
        </Document>
      </div>
    </div>
  );
} 