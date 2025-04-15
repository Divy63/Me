import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { Research } from "@/components/research"
import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"
import { Projects } from "@/components/projects"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Skills } from "@/components/skills"
import { WorkExperience } from "@/components/work-experience"

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-800">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Research />
      <WorkExperience />
      <ContactForm />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
