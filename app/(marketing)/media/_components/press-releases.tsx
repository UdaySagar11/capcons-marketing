import React from 'react';
import { SectionHeader } from './section-header';
import { Button } from '@/components/common/ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const pressReleases = [
  {
    date: 'Today',
    title: 'Partnership with Leading Tech Companies Announced',
    description: 'Strategic partnerships formed to enhance platform capabilities and user experience.',
    href: '/media/press-releases/partnership-with-leading-tech-companies-announced',
  },
  {
    date: 'Today',
    title: 'Social Network Platform Launches New Privacy Features',
    description: 'Our platform introduces groundbreaking privacy controls, giving users...',
    href: '/media/press-releases/social-network-platform-launches-new-privacy-features',
  },
  {
    date: 'Today',
    title: 'Platform Reaches 1 Million Active Users',
    description: 'Milestone achievement as our social network platform surpasses 1 million active users worldwide.',
    href: '/media/press-releases/platform-reaches-1-million-active-users',
  },
];

export const PressReleases = () => {
  return (
    <section className="w-full">
      <SectionHeader title="Press Releases" />
      <div className="flex overflow-x-auto gap-6 pb-4">
        {pressReleases.map((press, index) => (
          <div key={index} className="bg-[#F9F6FE] rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 shadow-sm w-[98%] sm:w-[32%] flex-shrink-0">
            <p className="text-sm text-gray-600">{press.date}</p>
            <h3 className="text-xl font-bold text-black">{press.title}</h3>
            <p className="text-gray-400 text-sm">{press.description}</p>
            <Link href={press.href} className="p-0 h-auto text-[#39089D] hover:text-[#39089D]/80 flex items-center gap-2">
              Read More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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
