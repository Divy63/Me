"use server"

import { z } from "zod"
import nodemailer from "nodemailer"

// Email validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(3, { message: "Subject must be at least 3 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export async function sendEmail(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(formData)

    // Create a test account if you don't have real credentials
    // For production, you would use your actual SMTP credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "your-email@example.com",
        pass: process.env.SMTP_PASSWORD || "your-password",
      },
    })

    // Email content
    const mailOptions = {
      from: `"Portfolio Contact" <${validatedData.email}>`,
      to: process.env.CONTACT_EMAIL || "patelda2@myumanitoba.ca", // Your email address
      replyTo: validatedData.email,
      subject: `Portfolio Contact: ${validatedData.subject}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        
        Message:
        ${validatedData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <h3 style="margin-top: 20px;">Message:</h3>
          <p style="background-color: #f3f4f6; padding: 15px; border-radius: 5px;">${validatedData.message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Error sending email:", error)

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: "Validation failed",
        errors: error.errors.map((err) => ({
          path: err.path.join("."),
          message: err.message,
        })),
      }
    }

    return { success: false, message: "Failed to send email. Please try again later." }
  }
}
