"use client";

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function DigitalPrivacyPageClient() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="text-[#D4AF37]">Lubeck Elevators Digital</span>
            <br />
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            How we collect, use, and protect your data in our mobile application
          </motion.p>
          <motion.div variants={itemVariants} className="text-sm text-white/60">
            Effective Date: September 24, 2025
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-[#1C1C1C] rounded-xl p-8 md:p-12 border border-white/10"
            variants={itemVariants}
          >
            <div className="prose prose-lg prose-invert max-w-none">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">1. Introduction</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Welcome to Lubeck Elevators Digital (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), a mobile application designed to help elevator owners and residents manage their elevator maintenance and report issues. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application (the &quot;App&quot;).
              </p>
              <p className="text-white/80 leading-relaxed mb-8">
                By using the Lubeck Elevators Digital App, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">2. Information We Collect</h2>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">2.1 Personal Information</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                We collect the following personal information when you create an account or use our services:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li><strong className="text-[#D4AF37]">Account Information:</strong> Full name, email address, phone number</li>
                <li><strong className="text-[#D4AF37]">Address Information:</strong> Flat number, address lines, tower/building name, city, state, pincode</li>
                <li><strong className="text-[#D4AF37]">Complaint Data:</strong> Issue titles, descriptions, issue types, urgency levels, complaint status</li>
                <li><strong className="text-[#D4AF37]">Media Attachments:</strong> Photos, videos, and voice messages submitted with complaints</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">2.2 Technical Information</h3>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li>Device information (device type, operating system, app version)</li>
                <li>Usage data (app interactions, error logs)</li>
                <li>Network information (IP address, connection type)</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">2.3 Data Storage and Caching</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                We use local storage on your device to cache certain data for improved performance and offline functionality.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">3. How We Use Your Information</h2>
              <p className="text-white/80 leading-relaxed mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li><strong className="text-[#D4AF37]">Service Provision:</strong> To provide elevator management services and process maintenance complaints</li>
                <li><strong className="text-[#D4AF37]">Communication:</strong> To contact you regarding your complaints, service updates, and maintenance schedules</li>
                <li><strong className="text-[#D4AF37]">Account Management:</strong> To create and manage your user account</li>
                <li><strong className="text-[#D4AF37]">App Functionality:</strong> To ensure proper app operation, troubleshooting, and feature improvement</li>
                <li><strong className="text-[#D4AF37]">Legal Compliance:</strong> To comply with applicable laws and regulations</li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">4. Information Sharing and Disclosure</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.1 Service Providers</h3>
              <p className="text-white/80 leading-relaxed mb-4">We may share your information with trusted third-party service providers who assist us in operating our app and providing services:</p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li><strong className="text-[#D4AF37]">Firebase (Google):</strong> For data storage and real-time database functionality</li>
                <li><strong className="text-[#D4AF37]">Cloudinary:</strong> For storing and serving media attachments (photos, videos, voice messages)</li>
                <li><strong className="text-[#D4AF37]">Expo/Application Platforms:</strong> For app hosting and distribution</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.2 Legal Requirements</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We may disclose your information if required by law or in response to legal processes, court orders, or government requests.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.3 Business Transfers</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">5. Data Storage and Security</h2>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.1 Data Storage Locations</h3>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li><strong className="text-[#D4AF37]">User Data:</strong> Stored in Firebase Firestore (Google Cloud Platform)</li>
                <li><strong className="text-[#D4AF37]">Media Files:</strong> Stored on Cloudinary servers</li>
                <li><strong className="text-[#D4AF37]">Local Data:</strong> Cached on your device using secure local storage</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.2 Security Measures</h3>
              <p className="text-white/80 leading-relaxed mb-4">We implement appropriate technical and organizational security measures to protect your personal information:</p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li>Data encryption in transit and at rest</li>
                <li>Secure authentication mechanisms</li>
                <li>Regular security audits and updates</li>
                <li>Access controls and monitoring</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">6. Data Retention</h2>
              <p className="text-white/80 leading-relaxed mb-4">We retain your personal information for as long as necessary to provide our services and comply with legal obligations:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li><strong className="text-[#D4AF37]">Account Data:</strong> Retained while your account is active and for a reasonable period thereafter</li>
                <li><strong className="text-[#D4AF37]">Complaint Data:</strong> Retained for service purposes and legal compliance requirements</li>
                <li><strong className="text-[#D4AF37]">Media Attachments:</strong> Retained until the associated complaint is resolved or deleted</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                You may request deletion of your account and associated data at any time.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">7. Your Rights and Choices</h2>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">7.1 Access and Control</h3>
              <p className="text-white/80 leading-relaxed mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li><strong className="text-[#D4AF37]">Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong className="text-[#D4AF37]">Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong className="text-[#D4AF37]">Deletion:</strong> Request deletion of your personal information</li>
                <li><strong className="text-[#D4AF37]">Portability:</strong> Request transfer of your data in a structured format</li>
                <li><strong className="text-[#D4AF37]">Restriction:</strong> Request limitation of processing in certain circumstances</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">7.2 Account Deletion</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                To delete your account and associated data, please contact us using the information provided below.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">7.3 Opt-out</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                You can opt-out of non-essential communications by contacting us or using in-app settings where available.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">8. Children&apos;s Privacy</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our app is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">9. International Data Transfers</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">10. Third-Party Services</h2>
              <p className="text-white/80 leading-relaxed mb-4">Our app integrates with third-party services. Please review the privacy policies of these services:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li><strong className="text-[#D4AF37]">Firebase:</strong> <a href="https://firebase.google.com/support/privacy" className="text-[#D4AF37] hover:text-[#FFD700] underline">https://firebase.google.com/support/privacy</a></li>
                <li><strong className="text-[#D4AF37]">Cloudinary:</strong> <a href="https://cloudinary.com/privacy" className="text-[#D4AF37] hover:text-[#FFD700] underline">https://cloudinary.com/privacy</a></li>
                <li><strong className="text-[#D4AF37]">Expo:</strong> <a href="https://expo.dev/privacy" className="text-[#D4AF37] hover:text-[#FFD700] underline">https://expo.dev/privacy</a></li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">11. Cookies and Tracking</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Our app may use local storage and caching mechanisms similar to cookies. We do not use third-party analytics or tracking services that collect personal information for advertising purposes.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">12. Changes to This Privacy Policy</h2>
              <p className="text-white/80 leading-relaxed mb-4">We may update this Privacy Policy from time to time. We will notify you of any changes by:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Posting the new Privacy Policy within the app</li>
                <li>Sending you an email notification</li>
                <li>Displaying a prominent notice in the app</li>
              </ul>
              <p className="text-white/80 leading-relaxed mb-8">
                Your continued use of the app after changes become effective constitutes acceptance of the updated policy.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">13. Contact Us</h2>
              <p className="text-white/80 leading-relaxed mb-4">If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
              <div className="bg-black/50 p-6 rounded-lg border border-white/10 mb-8">
                <p className="text-white font-semibold mb-2"><strong className="text-[#D4AF37]">Lubeck Elevators</strong></p>
                <p className="text-white/80">Address: 309, 3rd Floor, Angel Mega Mall, Kaushambi, Ghaziabad 201010</p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">14. Governing Law</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                This Privacy Policy is governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">15. Compliance</h2>
              <p className="text-white/80 leading-relaxed mb-4">This app and our data practices comply with:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Information Technology Act, 2000</li>
                <li>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</li>
                <li>Google Play Developer Program Policies</li>
                <li>General Data Protection Regulation (GDPR) for EU users (where applicable)</li>
              </ul>

              <div className="border-t border-white/10 pt-8 mt-12">
                <p className="text-white/60 text-sm">Last updated: September 24, 2025</p>
              </div>
            </div>
          </motion.div>

          {/* Back to Home Link */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Link
              href="/"
              className="px-8 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg transition-all duration-300 hover:bg-[#FFD700] hover:scale-105 transform hover:-translate-y-1 inline-block"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
