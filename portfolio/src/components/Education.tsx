"use client"
import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"
import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"

interface EducationEntry {
  id: number
  degree: string
  major: string
  university: string
  year: string
  achievements?: string[]
}

const educationData: EducationEntry[] = [
  {
    id: 1,
    degree: "Bachelor's",
    major: "Information and Communication Technology",
    university: "Rangsit University",
    year: "2022",
    achievements: ["GPAX 3.78", "University Hackathon Finalist"],
  },
  {
    id: 2,
    degree: "Bachelor's",
    major: "Computer Science",
    university: "University of Computer Studies, Mandalay",
    year: "2017",
  },
  {
    id: 3,
    degree: "High School",
    major: "Science and Mathematics",
    university: "KMC Private High School",
    year: "2016",
    achievements: ["Passed with 3 Distinctions","won 1st place in the school's football tournament"],
  }
]

const EducationCard: React.FC<{ entry: EducationEntry }> = ({ entry }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md h-full"
    >
      <h3 className="text-xl 2xl:text-2xl font-bold text-gray-800 dark:text-white mb-2">
        {entry.degree} in {entry.major}
      </h3>
      <div className="flex items-center mb-2">
        <GraduationCap className="w-5 h-5 2xl:w-7 2xl:h-7 mr-2 text-primary " />
        <span className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">{entry.university}</span>
      </div>
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 2xl:w-7 2xl:h-7 mr-2 text-primary" />
        <span className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">{entry.year}</span>
      </div>
      {entry.achievements && (
        <ul className="mt-4 space-y-2">
          {entry.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start">
              <Award className="w-5 h-5 2xl:w-7 2xl:h-7 mr-2 text-accent flex-shrink-0 mt-1" />
              <span className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  )
}

const Education: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState<EducationEntry>(educationData[0])

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="education">
      <MainPadding>
        <HeaderLine title="Education" />
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24">
                <h3 className="text-xl 2xl:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Timeline</h3>
                <div className="space-y-4">
                  {educationData.map((entry) => (
                    <button
                      key={entry.id}
                      onClick={() => setSelectedEducation(entry)}
                      className={`w-full text-left text-base 2xl:text-lg p-2 rounded-lg transition-colors duration-200 flex items-center ${
                        selectedEducation.id === entry.id
                          ? "bg-primary text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary/50 dark:hover:bg-primary/50"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          selectedEducation.id === entry.id ? "bg-white" : "bg-primary"
                        }`}
                      ></div>
                      <span>{entry.year}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <AnimatePresence mode="wait">
                <EducationCard key={selectedEducation.id} entry={selectedEducation} />
              </AnimatePresence>
            </div>
          </div>
      </MainPadding>
    </section>
  )
}

export default Education

