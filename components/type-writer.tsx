"use client"

import { useState, useEffect } from "react"

interface TypewriterProps {
  words: string[]
  delay?: number
  className?: string
}

export function Typewriter({ words, delay = 200, className = "" }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [reverse, setReverse] = useState(false)
  const [blink, setBlink] = useState(true)

  // Blink effect
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev)
    }, 500)
    return () => clearInterval(blinkInterval)
  }, [])

  // Typing effect
  useEffect(() => {
    if (index === words.length) return setIndex(0)

    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true)
      return
    }

    if (subIndex === 0 && reverse) {
      setReverse(false)
      setIndex((prev) => (prev + 1) % words.length)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (reverse ? prev - 1 : prev + 1))
      },
      reverse ? delay / 2 : delay,
    )

    return () => clearTimeout(timeout)
  }, [subIndex, index, reverse, words, delay])

  return <span className={className}>{`${words[index].substring(0, subIndex)}${blink && !reverse ? "|" : ""}`}</span>
}
