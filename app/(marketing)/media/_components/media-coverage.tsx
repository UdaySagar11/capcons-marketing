import React from 'react';
import { SectionHeader } from './section-header';
import { Button } from '@/components/common/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const mediaCoverage = [
  {
    image: '/media/coverage-1.jpg',
    title: 'TechCrunch',
    description: 'The Future of Social Networking',
    date: 'January 1, 2025',
    link: '/media/coverage/techcrunch',
  },
  {
    image: '/media/coverage-2.jpg',
    title: 'Wired',
    description: 'Privacy-First Social Platform Gains Traction',
    date: 'January 1, 2025',
    link: '/media/coverage/wired',
  },
  {
    image: '/media/coverage-3.jpg',
    title: 'The Verge',
    description: 'New Social Network Challenges Industry Giants',
    date: 'January 1, 2025',
    link: '/media/coverage/the-verge',
  },
];

export const MediaCoverage = () => {
  return (
    <section className="w-full">
      <SectionHeader title="Media Coverage" />
      <div className="space-y-4">
        {mediaCoverage.map((coverage, index) => (
          <div
            key={index}
            className="grid grid-cols-4 gap-4 bg-white p-2 sm:p-6 border-b"
          >
            <div className="text-left">
              <h3 className="font-bold text-sm">{coverage.title}</h3>
              <div className="text-sm text-black mt-1">{coverage.date}</div>
            </div>
            <div className="flex items-center text-black font-bold text-sm sm:text-lg col-span-3 sm:col-span-2">
              <span>{coverage.description}</span>
            </div>
            <div className="flex justify-end max-sm:col-span-4">
              <Link
                href={coverage.link}
                className="px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-2 text-center text-xs sm:text-sm shrink-0 text-[#39089D]"
              >
                Read More <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Button variant="secondary" className="bg-[#39089D] text-white hover:bg-[#39089D]/80 rounded-full">
          See More
        </Button>
      </div>
    </section>
  );
};
