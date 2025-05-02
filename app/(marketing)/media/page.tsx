"use client"

import React from 'react'
import { Banner } from '@/components/common/banner';
import { GetStarted } from '../_components/get-started';
import RoundedBottom from '@/components/common/rounded-bottom';
import { PromotionalMedia } from './_components/promotional-media';
import { PressReleases } from './_components/press-releases';
import { MediaCoverage } from './_components/media-coverage';

const MediaPage = () => {
  return (
    <div className=''>
      <Banner title="Media" description="Your Gateway to Impactful PR & Media Collaborations" />
      <div className='container space-y-6 sm:space-y-10 md:space-y-12 lg:space-y-16 mt-6 sm:mt-10 md:mt-12 lg:mt-16'>
        <PromotionalMedia />
        <PressReleases />
        <MediaCoverage />
        <GetStarted />
      </div>
      <RoundedBottom />
    </div>
  )
}

export default MediaPage;

