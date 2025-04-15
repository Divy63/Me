import { SectionHeading } from "./section-heading"
import { Microscope, BookOpen, Lightbulb, FileText, BarChart, Network } from "lucide-react"
import { AnimatedText } from "./animated-text"
import { ScrollReveal } from "./scroll-reveal"

export function Research() {
  const researchProjects = [
    {
      title: "Data Mining for Airline Marketing Strategies",
      period: "Sepetember 2024 - December 2024",
      description:
        "Applied clustering and classification techniques to analyze flight data patterns, including pricing variations, seat availability, and temporal trends. Used K-means clustering to identify distinct customer segments and optimize revenue management strategies.",
      technologies: [
        "K-means Clustering",
        "Decision Trees",
        "Data Preprocessing",
        "Feature Engineering",
        "Silhouette Analysis",
      ],
      achievements:
        "Successfully categorized flights into meaningful clusters based on pricing and seat availability patterns, enabling targeted marketing strategies and improved operational efficiency.",
      icon: FileText,
    },
    {
      title: "Effective Communication In Multi-Agent Systems",
      period: "Januray 2024 - April 2024",
      description:
        "Researched communication protocols in multi-agent systems, examining inter-agent communication languages including KQML and FIPA. Analyzed communication problems and proposed solutions to improve efficiency and reliability in multi-agent systems.",
      technologies: ["Multi-Agent Systems", "KQML", "FIPA ACL", "Communication Protocols", "AI"],
      achievements:
        "Identified key communication challenges in multi-agent systems and proposed improved communication models using Hybrid Wireless Mesh Protocol (HWMP) for enhanced security and efficiency.",
      icon: Network,
    }, 
    {
      title: "Statistical Analysis of ICC Cricket World Cup Data",
      period: "September 2023 - December 2023",
      description:
        "Analyzed the dataset of highest run scorers in the 2010/2011 Cricket World Cup by ICC. Developed linear regression models to understand the relationship between Total Runs scored and explanatory variables including Number of Balls Faced and Number of Boundaries.",
      technologies: ["R", "Linear Regression", "Statistical Analysis", "Data Visualization", "Cricket Analytics"],
      achievements:
        "Developed multiple regression models with R² = 0.735 and Adjusted R² = 0.7237, demonstrating strong correlation between runs scored, balls faced, and boundaries.",
      icon: BarChart,
    }
  ]

  return (
    <section id="research" className="section-container bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading>
          <div className="flex items-center justify-center">
            <Microscope className="h-8 w-8 mr-2 text-blue-600" />
            <span>Research Experience</span>
          </div>
        </SectionHeading>

        <div className="space-y-8 max-w-4xl mx-auto">
          {researchProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 150}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift transition-all duration-300 card-shadow">
                <div className="border-l-4 border-blue-600 p-6">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div className="flex items-center">
                      <project.icon className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                      <h3 className="text-2xl font-bold text-slate-800">
                        <AnimatedText text={project.title} glowIntensity="none" animationType="none" />
                      </h3>
                    </div>
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-4 text-slate-600">{project.description}</p>

                  <div className="mt-5">
                    <div className="flex items-center mb-2">
                      <BookOpen className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="text-lg font-medium text-slate-700">Technologies & Methods</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      <Lightbulb className="h-4 w-4 text-blue-600 mr-2" />
                      <h4 className="text-lg font-medium text-slate-700">Key Achievements</h4>
                    </div>
                    <p className="text-slate-600">{project.achievements}</p>
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
