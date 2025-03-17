"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar } from "lucide-react"
import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"
interface ExperienceEntry {
  id: number
  jobTitle: string
  company: string
  duration: string
  responsibilities: string[]
}

const experienceData: ExperienceEntry[] = [
  //internship
  {
    id: 1,
    jobTitle: "Frontend Developer Intern",
    company: "App Intouch Co., Ltd.",
    duration: "Jan 2025 - Present",
    responsibilities: [
      "Contributed to frontend development using Next.js, React, and TypeScript in an agile team environment",
      "Implemented responsive UI components following design specifications and accessibility standards",
      "Collaborated with senior developers to optimize application performance and improve code quality",
      "Assisted in integrating RESTful APIs and managing application state using React hooks",
      "Participated in code reviews and implemented feedback to enhance development skills"
    ]
  },
  //volunteer frontend developer at rangsit university language center
  {
    id: 2,
    jobTitle: "Volunteer Frontend Developer",
    company: "Rangsit University Language Center",
    duration: "Jan 2024 - Apr 2024",
    responsibilities: [
      "Contributed to the enhancement of digital resources and improving the user experience and functionality of the center's website",
      "Developed responsive UI components using HTML, CSS, and JavaScript",
      "Implemented state management and reusable components using React.js and Tailwind CSS",
      "Collaborated with the team to meet project deadlines and deliver high-quality code"
    ] 
  },
  {
    id: 3,
    jobTitle: "Tech Seminar Management",
    company: "Rangsit University",
    duration: "Sep 2023 - Dec 2023",
    responsibilities: [
      "Coordinated and managed a university tech seminar with a team",
      "Collaborated with team members to plan and execute seminar activities, including speaker coordination and event promotion",
      "Demonstrated strong teamwork in handling responsibilities such as registration, venue setup, and participant engagement"
    ]
  },
  {
    id: 4,
    jobTitle: "Hackathon Finalist",
    company: "Rangsit University",
    duration: "Aug 2023",
    responsibilities: [
      "Participated in University Hackathon, where I collaborated with a team to develop a project with Gemini AI technology",
      "Utilized specific technologies or skills, e.g., JavaScript, React, APIs, Gemini AI to create innovative solutions under time constraints",
      "Gained valuable experience in rapid prototyping, problem-solving, and teamwork"
    ]
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
      <div className="flex-none w-full md:w-52 2xl:w-60 text-center md:text-right">
        <div className="inline-flex items-center justify-center md:justify-end w-full">
          <Calendar className="w-5 h-5 2xl:w-7 2xl:h-7 mr-2 text-primary" />
          <span className="font-semibold text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">{entry.duration}</span>
        </div>
      </div>
      <div className="flex-grow">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 dark:text-white mb-2">{entry.jobTitle}</h3>
          <div className="flex items-center mb-4">
            <Briefcase className="w-5 h-5 mr-2 text-primary" />
            <span className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">{entry.company}</span>
          </div>
          <ul className="mt-4 space-y-2">
            {entry.responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-start text-base 2xl:text-lg">
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="experience">
      <MainPadding>
        <HeaderLine title="Experience" />
        <div className="max-w-4xl 2xl:max-w-5xl mx-auto">
          {experienceData.map((entry, index) => (
            <ExperienceCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>
      </MainPadding>
    </section>
  )
}

export default Experience

