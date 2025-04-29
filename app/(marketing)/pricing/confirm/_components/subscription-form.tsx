import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  couponCode: z.string().optional(),
})

interface SubscriptionFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void
  price: string
  currency: string
  billingPeriod: string
}

export const SubscriptionForm = ({
  onSubmit,
  price,
  currency,
  billingPeriod,
}: SubscriptionFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      couponCode: "",
    },
  })


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-3 text-black border-t border-[#E2D9ED] pt-4">
          <div className="flex justify-between">
            <span className="text-xs sm:text-base">Subtotal</span>
            <span className="text-xs sm:text-base">{price}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-xs sm:text-base">Discount</span>
            <span className="text-green-500 text-xs sm:text-base">-₹500.00</span>
          </div>
          <div className="flex justify-between border-b border-[#E2D9ED] pb-4">
            <span className="text-xs sm:text-base">Tax (%)</span>
            <span className="text-xs sm:text-base">₹300.00</span>
          </div>
          <div className="flex justify-between font-bold">
            <span className="text-sm sm:text-base">Billed Now</span>
            <span className="text-sm sm:text-base">{price}</span>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <FormField
            control={form.control}
            name="couponCode"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Coupon Code" {...field} className="h-8 sm:h-12 text-black dark:text-black text-xs sm:text-base" />
                </FormControl>
                <FormMessage className="text-[10px] sm:text-sm" />
              </FormItem>
            )}
          />
          <Button type="button" variant="outline" className="px-4 sm:px-8 rounded-full text-[#39089D] border-[#39089D] h-8 sm:h-12 text-xs sm:text-base" onClick={form.handleSubmit(onSubmit)}>
            Apply
          </Button>
        </div>

        <Button type="submit" className="w-full bg-[#39089D] hover:bg-[#2E134D] text-white rounded-full h-8 sm:h-12 mt-4 text-xs sm:text-base">
          Pay Now
        </Button>

        <p className="text-[10px] sm:text-sm text-gray-500 text-center">
          By confirming your subscription, you allow Capcons to charge you for future payments in accordance with their
          terms. You can always cancel your subscription. By placing your order, you agree to our
          <a href="/terms" className="pl-1 underline">Terms of Service</a> and
          <a href="/privacy" className="pl-1 underline">Privacy Policy</a>.
        </p>
      </form>
    </Form>
  )
} 