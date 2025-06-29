'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  location: string;
  description: string;
  features: string[];
  imageUrl: string;
  impact: string;
  coords: { lat: number; lng: number };
  url: string;
}

interface HeroCarouselProps {
  projects: Project[];
}

export default function HeroCarousel({ projects }: HeroCarouselProps) {
  const [bgIdx, setBgIdx] = useState(0);
  const bgImages = projects.map((p) => p.imageUrl);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIdx((prev) => (prev + 1) % bgImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [bgImages.length]);

  return (
    <div className="absolute inset-0 w-full h-full z-0">
      {bgImages.map((img, idx) => (
        <Image
          key={img}
          src={img}
          alt="carousel background"
          width={1200}
          height={600}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${bgIdx === idx ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionProperty: 'opacity' }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-60" />
    </div>
  );
}
