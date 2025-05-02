import React from 'react';
import { SectionHeader } from './section-header';
import Image from 'next/image';

const mediaLogos = [
  {
    src: '/images/media/media1.png',
    alt: 'Hindustan Times',
  },
  {
    src: '/images/media/media2.png',
    alt: 'Times Plus',
  },
  {
    src: '/images/media/media3.png',
    alt: 'Daily Hunt',
  },
  {
    src: '/images/media/media4.png',
    alt: 'The Print',
  },
  {
    src: '/images/media/media5.png',
    alt: 'ANI',
  },
  {
    src: '/images/media/media6.png',
    alt: 'Lokmat Times',
  },
];

export const PromotionalMedia = () => {
  return (
    <section className="w-full max-w-5xl mx-auto">
      <SectionHeader title="From Promotional Media" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaLogos.map((logo, index) => (
          <div key={index} className="bg-white rounded-lg p-6 flex items-center justify-center shadow-sm">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={200}
              height={80}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
