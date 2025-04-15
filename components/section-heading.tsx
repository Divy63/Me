import type React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  children: React.ReactNode
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  return (
    <h2 className={cn("section-title", className)}>
      <span className="relative inline-block pb-2 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:w-16 after:h-1 after:bg-indigo-600 after:rounded-full">
        {children}
      </span>
    </h2>
  )
}
