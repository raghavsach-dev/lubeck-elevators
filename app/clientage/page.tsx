import Image from 'next/image';
import ScrollingLogos from '../components/ScrollingLogos';

export default function ClientagePage() {
  const clients = [
    { 
      src: '/Clientage/Clients/VPElectronics.png', 
      name: 'VP Electronics',
      caption: 'Partnering with Lubeck Elevators to provide reliable electronic components, ensuring top performance and safety in every lift.' 
    },
    { 
      src: '/Clientage/Clients/bikanerwala.png', 
      name: 'Bikanerwala',
      caption: 'Lubeck Elevators is proud to provide seamless vertical transport solutions for Bikanerwala, enhancing the experience for their customers and staff.'
    },
    { 
      src: '/Clientage/Clients/GNIOT.png', 
      name: 'GNIOT Group of Institutions',
      caption: 'Supporting the educational journey of future leaders, Lubeck Elevators delivers safe and efficient mobility solutions at GNIOT.'
    },
    { 
      src: '/Clientage/Clients/Rising Group.png', 
      name: 'Rising Group',
      caption: 'In partnership with Rising Group, Lubeck Elevators provides cutting-edge vertical transportation for their premier residential and commercial properties.'
    },
    { 
      src: '/Clientage/Clients/Clarks inn.avif', 
      name: 'Clarks Inn',
      caption: 'Lubeck Elevators enhances the guest experience at Clarks Inn hotels with smooth, reliable, and luxurious elevator solutions.'
    },
    { 
      src: '/Clientage/Clients/GD Goenka.png', 
      name: 'GD Goenka School',
      caption: 'Ensuring safe and convenient campus mobility, Lubeck Elevators is the trusted partner for the prestigious GD Goenka Group of Schools.'
    },
    { 
      src: '/Clientage/Clients/Gyaananada School.jpeg', 
      name: 'Gyaananada School',
      caption: 'Lubeck Elevators supports Gyaananada School\'s modern learning environment with safe and dependable elevator systems.'
    },
  ];

  const collaborations = [
    { 
      src: '/Clientage/Collaborations/Tectronics.jpg', 
      name: 'Tectronics',
      caption: 'A collaboration focused on innovation, Lubeck Elevators and Tectronics work together to integrate advanced technology in vertical transport.'
    },
    { 
      src: '/Clientage/Collaborations/Weco.png', 
      name: 'Weco',
      caption: 'In collaboration with WECO, a global leader in elevator components, Lubeck Elevators ensures the highest standards of safety and quality.'
    },
    { 
      src: '/Clientage/Collaborations/Fermator.png', 
      name: 'Fermator',
      caption: 'Partnering with Fermator, a premier manufacturer of automatic elevator doors, Lubeck Elevators delivers excellence in performance and design.'
    },
    {
      src: '/Clientage/Collaborations/JSLN.png',
      name: 'JSLN',
      caption: 'Sourcing premier components with JSLN, Lubeck Elevators ensures every part meets our rigorous standards for quality and performance.'
    },
    {
      src: '/Clientage/Collaborations/torindrive.png',
      name: 'Torin Drive',
      caption: 'Lubeck Elevators partners with Torin Drive, a leader in traction technology, to power our elevators with robust and reliable machinery.'
    },
    {
      src: '/Clientage/Collaborations/NBSL.png',
      name: 'NBSL',
      caption: 'Our collaboration with NBSL, a global leader in elevator components, allows us to build with world-class door systems and safety features.'
    },
    { 
      src: '/Clientage/Collaborations/Arkel.jpeg', 
      name: 'Arkel',
      caption: 'Lubeck Elevators integrates Arkel\'s advanced control systems to deliver intelligent, efficient, and reliable elevator performance.'
    },
    {
      src: '/Clientage/Collaborations/Montanari Group.png',
      name: 'Montanari Group',
      caption: 'Integrating the best of Italian engineering, our partnership with Montanari Group provides our elevators with high-performance, durable traction machines.'
    },
    {
      src: '/Clientage/Collaborations/Marazzi.png',
      name: 'Marazzi',
      caption: 'In collaboration with Marazzi, Lubeck Elevators offers luxurious and durable cabin finishes, bringing world-class Italian design to our vertical transport solutions.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black pt-32 pb-20 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/liftdesign.jpg"
          alt="Lubeck Elevators background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-80" />
      </div>
      <div className="relative z-10 space-y-24">
        <div className="space-y-10">
          <div className="text-center max-w-7xl mx-auto px-6">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Clientage</h1>
            <p className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">We are proud to have worked with a diverse range of prestigious clients who trust in our commitment to quality and excellence.</p>
          </div>
          <ScrollingLogos logos={clients} itemClassName="h-40 w-40 md:h-48 md:w-48" speed="fast" />
        </div>

        <div className="space-y-10">
          <div className="text-center max-w-7xl mx-auto px-6">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">Our Collaborations</h2>
            <p className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">We partner with leading global manufacturers to ensure our elevators are built with the highest quality components and technology.</p>
          </div>
          <ScrollingLogos logos={collaborations} itemClassName="h-40 w-64 md:h-48 md:w-72" speed="normal" />
        </div>
      </div>
    </div>
  );
} 