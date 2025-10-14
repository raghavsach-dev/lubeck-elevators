"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import { getAppDownloads, FullAppData } from '../../lib/firebaseServices';

interface DownloadItem extends FullAppData {
  platform: string;
  icon: string;
  type: 'customer' | 'team';
}

export default function DownloadsPageClient() {
  const [downloadItems, setDownloadItems] = useState<DownloadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        setLoading(true);
        const apps = await getAppDownloads();

        // If no apps from Firebase, use fallback data
        let appData = apps;
        if (!apps || apps.length === 0) {
          console.log('No apps found in Firebase, using fallback data');
          appData = [
            {
              id: 'digital',
              title: 'Lubeck Elevators Digital',
              description: 'Official mobile app for customers to explore our premium elevator products, request quotes, track installations, and access exclusive offers.',
              downloadUrl: '#',
              version: '1.2.0',
              size: '',
              lastUpdated: ''
            },
            {
              id: 'team',
              title: 'Lubeck Elevators Team',
              description: 'Internal team application for Lubeck employees to manage projects, access technical documentation, and streamline operations.',
              downloadUrl: '#',
              version: '1.1.5',
              size: '',
              lastUpdated: ''
            }
          ];
        }

        // Transform the data to include UI-specific fields
        const transformedApps: DownloadItem[] = appData.map(app => ({
          ...app,
          platform: 'Available on Android',
          icon: app.id === 'digital' ? 'mobile' : 'team',
          type: app.id === 'digital' ? 'customer' : 'team' as 'customer' | 'team'
        }));

        setDownloadItems(transformedApps);
      } catch (err) {
        console.error('Error fetching app data:', err);
        // Use fallback data even on error
        const fallbackApps: DownloadItem[] = [
          {
            id: 'digital',
            title: 'Lubeck Elevators Digital',
            description: 'Official mobile app for customers to explore our premium elevator products, request quotes, track installations, and access exclusive offers.',
            platform: 'Available on Android',
            downloadUrl: '#',
            version: '1.2.0',
            size: '',
            lastUpdated: '',
            icon: 'mobile',
            type: 'customer'
          },
          {
            id: 'team',
            title: 'Lubeck Elevators Team',
            description: 'Internal team application for Lubeck employees to manage projects, access technical documentation, and streamline operations.',
            platform: 'Available on Android',
            downloadUrl: '#',
            version: '1.1.5',
            size: '',
            lastUpdated: '',
            icon: 'team',
            type: 'team'
          }
        ];
        setDownloadItems(fallbackApps);
        setError(null); // Don't show error if we have fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchAppData();
  }, []);


  const handleDownload = (downloadUrl: string) => {
    // Open Firebase URL directly
    window.open(downloadUrl, '_blank');
  };

  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'mobile':
        return (
          <svg className="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'team':
        return (
          <svg className="w-16 h-16 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            variants={itemVariants}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            Mobile <span className="text-[#D4AF37]">Apps</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/60 max-w-3xl mx-auto"
          >
            Download our official mobile applications for enhanced customer experience and streamlined team operations.
            Available on both iOS and Android platforms.
          </motion.p>
        </motion.div>


        {/* Loading State */}
        {loading && (
          <motion.div
            className="flex flex-col items-center justify-center py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-[#D4AF37] mb-4"></div>
            <p className="text-white/60">Loading app information...</p>
          </motion.div>
        )}

        {/* Error State */}
        {error && (
          <motion.div
            className="text-center py-20"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <div className="text-red-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Error Loading Apps</h3>
            <p className="text-white/60 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#FFD700] transition-colors"
            >
              Try Again
            </button>
          </motion.div>
        )}

        {/* Apps Grid */}
        {!loading && !error && (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
          {downloadItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-[#1C1C1C] border border-white/10 rounded-xl p-8 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20 group"
            >
              <div className="text-center mb-6">
                <div className="mb-4 flex justify-center">
                  {renderIcon(item.icon)}
                </div>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                  item.type === 'customer'
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-green-500/20 text-green-400'
                }`}>
                  {item.type === 'customer' ? 'For Customers' : 'For Team'}
                </span>
              </div>

              <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D4AF37] text-center group-hover:text-[#FFD700] transition-colors">
                {item.title}
              </h3>

              <p className="text-white/70 text-base mb-6 leading-relaxed text-center">
                {item.description}
              </p>

              <div className="text-center text-sm text-white/60 mb-4">
                {item.platform}
              </div>

              <div className="text-center text-sm text-[#D4AF37] font-semibold mb-6">
                Version {item.version}
              </div>

              <button
                onClick={() => handleDownload(item.downloadUrl)}
                className="w-full bg-[#D4AF37] text-black font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:shadow-[0_0_15px_rgba(255,215,0,0.5)] flex items-center justify-center gap-3 group-hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download APK
              </button>
            </motion.div>
          ))}
          </motion.div>
        )}

        {/* Contact CTA */}
        <motion.div
          className="text-center mt-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="bg-[#1C1C1C] border border-white/10 rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="font-heading text-2xl font-semibold mb-4 text-[#D4AF37]">
              Need Support?
            </h3>
            <p className="text-white/70 mb-6">
              Having trouble downloading or using our mobile apps? Our technical support team is here to assist you
              with any questions or issues you may encounter.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#D4AF37] text-black font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] hover:scale-105"
            >
              Get Support
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
