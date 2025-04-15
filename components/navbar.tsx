"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { AnimatedText } from "./animated-text"
import { User, Briefcase, Microscope, WorkflowIcon as Work, Mail } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>("hero")
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: "about", name: "About", icon: User },
    { id: "projects", name: "Projects", icon: Briefcase },
    { id: "research", name: "Research", icon: Microscope },
    { id: "work", name: "Work", icon: Work },
    { id: "contact", name: "Contact", icon: Mail },
  ]

  // Handle scroll events to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled
      setScrolled(window.scrollY > 20)

      // Find the current active section
      const sections = navItems.map((item) => item.id)

      // Add hero section which doesn't have a nav item
      const allSections = ["hero", ...sections]

      // Find which section is currently in view
      for (let i = allSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(allSections[i])
        if (section) {
          const rect = section.getBoundingClientRect()
          // If the section is in view (with some buffer for better UX)
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(allSections[i])
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Smooth scroll to section when clicking nav links
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 shadow-md backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center">
            <Link href="#hero" onClick={() => scrollToSection("hero")}>
              <AnimatedText
                text="Divy Patel"
                className="text-2xl font-bold"
                glowIntensity="none"
                animationType="none"
                gradientColors={["#2563eb", "#6366f1", "#818cf8"]}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {!isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`flex items-center text-white hover:text-blue-300 transition-colors duration-300 ${
                    activeSection === item.id ? "font-medium" : ""
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-1 ${activeSection === item.id ? "text-blue-400" : ""}`} />
                  <span
                    className={`text-sm ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 px-4 py-2 animate-fadeIn shadow-lg rounded-lg mb-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.id)
                  }}
                  className={`flex items-center py-2 text-white hover:text-blue-300 transition-colors duration-300 ${
                    activeSection === item.id ? "font-medium" : ""
                  }`}
                >
                  <Icon className={`h-5 w-5 mr-2 ${activeSection === item.id ? "text-blue-400" : ""}`} />
                  <span
                    className={`${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent font-bold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </header>
  )
}
