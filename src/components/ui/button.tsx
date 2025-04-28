
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02] active:scale-[0.98]",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-destructive/25",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gsai: "bg-gsai-red text-white hover:bg-gsai-red/90 shadow-md hover:shadow-gsai-red/30 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[120%] before:h-full before:bg-gradient-to-r before:from-white/20 before:via-white/40 before:to-transparent before:transform before:rotate-[30deg] before:pointer-events-none hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-in-out",
        gold: "bg-gsai-gold text-black hover:bg-gsai-gold/90 shadow-md hover:shadow-gsai-gold/30 relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-[-100%] before:w-[120%] before:h-full before:bg-gradient-to-r before:from-white/20 before:via-white/40 before:to-transparent before:transform before:rotate-[30deg] before:pointer-events-none hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-in-out",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 px-6 py-3 text-base rounded-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
