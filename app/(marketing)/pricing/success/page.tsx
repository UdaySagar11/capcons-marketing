import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import RoundedBottom from '@/components/common/rounded-bottom'
import Link from 'next/link'

const PaymentSuccess = () => {
  return (
    <div className="font-montserrat">
      <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 md:space-y-10 text-center min-h-screen px-4 py-8 sm:py-10">
        <Image
          src="/images/payment-success.png"
          alt="Payment Success"
          width={700}
          height={100}
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] h-auto px-4 sm:px-0"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#2E134D] mt-4 sm:mt-6 md:mt-10 px-4">🎉 Congratulations! You&apos;re Now a Valued Member!</h1>
          <p className="text-center text-[#A5A5A5] mt-3 sm:mt-4 max-w-[600px] px-4 text-xs sm:text-sm md:text-base">
            Welcome aboard! You&apos;ve officially joined the Basic Plan, unlocking exclusive perks and a better experience.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-10 w-full max-w-md px-4">
          <h2 className="text-lg sm:text-xl text-black md:text-2xl font-semibold">What&apos;s Next?</h2>
          <div className="flex justify-center w-full mt-3 sm:mt-4">
            <ul className="list-disc font-medium space-y-1.5 sm:space-y-2 pl-5">
              <li className="text-black text-xs sm:text-sm md:text-base">
                <div className="flex items-center">

                  Explore your new premium dashboard
                </div>
              </li>
              <li className="text-black text-xs sm:text-sm md:text-base">
                <div className="flex items-center">

                  Start using advanced features right away
                </div>
              </li>
              <li className="text-black text-xs sm:text-sm md:text-base">
                <div className="flex items-center">

                  Contact support anytime for assistance
                </div>
              </li>
            </ul>
          </div>
        </div>
        <Link href="/dashboard" className="w-full max-w-xs px-4">
          <Button variant="outline" className="bg-[#39089D] dark:bg-[#39089D] dark:hover:bg-[#39089D]/70 cursor-pointer text-white rounded-full h-8 sm:h-10 md:h-12 px-6 sm:px-8 hover:bg-[#2E134D] hover:text-white text-xs sm:text-sm md:text-base">
            Go to Dashboard
          </Button>
        </Link>
      </div>
      <RoundedBottom />
    </div>
  )
}

export default PaymentSuccess