import { SectionHeading } from "./section-heading"
import { Briefcase, Calendar } from "lucide-react"

export function WorkExperience() {
  return (
    <section id="work" className="section-container bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading>
          <div className="flex items-center justify-center">
            <Briefcase className="h-8 w-8 mr-2 text-blue-600" />
            <span>Work Experience</span>
          </div>
        </SectionHeading>


        <div className="max-w-3xl mx-auto">
          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-600 after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
                Present
              </time>
              <div className="text-xl font-bold text-slate-800">Shift Coordinator</div>
            </div>
            <div className="flex items-center text-slate-500 mb-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Burger King, Winnipeg, Manitoba | April 2023 - Present</span>
            </div>
            <ul className="text-slate-600 mt-3 list-disc list-inside space-y-1">
              <li>Made store run smoothly in my shift by keeping close attention to details.</li>
              <li>Supported my team to provide great customer service to the customers.</li>
              <li>
                Maintained positive environment throughout the shift and made sure that everyone worked together and
                helped each other.
              </li>
              <li>
                Ensured safety, followed rules, and made sure customers were happy by following proper regulations and
                solving any problems that came up during shifts.
              </li>
            </ul>
          </div>

          <div className="relative pl-8 sm:pl-32 py-6 group">
            <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-200 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-4 after:h-4 after:bg-blue-600 after:border-4 after:box-content after:border-white after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
              <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-blue-600 bg-blue-100 rounded-full">
                2023
              </time>
              <div className="text-xl font-bold text-slate-800">Team Member</div>
            </div>
            <div className="flex items-center text-slate-500 mb-1">
              <Calendar className="h-4 w-4 mr-1" />
              <span>Burger King, Winnipeg, Manitoba | April 2022 - April 2023</span>
            </div>
            <ul className="text-slate-600 mt-3 list-disc list-inside space-y-1">
              <li>Took customer orders, ensured quick service made customers happy.</li>
              <li>
                Made food items which included burgers and sides according to Burger King's standards, helping maintain
                consistent quality.
              </li>
              <li>
                Cleaned the restaurant inside and outside, including restrooms and dining areas, to keep it welcoming
                for customers.
              </li>
              <li>Collected and unloaded deliveries and organized stock to keep the restaurant running smoothly.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
