'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { BlogPost } from '@/app/blogs/blogData';

interface SingleBlogClientProps {
  post: BlogPost;
}

export default function SingleBlogClient({ post }: SingleBlogClientProps) {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <motion.h1 
            variants={itemVariants} 
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37]"
          >
            {post.title}
          </motion.h1>
          <motion.p 
            variants={itemVariants} 
            className="text-sm md:text-base text-white/70 mt-4 max-w-3xl mx-auto"
          >
            Published on {post.date} by Lubeck Elevators
          </motion.p>
        </motion.div>

        <motion.article
          className="mt-12 text-white/80 text-lg leading-relaxed prose-invert prose-p:text-white/80 prose-h2:text-[#D4AF37] prose-h3:text-white"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          dangerouslySetInnerHTML={{ __html: post.content }}
        >
        </motion.article>
      </div>
    </div>
  );
} 