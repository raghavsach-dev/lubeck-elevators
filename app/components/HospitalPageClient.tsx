'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageGalleryModal } from '@/app/components/ImageGalleryModal';

const hospitalImages = [
    { src: '/Products/Hospital/1.png', alt: 'Spacious hospital elevator for stretchers and equipment' },
    { src: '/Products/Hospital/2.png', alt: 'Hospital elevator with easy-to-clean stainless steel interior' },
    { src: '/Products/Hospital/3.png', alt: 'Well-lit and accessible hospital elevator cabin' },
];

export default function HospitalPageClient() {
    const [isGalleryOpen, setGalleryOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openGallery = (index: number) => {
        setSelectedImageIndex(index);
        setGalleryOpen(true);
    };

    const closeGallery = () => {
        setGalleryOpen(false);
    };

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

    return (
        <>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6"
                variants={itemVariants}
            >
                Hospital Elevator
            </motion.h1>
            
            <motion.p 
                className="text-base md:text-lg text-white/80 mb-8 leading-relaxed"
                variants={itemVariants}
            >
                Designed with the specific needs of healthcare facilities in mind, our hospital elevators provide safe, spacious, and reliable transportation for patients, staff, and medical equipment. These elevators are built for precision, with smooth, jerk-free rides to ensure patient comfort and safety during transit.
            </motion.p>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12" variants={containerVariants}>
                {hospitalImages.map((image, index) => (
                    <motion.div 
                        key={index} 
                        variants={itemVariants} 
                        className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
                        onClick={() => openGallery(index)}
                        whileHover="hover"
                        initial="initial"
                    >
                        <motion.div
                            className="w-full h-full"
                            variants={{
                                initial: { scale: 1 },
                                hover: { scale: 1.1 },
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                width={400}
                                height={600}
                                className="object-cover w-full h-96"
                            />
                        </motion.div>
                        <motion.div
                            className="absolute inset-0 border-4 pointer-events-none"
                            variants={{
                                initial: { borderColor: 'rgba(212, 175, 55, 0)' },
                                hover: { borderColor: 'rgba(212, 175, 55, 1)' },
                            }}
                            transition={{ duration: 0.4, ease: 'easeInOut' }}
                        />
                    </motion.div>
                ))}
            </motion.div>

            <motion.div variants={itemVariants}>
                <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">Key Features</h2>
                <ul className="space-y-3 text-white/70 list-disc list-inside">
                    <li>Spacious cabin to accommodate stretchers and medical equipment</li>
                    <li>Smooth and jerk-free operation for patient comfort</li>
                    <li>Priority call systems for emergency situations</li>
                    <li>Hygienic and easy-to-clean cabin surfaces</li>
                    <li>Compliance with all relevant safety and accessibility standards for hospitals</li>
                </ul>
            </motion.div>
        </motion.div>
        {isGalleryOpen && (
            <ImageGalleryModal
                images={hospitalImages}
                startIndex={selectedImageIndex}
                onClose={closeGallery}
            />
        )}
        </>
    );
} 