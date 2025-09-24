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

export default function TeamPrivacyPageClient() {
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
            <span className="text-[#D4AF37]">Lubeck Elevators Team</span>
            <br />
            Privacy Policy
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 mb-8"
          >
            How we collect, use, and protect your data in our internal team application
          </motion.p>
          <motion.div variants={itemVariants} className="text-sm text-white/60">
            Last Updated: September 24, 2025
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
              <p className="text-white/80 leading-relaxed mb-8">
                This Privacy Policy describes how Lubeck Team (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, and safeguards your information when you use our mobile application (the &quot;App&quot;). By using the App, you agree to the collection and use of information in accordance with this policy.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">1. INFORMATION WE COLLECT</h2>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">1.1 Personal Information</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                We may collect the following personal information:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li>Email address and password for authentication</li>
                <li>User profile information (name, role, position)</li>
                <li>Contact information (phone number, address)</li>
                <li>Site-related data and project information</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">1.2 Usage Data</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                We automatically collect certain information when you use the App:
              </p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li>Device information (device type, operating system, unique device identifiers)</li>
                <li>App usage statistics and performance data</li>
                <li>Log data and crash reports</li>
                <li>Location data (if location services are enabled for map functionality)</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">1.3 Images and Media</h3>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>Photographs taken or selected within the App (such as lift installation images)</li>
                <li>Images are uploaded to our secure cloud storage service</li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">2. HOW WE USE YOUR INFORMATION</h2>
              <p className="text-white/80 leading-relaxed mb-4">We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>To authenticate users and provide access to the App</li>
                <li>To manage and track elevator/lift installation projects</li>
                <li>To store project-related data and documentation</li>
                <li>To provide customer support and technical assistance</li>
                <li>To improve the App&apos;s functionality and user experience</li>
                <li>To comply with legal obligations and business requirements</li>
                <li>To communicate with you about app updates and important notifications</li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">3. INFORMATION SHARING AND DISCLOSURE</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">3.1 Service Providers</h3>
              <p className="text-white/80 leading-relaxed mb-4">We may share your information with trusted third-party service providers who assist us in operating the App:</p>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li><strong className="text-[#D4AF37]">Firebase (Google)</strong> - for authentication and data storage</li>
                <li><strong className="text-[#D4AF37]">Cloudinary</strong> - for image storage and delivery</li>
                <li><strong className="text-[#D4AF37]">Airtable</strong> - for additional data management</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">3.2 Legal Requirements</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We may disclose your information if required by law, court order, or government regulation.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">3.3 Business Transfers</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">4. DATA STORAGE AND SECURITY</h2>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.1 Data Storage</h3>
              <ul className="list-disc list-inside text-white/80 mb-6 space-y-2">
                <li>Personal data is stored in Firebase Firestore (hosted by Google)</li>
                <li>Images are stored in Cloudinary&apos;s secure cloud storage</li>
                <li>Additional user credentials are stored in Airtable</li>
              </ul>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.2 Data Security</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">4.3 Data Retention</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                We retain your personal information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your data by contacting us.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">5. YOUR RIGHTS AND CHOICES</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.1 Access and Correction</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                You can access and update your personal information through the App&apos;s settings.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.2 Data Deletion</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                You can request deletion of your personal information by contacting us.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.3 Opt-out</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                You can opt-out of non-essential communications by adjusting your notification preferences.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">5.4 Location Data</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                You can disable location services through your device settings if you do not want to share location data.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">6. CHILDREN&apos;S PRIVACY</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The App is intended for use by adults and business professionals aged 18 and older. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">7. INTERNATIONAL DATA TRANSFERS</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">8. THIRD-PARTY SERVICES</h2>
              <p className="text-white/80 leading-relaxed mb-4">The App integrates with third-party services:</p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">8.1 Firebase</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Firebase provides authentication, database, and analytics services. Their privacy policy governs the use of data collected through Firebase.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">8.2 Cloudinary</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Cloudinary provides image storage and delivery services. Their privacy policy applies to images stored through their service.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">8.3 Airtable</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Airtable provides additional data storage services. Their privacy policy governs the use of data stored in Airtable.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">8.4 Google Maps</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Location services may use Google Maps. Google&apos;s privacy policy applies to location data processing.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">9. COOKIES AND TRACKING TECHNOLOGIES</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                The App may use cookies and similar tracking technologies to enhance user experience and analyze usage patterns. You can control cookie settings through your device and browser settings.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">10. CHANGES TO THIS PRIVACY POLICY</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy within the App and updating the &quot;Last Updated&quot; date.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">11. CONTACT US</h2>
              <p className="text-white/80 leading-relaxed mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
              <div className="bg-black/50 p-6 rounded-lg border border-white/10 mb-8">
                <p className="text-white font-semibold mb-2"><strong className="text-[#D4AF37]">Address:</strong> Lubeck Elevators Pvt. Ltd., Mumbai, Maharashtra, India</p>
              </div>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">12. COMPLIANCE WITH LAWS</h2>
              <p className="text-white/80 leading-relaxed mb-4">This App and its privacy practices comply with applicable data protection laws including:</p>
              <ul className="list-disc list-inside text-white/80 mb-8 space-y-2">
                <li>General Data Protection Regulation (GDPR) for EU users</li>
                <li>California Consumer Privacy Act (CCPA) for California residents</li>
                <li>Other applicable privacy laws and regulations</li>
              </ul>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">13. CONSENT</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                By using the App, you consent to the collection, use, and sharing of your information as described in this Privacy Policy.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">14. ADDITIONAL INFORMATION FOR GOOGLE PLAY STORE</h2>
              <p className="text-white/80 leading-relaxed mb-4">
                This privacy policy is provided in accordance with Google Play&apos;s Developer Program Policies and the Google Play Developer Distribution Agreement.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">14.1 Data Collection and Security</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                We are committed to protecting user privacy and data security. All data collection is transparent and serves legitimate business purposes.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">14.2 Children&apos;s Privacy</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                The App is not directed to children under 18 and does not knowingly collect personal information from children.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">14.3 Data Deletion</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Users can request data deletion through the App or by contacting us directly.
              </p>

              <h3 className="font-heading text-xl md:text-2xl font-semibold text-white mb-4">14.4 Third-Party Services</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                All third-party services used comply with their respective privacy policies and data protection requirements.
              </p>

              <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#D4AF37] mb-6">15. GOVERNING LAW</h2>
              <p className="text-white/80 leading-relaxed mb-8">
                This Privacy Policy is governed by the laws of India, without regard to its conflict of law provisions.
              </p>

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
