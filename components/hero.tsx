"use client"

import Link from "next/link"
import { AnimatedText } from "./animated-text"
import { ChevronDown, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { Typewriter } from "./type-writer"

export function Hero() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Divy63",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/divy-patel-15565a22b",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/divy_6.3?igsh=MWx0c3FjMnVvZWtzdA%3D%3D&utm_source=qr",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:divyp630@gmail.com",
    },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80')`,
      }}
    >
      {/* Overlay - less dark now */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-500/90 to-slate-800/90"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-2 animate-fadeInUp">
            <AnimatedText
              text="Divy Patel"
              glowIntensity="none"
              animationType="shimmer"
              gradientColors={["#2563eb", "#6366f1", "#818cf8"]}
              className="inline-block"
            />
          </h1>

          {/* Typewriter Effect */}
          <p className="text-xl md:text-2xl text-white mb-4 animate-fadeInUp-delay-1 h-8">
            I am a{" "}
            <Typewriter
              words={["Computer Science Student", "Research Enthusiast", "Developer", "Problem Solver"]}
              className="text-blue-300"
            />
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-4 mb-6 animate-fadeInUp-delay-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-300 transition-colors h-10 w-10 bg-slate-800 bg-opacity-70 rounded-full flex items-center justify-center shadow-md"
                aria-label={link.name}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="flex space-x-4 animate-fadeInUp-delay-2">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-size-200 animate-shimmer"></span>
            </Link>
            <Link
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" })
              }}
              className="px-6 py-3 bg-transparent hover:bg-slate-800 text-white border border-white rounded-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </section>
  )
}
