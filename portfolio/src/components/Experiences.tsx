"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"

interface ExperienceEntry {
  id: number
  jobTitle: string
  company: string
  duration: string
  responsibilities: string[]
}

const experienceData: ExperienceEntry[] = [
  {
    id: 1,
    jobTitle: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    duration: "Jan 2022 - Present",
    responsibilities: [
      "Lead a team of 5 developers in creating responsive web applications",
      "Implement and maintain CI/CD pipelines for frontend projects",
      "Conduct code reviews and mentor junior developers",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    company: "Web Solutions Co.",
    duration: "Mar 2019 - Dec 2021",
    responsibilities: [
      "Developed and maintained multiple client websites using React and Next.js",
      "Collaborated with UX designers to implement pixel-perfect, responsive designs",
      "Optimized website performance, achieving a 40% increase in load speed",
    ],
  },
  {
    id: 3,
    jobTitle: "Frontend Developer Intern",
    company: "StartUp Nexus",
    duration: "Jun 2018 - Feb 2019",
    responsibilities: [
      "Assisted in the development of a React-based dashboard for data visualization",
      "Learned and applied best practices in version control using Git",
      "Participated in daily stand-ups and sprint planning meetings",
    ],
  },
]

const ExperienceCard: React.FC<{ entry: ExperienceEntry; index: number }> = ({ entry, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col md:flex-row gap-4 mb-8"
    >
      <div className="flex-none w-full md:w-48 text-center md:text-right">
        <div className="inline-flex items-center justify-center md:justify-end w-full">
          <Calendar className="w-5 h-5 mr-2 text-primary" />
          <span className="font-semibold text-gray-600 dark:text-gray-300">{entry.duration}</span>
        </div>
      </div>
      <div className="flex-grow">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{entry.jobTitle}</h3>
          <div className="flex items-center mb-4">
            <Briefcase className="w-5 h-5 mr-2 text-primary" />
            <span className="text-gray-600 dark:text-gray-300">{entry.company}</span>
          </div>
          <ul className="mt-4 space-y-2">
            {entry.responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-start">
                <span className="text-accent mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const Experience: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experienceData.map((entry, index) => (
            <ExperienceCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

