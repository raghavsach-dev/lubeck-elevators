'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { ImageGalleryModal } from '@/app/components/ImageGalleryModal';

const goodsImages = [
    { src: '/Products/Goods/1.jpg', alt: 'Heavy-duty goods lift with wide opening' },
    { src: '/Products/Goods/2.png', alt: 'Industrial goods lift in a warehouse setting' },
    { src: '/Products/Goods/3.jpg', alt: 'Durable and robust goods lift interior' },
];

export default function GoodsPageClient() {
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
                Goods Lift
            </motion.h1>
            
            <motion.p 
                className="text-base md:text-lg text-white/80 mb-8 leading-relaxed"
                variants={itemVariants}
            >
                Engineered for performance and durability, our goods lifts are the workhorses of any industrial or commercial setting. They are designed to handle heavy and bulky items safely and efficiently, streamlining your logistics and operational workflow. From warehouses to retail stores, our goods lifts provide the robust solution you need.
            </motion.p>

            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12" variants={containerVariants}>
                {goodsImages.map((image, index) => (
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
                    <li>High load capacity for transporting heavy goods</li>
                    <li>Robust construction for durability and reliability</li>
                    <li>Wide doors and spacious cabins for easy loading and unloading</li>
                    <li>Advanced safety mechanisms to protect both cargo and personnel</li>
                    <li>Customizable to fit specific industrial requirements and space constraints</li>
                </ul>
            </motion.div>
        </motion.div>
        {isGalleryOpen && (
            <ImageGalleryModal
                images={goodsImages}
                startIndex={selectedImageIndex}
                onClose={closeGallery}
            />
        )}
        </>
    );
} 