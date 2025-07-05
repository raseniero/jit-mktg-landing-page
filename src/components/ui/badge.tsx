import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  /** Accessible label for the badge (for screen readers) */
  "aria-label"?: string;
  /** Whether this badge represents a count or status */
  type?: "status" | "count" | "label";
}

function Badge({ className, variant, type = "label", children, ...props }: BadgeProps) {
  // Add screen reader context based on badge type
  const getAriaLabel = () => {
    if (props["aria-label"]) return props["aria-label"];
    
    if (type === "count" && typeof children === "number") {
      return `${children} items`;
    }
    
    if (type === "status") {
      return `Status: ${children}`;
    }
    
    return undefined;
  };

  return (
    <div 
      data-slot="badge"
      role={type === "status" ? "status" : undefined}
      aria-label={getAriaLabel()}
      className={cn(badgeVariants({ variant }), className)} 
      {...props}
    >
      {children}
    </div>
  );
}

export { Badge, badgeVariants };