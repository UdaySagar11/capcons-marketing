import { featureCategories, pricingData } from '@/config/mock/pricing';
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';
import React from 'react'

type Plan = typeof pricingData.plans[number]

const PricingTable = ({
  categories,
  plans,
  className
}: {
  categories: typeof featureCategories;
  plans: Plan[];
  className?: string;
}) => {
  return (
    <table className={cn("w-full min-w-[800px] border-separate border-spacing-x-0", className)}>
      <tbody className="text-sm">
        {Object.entries(categories).map(([category, featureKeys], sectionIndex) => (
          <tr key={`section-${sectionIndex}`}>
            <td colSpan={5} className="pt-6 sm:pt-8">
              <table className="w-full">
                <tbody>
                  <tr className="*:py-3 *:pb-8 border-b">
                    <td className="flex items-center gap-2 text-[#2E134D] font-bold text-sm sm:text-base w-1/3 min-w-[200px] sm:min-w-[300px]">
                      <span>{category}</span>
                    </td>
                    {plans.map(plan => (
                      <td key={`category-header-${plan.id}`} className="border-none w-[22%] min-w-[180px] text-[#2E134D] font-bold text-sm sm:text-base">
                        {plan.name}
                      </td>
                    ))}
                  </tr>
                  {featureKeys.map((key, featureIndex) => (
                    <tr key={`feature-${sectionIndex}-${featureIndex}`} className="*:border-b *:py-2 *:md:py-3 *:border-[#E2D9ED]">
                      <td className="text-[#6B7280] font-medium text-[10px] sm:text-xs md:text-sm w-1/3 min-w-[200px] sm:min-w-[300px]">{key.label}</td>
                      {plans.map((plan) => (
                        <td key={`feature-${plan.id}-${featureIndex}`} className="w-[22%] min-w-[180px]">
                          <div className="py-2">
                            {typeof key.values[plan.id as keyof typeof key.values] === "boolean" ? (
                              key.values[plan.id as keyof typeof key.values] === true ? (
                                <Check className="size-4 text-[#39089D]" />
                              ) : key.values[plan.id as keyof typeof key.values] === false ? (
                                <X className="size-4 text-[#2E134D]" />
                              ) : ""
                            ) : (
                              <span className="text-[10px] sm:text-xs md:text-sm text-[#111827]">
                                {key.values[plan.id as keyof typeof key.values]}
                              </span>
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default PricingTable