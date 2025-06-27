'use client';

import { VideoPlayer } from '../components/VideoPlayer';

const videos = [
  {
    src: '/Videos/NANITAL 2 LIFT HANDOVER.mp4',
    title: 'Nainital Project Handover',
    description: 'A showcase of the seamless integration and final handover of our dual-lift installation in a prestigious Nainital property.'
  },
  {
    src: '/Videos/SHREE KRISHNA DESIGNER CABIN.mp4',
    title: 'Shree Krishna Designer Cabin',
    description: 'An inside look at the exquisite craftsmanship of the custom Shree Krishna designer cabin, featuring intricate details.'
  },
  {
    src: '/Videos/GOLDEN DESIGNER 2200MM.mp4',
    title: 'Golden Designer 2200mm Cabin',
    description: 'Experience the grandeur of our 2200mm Golden Designer cabin, built for spaciousness and ultimate luxury.'
  },
  {
    src: '/Videos/PRESIDENTIAL ROSE GOLD DESIGN.mp4',
    title: 'Presidential Rose Gold Design',
    description: 'The epitome of elegance. Our Presidential suite cabin in a stunning rose gold finish, combining technology and artistry.'
  },
  {
    src: '/Videos/TRANSPARENT ROSE GOLD.mp4',
    title: 'Transparent Rose Gold Lift',
    description: 'A breathtaking panoramic elevator with rose gold accents, offering stunning views and a futuristic feel.'
  },
  {
    src: '/Videos/06.mp4',
    title: 'Modern Commercial Installation',
    description: 'A versatile and sleek elevator designed for high-traffic commercial spaces, demonstrating smooth, reliable operation.'
  }
];

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-[#D4AF37]">Video Gallery</h1>
          <p className="text-base md:text-lg text-white/70 mt-4 max-w-3xl mx-auto">
            Witness the art of elevation. Our videos showcase the seamless performance, exquisite design, and superior engineering of Lubeck Elevators in action.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videos.map((video, index) => (
                <VideoPlayer key={index} src={video.src} title={video.title} description={video.description} />
            ))}
        </div>
      </div>
    </div>
  );
} 