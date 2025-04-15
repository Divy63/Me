"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  glowIntensity?: "subtle" | "medium" | "strong"
  gradientColors?: string[]
  animationType?: "pulse" | "shimmer" | "none"
}

export function AnimatedText({
  text,
  className,
  glowIntensity = "medium",
  gradientColors = ["#2563eb", "#6366f1", "#818cf8"],
  animationType = "pulse",
}: AnimatedTextProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <span className={className}>{text}</span>
  }

  // Remove glow styles
  const glowStyles = {
    subtle: "",
    medium: "",
    strong: "",
  }

  const animationStyles = {
    pulse: "animate-pulse-subtle",
    shimmer: "animate-shimmer",
    none: "",
  }

  const gradientStyle = {
    background: `linear-gradient(to right, ${gradientColors.join(", ")})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: animationType === "shimmer" ? "200% 100%" : "100% 100%",
  }

  return (
    <span
      className={cn("inline-block", animationStyles[animationType], className)}
      style={{
        ...gradientStyle,
        ...{ "--tw-text-opacity": "0" },
      }}
    >
      <span style={{ filter: "none" }} className="block">
        {text}
      </span>
      <style jsx>{`
          span {
            ${glowStyles[glowIntensity]}
          }
        `}</style>
    </span>
  )
}
