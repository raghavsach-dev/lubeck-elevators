'use client';

import { useState, useRef } from 'react';
import { Play, Pause, Maximize } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    title: string;
}

export const VideoPlayer = ({ src, title }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="relative group">
        <video
          ref={videoRef}
          src={src}
          title={title}
          className="w-full h-auto aspect-video object-cover rounded-t-lg"
          onClick={handlePlayPause}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300" onClick={handlePlayPause}>
          {!isPlaying ? <Play size={64} className="text-white" /> : <Pause size={64} className="text-white" />}
        </div>
        <div className="absolute bottom-2 right-2">
            <button onClick={handleFullscreen} className="p-2 bg-black/50 text-white rounded-full hover:bg-[#D4AF37] transition-colors">
                <Maximize size={20} />
            </button>
        </div>
    </div>
  );
}; 