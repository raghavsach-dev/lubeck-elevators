import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">About Lubeck Elevators</h1>
          <p className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">Lifting With Luxury Since 2009</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-base md:text-lg text-white/80">
            <p>
              LUBECK ELEVATORS is one of the world&apos;s leading quality assured elevators company based in India, established in the year 2009. We are a well-known household name in lift manufacturing, engaged in the design and production of Passenger Elevators, Home Elevators, Goods Elevators, and much more.
            </p>
            <p>
              With more than 750 systems delivered, we design, build, and install award-worthy elevators, especially for your needs, offering solutions for both Residential and Commercial properties.
            </p>
          </div>
          <div className="order-first md:order-last">
            <Image src="/liftdesign.jpg" alt="Lubeck Elevators" width={500} height={500} className="rounded-xl mx-auto" />
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-12">Why Choose <span className="text-[#D4AF37]">Lubeck</span></h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard title="Customized For You" description="Get your lift customized according to your exact needs and building specifications." />
            <FeatureCard title="Ultra Premium Luxury Cabins" description="Experience true luxury with our high-end, modern designer steel sheets and cabin interiors." />
            <FeatureCard title="German Technology" description="Our elevators are built with state-of-the-art German technology for reliability and performance." />
            <FeatureCard title="Maintenance Free" description="Enjoy peace of mind with our elevators, designed to be maintenance-free and dependable." />
            <FeatureCard title="Noise Free & Smooth" description="Our systems are engineered for a silent and exceptionally smooth ride experience." />
            <FeatureCard title="Verified Quality" description="We are proud to be a verified business on both Justdial and Indiamart, ensuring trust and quality." />
          </div>
        </div>

        <div className="mt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Our Mission</h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">To ascend as the premier elevator company by delivering unparalleled vertical transportation solutions. We are committed to innovation, quality, and customer satisfaction, ensuring every journey with Lubeck Elevators is a testament to our dedication to excellence.</p>
              </div>
              <div>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4">Our Vision</h2>
                <p className="text-base md:text-lg text-white/80 leading-relaxed">To redefine the standards of the elevator industry by integrating cutting-edge technology with sustainable practices. We envision a future where our elevators not only enhance accessibility but also contribute to smarter, more efficient urban environments, elevating the quality of life for all.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl order-first md:order-last">
              <Image 
                src="/lift-sample.jpg" 
                alt="Modern elevator" 
                width={600} 
                height={800} 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-[#1C1C1C] p-6 rounded-lg border border-white/10">
    <h3 className="font-heading text-xl font-semibold text-[#D4AF37] mb-3">{title}</h3>
    <p className="text-white/70">{description}</p>
  </div>
) 