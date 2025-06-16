import { forwardRef, HTMLAttributes } from "react"
import { cn } from "@/utils/cn"

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("rounded-2xl border bg-white text-black shadow-sm", className)}
      {...props}
    />
  )
)
