import { cva, VariantProps } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "src/utils/cn";

const buttonVariants = cva(
  "font-bold py-2 px-4 rounded transition-colors duration-300",
  {
    variants: {
      variant: {
        filled:
          "border border-transparent bg-black text-white hover:bg-black/90",
        outlined:
          "border border-primary bg-white text-primary hover:bg-black/10",
        ghost: "hover:bg-black/10",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 py-2",
        lg: "h-12 px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "filled",
      size: "md",
    },
  }
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
  };

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant,
      size,
      className,
      startIcon,
      endIcon,
      children,
      type = "button",
      ...props
    }: ButtonProps,
    ref
  ) {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        type={type}
        ref={ref}
        {...props}
      >
        {startIcon && startIcon}
        {children && children}
        {endIcon && endIcon}
      </button>
    );
  }
);
