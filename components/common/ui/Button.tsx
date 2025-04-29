import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        primary:
          "bg-primary text-white shadow-xs hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        error:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90",
        warning:
          "bg-yellow-500 text-white shadow-xs hover:bg-yellow-600",
        success:
          "bg-green-500 text-white shadow-xs hover:bg-green-600"
      },
      size: {
        sm: "h-8 px-3 gap-1.5 rounded-md",
        md: "h-9 px-4 gap-2",
        lg: "h-10 px-6 gap-2.5 rounded-md",
        xl: "h-12 px-8 gap-3 rounded-md",
        icon: "size-9 p-2",
        Toolbar: "size-7 p-1.5"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  tip?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, tip, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <>
        {!!tip ? (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Comp
                  className={cn(buttonVariants({ variant, size, className }))}
                  ref={ref}
                  {...props}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{tip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ) : (
          <Comp
            className={cn(buttonVariants({ variant, size, className }))}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Button.displayName = "Button"

export { Button, buttonVariants }

