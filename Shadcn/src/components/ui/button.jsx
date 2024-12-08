import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("px-4 py-2 rounded", {
  variants: {
    variant: {
      dark: "bg-slate-950 text-white",
      primary: "bg-blue-500 text-white ",
      secondary: "bg-gray-500 text-white ",
      // Add more variants as needed
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
