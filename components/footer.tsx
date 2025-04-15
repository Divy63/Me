import Link from "next/link"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white py-8 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-gradient">Divy Patel</div>
            <p className="text-slate-600 mt-1">Computer Science Student & Developer</p>
          </div>

          <div className="flex space-x-6">
            <Link
              href="https://linkedin.com/in/divy-patel-15565a22b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <Linkedin className="h-4 w-4 mr-1" />
              <span>LinkedIn</span>
            </Link>
            <Link
              href="https://github.com/Divy63"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <Github className="h-4 w-4 mr-1" />
              <span>GitHub</span>
            </Link>
            <Link
              href="https://www.instagram.com/divy_6.3?igsh=MWx0c3FjMnVvZWtzdA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <Instagram className="h-4 w-4 mr-1" />
              <span>Instagram</span>
            </Link>
            <Link
              href="mailto:divyp630@gmail.com"
              className="text-slate-600 hover:text-blue-600 transition-colors flex items-center"
            >
              <Mail className="h-4 w-4 mr-1" />
              <span>Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-center text-slate-500 text-sm">
          <p>© {currentYear} Divy Patel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
