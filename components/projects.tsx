import { SectionHeading } from "./section-heading"
import { Briefcase, Code, Calendar } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function Projects() {
  const projects = [
    {
      title: "RestroSync",
      date: "January 2025 - April 2025",
      technologies: ["JavaScript", "React", "Express.js", "Node.js", "PostgreSQL", "Sockets", "GitHub", "Docker"],
      description:
        "A restaurant order and menu management web application with built-in features like Menu Management, User Account management, Order Management, Table Booking and Sales Analysis.",
    },
    {
      title: "LynkHub",
      date: "December 2024 - January 2025",
      technologies: ["JavaScript", "React", "Express.js", "Node.js", "MongoDB", "Sockets", "GitHub"],
      description:
        "A real-time web chat application for one-to-one chatting with integrated notification features that give real-time updates to users.",
    },
    {
      title: "Travify",
      date: "April 2024 - July 2024",
      technologies: ["Android Studio", "Java", "HSQLDB", "XML", "Gitlab"],
      description:
        "An application that helps users keep an itinerary for trips and makes organizing trips easy with real-time notifications for updates in itinerary or groups.",
    },
    {
      title: "Store Orders Database",
      date: "January 2024 - April 2024",
      technologies: ["Java", "MS-SQL", "Git", "GitHub", "Makefile"],
      description:
        "Created an easy-to-use command-line interface in Java, allowing users to find and get helpful messages, even when errors occur.",
    },
  ]

  return (
    <section id="projects" className="section-container bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>
          <div className="flex items-center justify-center">
            <Briefcase className="h-8 w-8 mr-2 text-blue-600" />
            <span>My Projects</span>
          </div>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 100}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover-lift card-shadow">
                <div className="h-16 bg-blue-50 flex items-center px-6">
                  <h3 className="text-2xl font-bold text-blue-700">{project.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-slate-500 text-sm mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{project.date}</span>
                  </div>

                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="flex items-center px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs"
                      >
                        <Code className="h-3 w-3 mr-1" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
