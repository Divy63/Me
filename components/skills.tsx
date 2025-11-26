import { SectionHeading } from "./section-heading";
import { User, GraduationCap, Award } from "lucide-react";
import { ScrollReveal } from "./scroll-reveal";

export function Skills() {
const codingLanguages = ["Java", "Python", "C++", "JavaScript", "C", "R", "Groovy","Prolog", "LC3", "HTML", "CSS", "XML", "TypeScript"];

const frameworksAndLibraries = ["React.js", "Next.js", "Express.js", "Node.js", "Tailwind CSS", "Bootstrap","Spring Boot", "Socket.io", "REST APIs", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Jest", "JUnit"];

const toolsAndDatabases = ["MongoDB", "SQLite3", "MySQL", "MS SQL", "Neo4j", "PostgreSQL", "HSQLDB","Git", "GitHub","Azure DevOps","Unix", "Docker", "Android Studio", "VS Code", "RStudio","ServiceNow","Katalon Studio", "CI/CD Pipelines"];


  const renderSkills = (skills) =>
    skills.map((skill) => (
      <span key={skill} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
        {skill}
      </span>
    ));

  return (
    <section id="about" className="section-container bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>
          <div className="flex items-center justify-center">
            <User className="h-8 w-8 mr-2 text-blue-600" />
            <span>About Me</span>
          </div>
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <ScrollReveal className="animate-fadeIn-left">
            <div className="bg-white p-6 rounded-lg shadow-lg card-shadow hover-lift">
              <div className="flex items-center mb-4">
                <GraduationCap className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-semibold text-slate-800">Education & Background</h3>
              </div>
              <p className="text-slate-600 mb-6">
                I'm currently pursuing a Bachelor of Science with a Major in Computer Science at the University of
                Manitoba (January 2022 - Present) with a GPA of 3.84/4.50.
              </p>
              <p className="text-slate-600 mb-6">
                As a computer science student with a passion for gaming and travel, I blend technical expertise with
                creative exploration. My journey in tech is complemented by my adventures around the world and immersive
                gaming experiences.
              </p>

              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-2xl font-semibold text-slate-800">Achievements</h3>
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>International Undergraduate Student Scholarship (July 2023, July 2024)</li>
                <li>Burger King Scholars Award (April 2024)</li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal className="animate-fadeIn-right">
            <div className="bg-white p-6 rounded-lg shadow-lg card-shadow hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-slate-800">Technical Skills</h3>

              <div className="mb-4">
                <h4 className="text-xl font-medium mb-2 text-slate-700">Coding Languages</h4>
                <div className="flex flex-wrap gap-2">{renderSkills(codingLanguages)}</div>
              </div>

              <div className="mb-4">
                <h4 className="text-xl font-medium mb-2 text-slate-700">Frameworks & Libraries</h4>
                <div className="flex flex-wrap gap-2">{renderSkills(frameworksAndLibraries)}</div>
              </div>

              <div>
                <h4 className="text-xl font-medium mb-2 text-slate-700">Tools & Databases</h4>
                <div className="flex flex-wrap gap-2">{renderSkills(toolsAndDatabases)}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
