"use client"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { Award, Calendar, GraduationCap } from "lucide-react"
import type React from "react"
import { KeyboardEvent, useEffect, useRef, useState } from "react"
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
    year: "2022-2025",
    achievements: ["GPAX 3.80", "University Hackathon Finalist"],
  },
  {
    id: 2,
    degree: "Bachelor's",
    major: "Computer Science",
    university: "University of Computer Studies, Mandalay",
    year: "2017-2019",
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

const EducationCard: React.FC<{ entry: EducationEntry; isInView: boolean }> = ({ entry, isInView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
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
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const timelineRef = useRef<(HTMLButtonElement | null)[]>([])
  
  // Initialize refs for each button
  useEffect(() => {
    timelineRef.current = timelineRef.current.slice(0, educationData.length)
  }, [])
  
  // Handle keyboard navigation
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault()
        if (index < educationData.length - 1) {
          timelineRef.current[index + 1]?.focus()
          setSelectedEducation(educationData[index + 1])
        }
        break
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault()
        if (index > 0) {
          timelineRef.current[index - 1]?.focus()
          setSelectedEducation(educationData[index - 1])
        }
        break
      default:
        break
    }
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50 dark:bg-gray-900" id="education">
      <MainPadding>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
        >
          <HeaderLine title="Education" />
          <div className="max-w-5xl 2xl:max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="sticky top-24 md:top-32">
                <motion.h3 
                  className="text-xl 2xl:text-2xl font-semibold mb-4 text-gray-800 dark:text-white"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Timeline
                </motion.h3>
                <div className="space-y-4">
                  {educationData.map((entry, index) => (
                    <motion.button
                      key={entry.id}
                      ref={el => { timelineRef.current[index] = el }}
                      onClick={() => setSelectedEducation(entry)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      className={`w-full text-left text-base 2xl:text-lg p-2 rounded-lg transition-colors duration-200 flex items-center ${
                        selectedEducation.id === entry.id
                          ? "bg-primary text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-primary/50 dark:hover:bg-primary/50"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      role="tab"
                      tabIndex={0}
                    >
                      <div
                        className={`w-4 h-4 rounded-full mr-3 ${
                          selectedEducation.id === entry.id ? "bg-white" : "bg-primary"
                        }`}
                      ></div>
                      <span>{entry.year}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <AnimatePresence mode="wait">
                <EducationCard key={selectedEducation.id} entry={selectedEducation} isInView={isInView} />
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

export default Education

