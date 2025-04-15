"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  threshold?: number
  delay?: number
  className?: string
}

export function ScrollReveal({ children, threshold = 0.1, delay = 0, className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("revealed")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const current = ref.current
    if (current) {
      observer.observe(current)
    }

    return () => {
      if (current) {
        observer.unobserve(current)
      }
    }
  }, [threshold, delay])

  return (
    <div ref={ref} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  )
}
