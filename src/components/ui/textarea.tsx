import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Maximum character count for the textarea */
  maxLength?: number;
  /** Whether to show character count */
  showCount?: boolean;
  /** ID of element that describes this textarea */
  "aria-describedby"?: string;
  /** ID of element that labels this textarea */
  "aria-labelledby"?: string;
  /** Indicates if the textarea has an error */
  "aria-invalid"?: boolean | "true" | "false";
  /** Error message for screen readers */
  "aria-errormessage"?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, showCount, maxLength, ...props }, ref) => {
    const [charCount, setCharCount] = React.useState(
      props.defaultValue?.toString().length || props.value?.toString().length || 0
    );

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (showCount) {
        setCharCount(e.target.value.length);
      }
      props.onChange?.(e);
    };

    return (
      <div className="relative">
        <textarea
          data-slot="textarea"
          className={cn(
            // Base styles
            "flex min-h-[60px] w-full rounded-md border bg-transparent px-3 py-2 text-base outline-none transition-all md:text-sm",
            // Text and placeholder
            "placeholder:text-muted-foreground",
            // Border and background
            "border-input dark:bg-input/30",
            // Sizing
            "resize-none field-sizing-content",
            // Focus styles with enhanced visibility
            "focus-visible:border-ring focus-visible:ring-ring focus-visible:ring-[3px] focus-visible:ring-offset-1 focus-visible:ring-offset-background",
            // Error states
            "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40",
            // Disabled states
            "disabled:cursor-not-allowed disabled:opacity-50",
            // Hover state
            "hover:border-ring/50 disabled:hover:border-input",
            className,
          )}
          ref={ref}
          maxLength={maxLength}
          onChange={handleChange}
          {...props}
        />
        {showCount && maxLength && (
          <div
            className="absolute bottom-2 right-2 text-xs text-muted-foreground"
            aria-live="polite"
            aria-atomic="true"
          >
            <span className={cn(
              charCount > maxLength * 0.9 && "text-destructive"
            )}>
              {charCount}
            </span>
            /{maxLength}
          </div>
        )}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";

export { Textarea };