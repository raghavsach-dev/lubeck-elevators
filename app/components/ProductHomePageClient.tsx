'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageGalleryModal } from '@/app/components/ImageGalleryModal';

const homeImages = [
    { src: '/Products/Home/1.png', alt: 'Modern home lift with a sleek and minimalist design' },
    { src: '/Products/Home/2.png', alt: 'Home lift with a spacious and comfortable interior' },
    { src: '/Products/Home/3.png', alt: 'Luxurious home lift with a comfortable and chic interior' },
];

export default function ProductHomePageClient() {
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
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.h1 
                className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-6"
                variants={itemVariants}
            >
                Home Lift
            </motion.h1>
            
            <motion.p 
                className="text-base md:text-lg text-white/80 mb-8 leading-relaxed"
                variants={itemVariants}
            >
                Bring convenience and luxury into your home with our bespoke home lifts. Designed for private residences, our home elevators offer a perfect blend of functionality and style, making your home more accessible without compromising on aesthetics. They are compact, energy-efficient, and can be installed with minimal structural changes.
            </motion.p>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12" variants={containerVariants}>
                {homeImages.map((image, index) => (
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
                    <li>Compact design ideal for residential properties</li>
                    <li>Low power consumption and quiet operation</li>
                    <li>Customizable to match your home&apos;s interior design</li>
                    <li>Easy and quick installation with minimal disruption</li>
                    <li>Enhanced safety features for peace of mind</li>
                </ul>
            </motion.div>

            {isGalleryOpen && (
                <ImageGalleryModal
                    images={homeImages}
                    startIndex={selectedImageIndex}
                    onClose={closeGallery}
                />
            )}
        </motion.div>
    );
} 