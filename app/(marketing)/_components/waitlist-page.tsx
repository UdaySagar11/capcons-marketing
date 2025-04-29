"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/common/ui/Button'
import { Input } from '@/components/ui/input'
import { H1, P } from '@/components/typography'

const Waitlist = () => {
  const [email, setEmail] = useState('')
  return (
    <div className='bg-[#39089D] flex flex-col md:flex-row justify-start items-center relative min-h-[90vh] py-8 md:py-0'>
      <div className="flex flex-col justify-center px-4 gap-8 container z-10 py-20">
        <div className="max-w-2xl text-left space-y-4">
          <H1 className="text-[#C6F806] text-2xl md:text-3xl lg:text-4xl font-bold">Unlock the Next Era of Social Networking</H1>
          <P className="text-white text-sm md:text-base font-semibold">
            Be among the first to access Capcons and shape the future of creator-led communities.
          </P>
        </div>
        <div className="flex bg-[#D9D9D91A] border border-white/20 rounded-full w-full max-w-[500px]">
          <Input
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-transparent border-none outline-none focus-visible:ring-0 focus-visible:ring-offset-0 text-black rounded-full placeholder:text-[#A7A7A7] border-[#FFFFFF]"
          />
          <Button variant="primary" className="bg-[#C6F806] hover:bg-[#C6F806]/90 text-[#39089D] hover:text-[#39089D]/90 rounded-full px-4 sm:px-6 md:px-8">
            Submit
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full md:w-[60%] h-[40vh] md:h-auto">
        <Image
          src="/home-bg.png"
          alt="Background decoration"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </div>
  )
}

export default Waitlist