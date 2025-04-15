"use client"

import { useEffect } from "react"

export function ScrollRevealScript() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const revealCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }

    const observer = new IntersectionObserver(revealCallback, observerOptions)
    const elementsToReveal = document.querySelectorAll(".scroll-reveal")

    elementsToReveal.forEach((element) => {
      observer.observe(element)
    })

    return () => {
      elementsToReveal.forEach((element) => {
        observer.unobserve(element)
      })
    }
  }, [])

  return null
}
