import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** ID of element that describes this input (for accessibility) */
  "aria-describedby"?: string;
  /** ID of element that labels this input (for accessibility) */
  "aria-labelledby"?: string;
  /** Indicates if the input has an error */
  "aria-invalid"?: boolean | "true" | "false";
  /** Error message for screen readers */
  "aria-errormessage"?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          // Base styles
          "flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-all md:text-sm",
          // Border and background
          "border-input dark:bg-input/30",
          // Text styles
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground",
          // File input styles
          "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium",
          // Focus styles with enhanced visibility
          "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-1 focus-visible:ring-offset-background",
          // Error states
          "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40",
          // Disabled states
          "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
          // Hover state for better interactivity
          "hover:border-ring/50 disabled:hover:border-input",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };