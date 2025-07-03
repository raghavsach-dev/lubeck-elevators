'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/app/blogs/blogData';

interface BlogListPageClientProps {
  posts: BlogPost[];
}

export default function BlogListPageClient({ posts }: BlogListPageClientProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37]">
            Lubeck Insights
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/70">
            Your source for elevator technology, safety, and design excellence.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              variants={itemVariants}
              className="bg-[#1a1a1a] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-white/10"
            >
              <Link href={`/blogs/${post.slug}`} className="block">
                <div className="relative h-48 w-full">
                  <Image
                    src={post.image}
                    alt={`Image for ${post.title}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-white/50 mb-2">{post.date}</p>
                  <h2 className="font-heading text-xl font-bold text-[#D4AF37] mb-3 h-20 overflow-hidden">
                    {post.title}
                  </h2>
                  <p className="text-white/70 mb-4 h-24 overflow-hidden">{post.excerpt}</p>
                  <div className="text-right">
                    <span className="font-semibold text-[#D4AF37] hover:text-white transition-colors duration-300">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
} 