import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import React from "react";

const oshCopyVariants = cva("",
    {
        variants: {
            variant: {
                default:"",
                dark: "text-black"
            },
            size: {
                default:""
            }
        },
        defaultVariants: {
            variant: "default",
            size: "default",
          },
    }
);

export interface OSHCopyProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof oshCopyVariants> {
  asChild?: boolean
}

const OSHCopy = React.forwardRef<HTMLButtonElement, OSHCopyProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    return (
      <Comp
        className={cn(oshCopyVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        Oz Smart Home
      </Comp>
    )
  }
)
OSHCopy.displayName = "OSHCopy"

export { OSHCopy, oshCopyVariants }
