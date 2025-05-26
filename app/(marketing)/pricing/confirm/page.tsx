"use client"

import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Check } from 'lucide-react'
import { pricingData, featureCategories } from '@/config/mock/pricing'
import RoundedBottom from '@/components/common/rounded-bottom'
import { SubscriptionForm } from './_components/subscription-form'

type Plan = typeof pricingData.plans[number]
const typedPricingData = pricingData as { plans: Plan[] }

const ConfirmPage = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan') || 'basic'
  const billingPeriod = (searchParams.get('billingPeriod') || 'annual') as 'annual' | 'monthly'
  const currency = (searchParams.get('currency') || 'INR') as 'INR' | 'USD'

  const selectedPlan = typedPricingData.plans.find(p => p.id === planId) || typedPricingData.plans[0]

  const features = Object.entries(featureCategories).map(([category, features]) => ({
    category,
    features: features.map((feature) => ({
      name: feature.label,
      value: feature.values[selectedPlan.id as keyof typeof feature.values]
    }))
  }))

  const handleChangePlan = () => {
    router.push('/pricing')
  }

  const handleFormSubmit = async (values: { couponCode?: string }) => {
    console.log(values)
    router.push('/pricing/success')
  }

  return (
    <div className="font-montserrat">
      <div className="mx-auto px-4 pt-28 max-w-6xl sm:px-6">
        <h1 className="mb-10 font-semibold text-[#2E134D] text-xl sm:text-4xl text-center">Confirm Your Subscription</h1>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 justify-center">
          <div className="w-full lg:w-[420px] h-fit bg-[#F6F6F6] rounded-2xl p-4 sm:p-6 border border-[#E2D9ED]">
            <div className="mb-6">
              <h2 className="text-[#39089D] mb-4 font-medium text-base sm:text-lg">Subscribing to</h2>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="bg-white border-[#E2D9ED] text-black border px-3 sm:px-4 py-1.5 sm:py-2 rounded-sm text-xs sm:text-sm">{selectedPlan.name}</span>
                <button onClick={handleChangePlan} className="text-[#39089D] underline font-medium text-xs sm:text-sm">Change plan</button>
              </div>
              <div className="mb-2">
                <span className="text-gray-500 text-xs sm:text-sm font-medium">Subscription fee</span>
                <div className="flex items-baseline gap-2 justify-between">
                  <span className="text-xl sm:text-3xl font-bold text-[#2E134D]">{selectedPlan.price[billingPeriod][currency]}</span>
                  <span className="text-xs sm:text-sm text-[#2E134D] font-medium">{selectedPlan.billingPeriod[billingPeriod].replace('/', 'Per ')}</span>
                </div>
                <span className="text-xs sm:text-sm text-gray-500 font-medium">{selectedPlan.billingNote[billingPeriod]}</span>
              </div>
            </div>

            <SubscriptionForm
              onSubmit={handleFormSubmit}
              price={selectedPlan.price[billingPeriod][currency]}
              currency={currency}
              billingPeriod={billingPeriod}
            />
          </div>

          <div className="w-full lg:w-[420px] h-fit bg-white rounded-2xl p-4 sm:p-6 border border-[#E2D9ED]">
            <h2 className="text-[#39089D] mb-6 text-base sm:text-lg">Subscription plan includes</h2>

            {features.map((categoryGroup) => (
              <div key={categoryGroup.category} className="mt-4 sm:mt-6 first:mt-6">
                <h3 className="font-bold text-[#2E134D] mb-3 border-b border-[#E2D9ED] pb-4 text-sm sm:text-base">{categoryGroup.category}</h3>
                <div className="divide-y divide-[#E2D9ED] border-b border-[#E2D9ED]">
                  {categoryGroup.features
                    .filter(item => item.value === true || (typeof item.value !== 'boolean' && item.value))
                    .map((item) => (
                      <div key={item.name} className="flex justify-between text-black dark:text-black items-center py-2 sm:py-3 first:pt-0 last:pb-3 pr-4">
                        <span className="text-xs sm:text-base">{item.name}</span>
                        {typeof item.value === 'boolean' ? (
                          <Check className="w-3 sm:w-4 h-3 sm:h-4" />
                        ) : (
                          <span className="text-xs sm:text-base">{item.value}</span>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <RoundedBottom />
    </div>
  )
}

export default ConfirmPage