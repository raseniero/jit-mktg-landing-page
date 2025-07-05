"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const labelVariants = cva(
  "flex items-center gap-2 text-sm leading-none font-medium select-none transition-colors group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-70"
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  /** Whether the associated form control is required */
  required?: boolean;
  /** Additional hint text for screen readers */
  srOnly?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, children, required, srOnly, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    data-slot="label"
    className={cn(
      labelVariants(),
      srOnly && "sr-only",
      className
    )}
    {...props}
  >
    {children}
    {required && (
      <span 
        className="text-destructive ml-1" 
        aria-label="required"
      >
        *
      </span>
    )}
  </LabelPrimitive.Root>
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };