"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { SectionHeading } from "./section-heading"
import { sendEmail } from "@/lib/actions"
import { Loader2, Mail, Send } from "lucide-react"

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type FormErrors = {
  [K in keyof FormState]?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrors({})

    try {
      const result = await sendEmail(formData)

      if (result.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        // Handle validation errors
        if (result.errors) {
          const newErrors: FormErrors = {}
          result.errors.forEach((err) => {
            const field = err.path as keyof FormState
            newErrors[field] = err.message
          })
          setErrors(newErrors)
        }

        toast({
          title: "Error",
          description: result.message || "Something went wrong. Please try again.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-container bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>
          <div className="flex items-center justify-center">
            <Mail className="h-8 w-8 mr-2 text-blue-600" />
            <span>Get In Touch</span>
          </div>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-lg card-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800">Email</h4>
                  <a
                    href="mailto:divyp630@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    divyp630@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800">Phone</h4>
                  <a href="tel:+12049623036" className="text-blue-600 hover:text-blue-800 transition-colors">
                    (204) 962-3036
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-medium text-slate-800">Social</h4>
                  <div className="flex space-x-3 mt-2">
                    <a
                      href="https://linkedin.com/in/divy-patel-15565a22b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 flex items-center justify-center transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/Divy63"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="h-8 w-8 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white text-blue-600 flex items-center justify-center transition-colors"
                      aria-label="GitHub Profile"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg card-shadow">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`bg-white border-slate-200 text-slate-800 ${errors.name ? "border-red-500" : ""}`}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`bg-white border-slate-200 text-slate-800 ${errors.email ? "border-red-500" : ""}`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`bg-white border-slate-200 text-slate-800 ${errors.subject ? "border-red-500" : ""}`}
                />
                {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`bg-white border-slate-200 text-slate-800 ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white relative overflow-hidden group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
