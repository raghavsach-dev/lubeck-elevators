'use client';

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const PdfViewerPopup = dynamic(() => import('./PdfViewerPopup'), {
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#D4AF37]"></div></div> 
});

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management', file: '/Certifications/Lubeck-iso-9001-2015-qms.pdf' },
  { name: 'ISO 14001:2015', description: 'Environmental Management', file: '/Certifications/Lubeck-iso-14001-2015-ems.pdf' },
  { name: 'ISO 45001:2018', description: 'Occupational Health & Safety', file: '/Certifications/Lubeck-iso-45001-2018-ohs.pdf' },
  { name: 'LEED Gold', description: 'Green Building', file: '/Certifications/Lubeck-usgb-leed-gold.pdf' },
  { name: 'Integrated QMS, EMS & OHSMS', description: 'Unified Standards', file: '/Certifications/Lubeck-india-certificate-qms-ems-ohsms.pdf' }
];

export default function AboutPageClient() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };
  
  const textVariant: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <>
      <div className="relative bg-black text-white min-h-screen pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/liftdesign.jpg"
            alt="Lubeck Elevators office background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1 variants={itemVariants} className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-[#D4AF37]">About Lubeck Elevators</motion.h1>
            <motion.p variants={itemVariants} className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">Lifting With Luxury Since 2009</motion.p>
          </motion.div>

          <motion.div 
            className="mt-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariant}
          >
            <div className="space-y-6 text-base md:text-lg text-white/80 max-w-3xl mx-auto text-center">
              <p>
                LUBECK ELEVATORS is one of the world&apos;s leading quality assured and Government Certified elevators company based in India, established in the year 2009. In collaboration with a German company for cutting-edge technology integration, we are a well-known household name in lift manufacturing, engaged in the design and production of Passenger Elevators, Home Elevators, Goods Elevators, and much more.
              </p>
              <p>
                With more than 1200+ projects delivered, we design, build, and install award-worthy elevators, especially for your needs, offering solutions for both Residential, Commercial, and Industrial properties.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="mt-20 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
              <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Key <span className="text-[#D4AF37]">Highlights</span></motion.h2>
              <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                  <HighlightCard title="Founder" description="Mr. Parveen Gupta" />
                  <HighlightCard title="Industry Experience" description="Over 15 years" />
                  <HighlightCard title="Projects Delivered" description="1200+ and counting" />
                  <HighlightCard title="Operational Reach" description="PAN India" />
              </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Why Choose <span className="text-[#D4AF37]">Lubeck</span></motion.h2>
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard title="Customized For You" description="Get your lift customized according to your exact needs and building specifications." />
              <FeatureCard title="Ultra Premium Luxury Cabins" description="Experience true luxury with our high-end, modern designer steel sheets and cabin interiors." />
              <FeatureCard title="German Technology" description="Our elevators are built with state-of-the-art German technology for reliability and performance." />
              <FeatureCard title="Maintenance Free" description="Enjoy peace of mind with our elevators, designed to be maintenance-free and dependable." />
              <FeatureCard title="Noise Free & Smooth" description="Our systems are engineered for a silent and exceptionally smooth ride experience." />
              <FeatureCard title="Verified Quality" description="We are proud to be a verified business on both Justdial and Indiamart, ensuring trust and quality." />
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Our Commitment to <span className="text-[#D4AF37]">Quality and Safety</span></motion.h2>
            <motion.p variants={itemVariants} className="text-center text-base md:text-lg text-white/80 max-w-4xl mx-auto mb-12">
              We adhere to the highest international standards, ensuring that every Lubeck elevator is a benchmark in quality, safety, and environmental responsibility. Our certifications are a testament to our unwavering commitment to excellence.
            </motion.p>
            <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
              {certifications.map(cert => (
                <CertificationItem 
                  key={cert.name}
                  name={cert.name} 
                  description={cert.description} 
                  onClick={() => setSelectedPdf(cert.file)}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-8 text-center md:text-left">
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Our Mission</h2>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">To ascend as the premier elevator company by delivering unparalleled vertical transportation solutions. We are committed to innovation, quality, and customer satisfaction, ensuring every journey with Lubeck Elevators is a testament to our dedication to excellence. This commitment drives us to meticulously source the finest materials, employ world-class manufacturing processes, and provide comprehensive support from initial design to lifelong maintenance. We aim to build lasting relationships with our clients, founded on trust and a shared passion for architectural brilliance. Our goal is not just to meet expectations, but to consistently exceed them, setting a new paradigm for service and reliability in the industry.</p>
                </div>
                <div>
                  <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Our Vision</h2>
                  <p className="text-base md:text-lg text-white/80 leading-relaxed">To redefine the standards of the elevator industry by integrating cutting-edge technology with sustainable practices. We envision a future where our elevators not only enhance accessibility but also contribute to smarter, more efficient urban environments. Our forward-thinking approach embraces IoT-enabled smart features for predictive maintenance, energy-efficient drive systems, and regenerative technologies that minimize environmental impact, setting new benchmarks for the industry worldwide. We aspire to be a global leader, synonymous with innovation and responsible engineering, shaping the future of vertical mobility for generations to come.</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="rounded-xl overflow-hidden shadow-2xl max-w-sm mx-auto">
                <Image 
                  src="/lift-sample.jpg" 
                  alt="Modern elevator" 
                  width={600} 
                  height={800} 
                  className="object-cover w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {selectedPdf && <PdfViewerPopup file={selectedPdf} name={certifications.find(c => c.file === selectedPdf)?.name || 'Certificate'} onClose={() => setSelectedPdf(null)} />}
    </>
  );
}

const FeatureCard = ({ title, description }: { title: string, description: string }) => {
  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0 8px 30px rgba(212, 175, 55, 0.2)" }}
      className="bg-[#1C1C1C] p-6 rounded-lg border border-white/10"
    >
      <h3 className="font-heading text-xl font-semibold text-[#D4AF37] mb-3">{title}</h3>
      <p className="text-white/70">{description}</p>
    </motion.div>
  );
};

const HighlightCard = ({ title, description }: { title: string, description: string }) => {
  const cardVariants: Variants = {
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8, boxShadow: "0 8px 30px rgba(212, 175, 55, 0.2)" }}
      className="bg-[#1C1C1C] p-6 rounded-lg border border-white/10 text-center"
    >
      <h3 className="font-heading text-xl font-semibold text-white/90 mb-2">{title}</h3>
      <p className="text-[#D4AF37] text-2xl font-bold">{description}</p>
    </motion.div>
  );
};

const CertificationItem = ({ name, description, onClick }: { name: string, description: string, onClick: () => void }) => {
  const cardVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      className="flex flex-col items-center justify-center p-4 bg-[#1C1C1C] rounded-lg border border-white/10 w-48 text-center cursor-pointer transition-all duration-300 transform hover:-translate-y-2 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/20"
    >
      <p className="font-bold text-base md:text-lg text-[#D4AF37]">{name}</p>
      <p className="text-xs md:text-sm text-white/70 mt-1">{description}</p>
    </motion.div>
  )
} 