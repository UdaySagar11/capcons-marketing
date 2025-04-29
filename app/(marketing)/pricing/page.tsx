"use client"

import { useState } from "react"
import { Check, Cpu, Sparkles } from "lucide-react"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Icons } from "@/lib/icons"
import RoundedBottom from "@/components/common/rounded-bottom"
import { pricingData, featureCategories } from "@/config/mock/pricing"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { PlanDetails } from "@/@types"
import NumberFlow from '@number-flow/react'

type BillingPeriod = keyof typeof pricingData.plans[number]["billingPeriod"]
type CurrencyType = "INR" | "USD"

type Plan = typeof pricingData.plans[number]
type PlanId = "basic" | "premium" | "enterprise"

const typedPricingData = pricingData as { plans: Plan[] }

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("premium")
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState<BillingPeriod>("annual")
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType>("INR")

  const router = useRouter()

  return (
    <div className="font-montserrat">
      <div className="mx-auto px-4 pt-28 max-w-6xl sm:px-6">
        <h1 className="mb-4 md:mb-10 font-semibold text-[#2E134D] text-lg sm:text-2xl md:text-4xl text-center">Upgrade to Premium</h1>

        <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-12">
          <Tabs value={selectedCurrency} onValueChange={(val) => setSelectedCurrency(val as CurrencyType)} className="w-[120px] sm:w-[144px]">
            <TabsList className="bg-[#E9E8E8] rounded-[17px] p-1 h-[30px] sm:h-[34px]">
              <TabsTrigger value="INR" className="data-[state=active]:bg-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black text-black rounded-full w-[56px] sm:w-[68px] h-[22px] sm:h-[26px] text-[10px] sm:text-xs md:text-sm">
                INR
              </TabsTrigger>
              <TabsTrigger value="USD" className="data-[state=active]:bg-white dark:data-[state=active]:bg-white dark:data-[state=active]:text-black text-black rounded-full w-[56px] sm:w-[68px] h-[22px] sm:h-[26px] text-[10px] sm:text-xs md:text-sm">
                USD
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="w-full max-w-sm">
            <div className="flex border-gray-200 border-b">
              <span
                onClick={() => setSelectedBillingPeriod("annual")}
                className={`flex-1 text-center pb-2 sm:pb-3 border-b-[3px] sm:border-b-[4px] font-medium px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 cursor-pointer text-[10px] sm:text-xs md:text-base ${selectedBillingPeriod === 'annual'
                  ? 'border-[#2C1B3D] text-[#2C1B3D]'
                  : 'border-transparent text-gray-500'
                  }`}
              >
                Annual
              </span>
              <span
                onClick={() => setSelectedBillingPeriod("monthly")}
                className={`flex-1 text-center pb-2 sm:pb-3 border-b-[3px] sm:border-b-[4px] font-medium px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 cursor-pointer text-[10px] sm:text-xs md:text-base ${selectedBillingPeriod === 'monthly'
                  ? 'border-[#2C1B3D] text-[#2C1B3D]'
                  : 'border-transparent text-gray-500'
                  }`}
              >
                Monthly
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-stretch gap-3 sm:gap-4 md:gap-6 mx-auto mb-8 sm:mb-12 md:mb-16 max-w-5xl">
          {typedPricingData.plans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id as PlanId)}
              className={cn(
                "relative flex flex-col flex-1 p-3 sm:p-4 md:p-6 border-[1px] border-[#E2D9ED] rounded-xl sm:rounded-2xl min-w-[260px] sm:min-w-[280px] md:min-w-[300px] max-w-[350px] h-full min-h-[300px] sm:min-h-[350px] md:min-h-[470px] cursor-pointer",
                selectedPlan === plan.id && "border-2 border-[#39089D]"
              )}
            >
              <div
                className="top-3 sm:top-4 md:top-6 right-3 sm:right-4 md:right-6 absolute w-[20px] sm:w-[25.333px] h-[20px] sm:h-[25.333px] flex items-center justify-center rounded-full border border-[#E2D9ED]"
              >
                {selectedPlan === plan.id ? (
                  <div className="w-full h-full rounded-full bg-[#39089D] flex items-center justify-center">
                    <Icons.check className="w-3 sm:w-4 h-3 sm:h-4 text-white" />
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full border border-[#E2D9ED] flex items-center justify-center">
                  </div>
                )}
              </div>
              <div className="mb-3 sm:mb-4 md:mb-6">
                <h3 className="mb-1.5 sm:mb-2 font-medium text-sm sm:text-base md:text-lg">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="font-bold text-[#39089D] text-xl sm:text-2xl md:text-3xl">
                    <NumberFlow
                      value={parseFloat(plan.price[selectedBillingPeriod][selectedCurrency])}
                      format={{
                        currency: selectedCurrency,
                        style: "currency",
                        currencySign: "standard",
                        currencyDisplay: "narrowSymbol"
                      }}
                      suffix={selectedBillingPeriod === "annual" ? "/Year" : "/Month"}
                    />
                  </span>
                </div>
                <p className="text-[10px] text-black sm:text-xs md:text-sm font-medium">
                  <NumberFlow
                    value={selectedBillingPeriod === "annual" ? parseFloat(plan.price[selectedBillingPeriod][selectedCurrency]) / 12 : parseFloat(plan.price[selectedBillingPeriod][selectedCurrency]) * 12}
                    format={{
                      currency: selectedCurrency,
                      style: "currency",
                      currencySign: "standard",
                      currencyDisplay: "narrowSymbol"
                    }}
                  />
                  {selectedBillingPeriod === "annual" ? " billed monthly" : " billed annually"}
                </p>
              </div>
              <ul className="flex-1 space-y-1.5 sm:space-y-2 md:space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mt-0.5 mr-1.5 sm:mr-2 w-3 sm:w-4 md:w-5 h-3 sm:h-4 md:h-5 text-black shrink-0" />
                    <span className="text-[10px] sm:text-xs text-black md:text-sm font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
                <Button
                  onClick={() => router.push(`/pricing/confirm?plan=${plan.id}&billingPeriod=${selectedBillingPeriod}&currency=${selectedCurrency}`)}
                  className="bg-[#39089D] hover:bg-[#2E134D] px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2 h-7 sm:h-8 md:h-10 rounded-full text-white text-[10px] sm:text-xs md:text-base">Subscribe</Button>
              </div>
            </div>
          ))}
        </div>

        <section className="py-8 md:py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="font-medium text-base sm:text-lg md:text-xl text-[#39089D] mb-6 md:mb-8">Compare tiers & features</h2>

            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[800px] border-separate border-spacing-x-0">
                <thead className="bg-white sticky top-0">
                  <tr className="*:py-4 *:text-left *:font-medium">
                    <th className="w-1/4 min-w-[200px]"></th>
                    {typedPricingData.plans.map((plan) => (
                      <th key={plan.id} className={cn(
                        "space-y-3 px-4 w-1/4 min-w-[200px]"
                      )}>
                        <span className="block text-[#2E134D] font-bold text-sm sm:text-base">{plan.name}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {Object.entries(featureCategories).map(([category, featureKeys], sectionIndex) => (
                    <>
                      <tr key={`category-${sectionIndex}`} className="*:py-3">
                        <td className="flex items-center gap-2 font-medium text-[#2E134D] w-1/4 min-w-[200px]">
                          {sectionIndex === 0 ? <Cpu className="size-4 text-[#2E134D]" /> : <Sparkles className="size-4 text-[#2E134D]" />}
                          <span>{category}</span>
                        </td>
                        {typedPricingData.plans.map(plan => (
                          <td key={`category-header-${plan.id}`} className={cn(
                            "border-none px-4 w-1/4 min-w-[200px]"
                          )}></td>
                        ))}
                      </tr>
                      {featureKeys.map((key, featureIndex) => (
                        <tr key={`feature-${sectionIndex}-${featureIndex}`} className="*:border-b *:py-3 *:border-[#E2D9ED]">
                          <td className="text-[#6B7280] font-medium text-[10px] sm:text-xs md:text-sm w-1/4 min-w-[200px]">{key.label}</td>
                          {typedPricingData.plans.map((plan) => (
                            <td key={`feature-${plan.id}-${featureIndex}`} className={cn(
                              "w-1/4 min-w-[200px]",

                            )}>
                              <div className={cn(
                                "py-2"
                              )}>
                                {typeof plan.details[key.key as keyof PlanDetails] === "boolean" ? (
                                  plan.details[key.key as keyof PlanDetails] ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#39089D" className="size-4">
                                      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                    </svg>
                                  ) : ""
                                ) : (
                                  <span className="text-[10px] sm:text-xs md:text-sm text-[#111827]">
                                    {plan.details[key.key as keyof PlanDetails]}
                                  </span>
                                )}
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}
                  <tr className="*:py-6">
                    <td className="w-1/4 min-w-[200px]"></td>
                    {typedPricingData.plans.map(plan => (
                      <td key={`footer-${plan.id}`} className={cn(
                        "w-1/4 min-w-[200px]",

                      )}></td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
      <RoundedBottom />
    </div>
  )
}