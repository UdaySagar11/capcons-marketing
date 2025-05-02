"use client"

import React from 'react'
import { Banner } from '@/components/common/banner';
import { GetStarted } from '../_components/get-started';
import RoundedBottom from '@/components/common/rounded-bottom';
import { VideoFilters } from './_components/video-filters';
import { VideoGrid } from './_components/video-grid';
import { useQueryState } from 'nuqs';

const HowToVideos = () => {
  const [selectedFilter] = useQueryState('filter', {
    defaultValue: 'All',
    parse: (value) => value,
    serialize: (value) => value,
  });

  return (
    <div className=''>
      <Banner title="“How-to” Videos" description="Learn step-by-step how to get the most out of the platform." />
      <div className='container space-y-6 sm:space-y-10 md:space-y-12 lg:space-y-16 mt-6 sm:mt-10 md:mt-12 lg:mt-16'>
        <VideoFilters />
        <VideoGrid selectedFilter={selectedFilter} />
        <GetStarted />
      </div>
      <RoundedBottom />
    </div>
  )
}
export default HowToVideos;

