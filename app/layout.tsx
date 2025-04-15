import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { ScrollRevealScript } from "@/components/scroll-reveal-script"
import {Analytics} from '@vercel/analytics/react';
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Divy Patel - Personal Portfolio",
  description: "Computer Science Student, Gaming Enthusiast & Travel Explorer",
  keywords: ["Divy Patel", "Portfolio", "Computer Science", "Developer", "Student", "Research", "Programming"],
  authors: [{ name: "Divy Patel" }],
  creator: "Divy Patel",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
        <ScrollRevealScript />
        <Analytics />
      </body>
    </html>
  )
}


import './globals.css'