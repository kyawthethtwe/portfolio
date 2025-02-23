// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import { GraduationCap, Calendar, Award } from "lucide-react"

// interface EducationEntry {
//   degree: string
//   major: string
//   university: string
//   year: string
//   achievements?: string[]
// }

// const educationData: EducationEntry[] = [
//   {
//     degree: "Master's",
//     major: "Computer Science",
//     university: "Stanford University",
//     year: "2022",
//     achievements: ["Specialized in Artificial Intelligence", "Published 2 research papers in machine learning"],
//   },
//   {
//     degree: "Bachelor's",
//     major: "Software Engineering",
//     university: "MIT",
//     year: "2020",
//     achievements: ["Graduated with honors", "Led a team project that won the university's innovation award"],
//   },
//   {
//     degree: "Associate's",
//     major: "Web Development",
//     university: "Community College of San Francisco",
//     year: "2018",
//   },
// ]

// const EducationCard: React.FC<{ entry: EducationEntry; index: number }> = ({ entry, index }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="flex flex-col md:flex-row gap-4 mb-8"
//     >
//       <div className="flex-none w-full md:w-48 text-center md:text-right">
//         <div className="inline-flex items-center justify-center md:justify-end w-full">
//           <Calendar className="w-5 h-5 mr-2 text-primary" />
//           <span className="font-semibold text-gray-600 dark:text-gray-300">{entry.year}</span>
//         </div>
//       </div>
//       <div className="hidden md:block">
//         <div className="h-full w-0.5 bg-primary mx-auto relative">
//           <div className="absolute w-4 h-4 rounded-full bg-primary top-0 -left-1.5" />
//         </div>
//       </div>
//       <div className="flex-grow">
//         <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
//             {entry.degree} in {entry.major}
//           </h3>
//           <div className="flex items-center mb-2">
//             <GraduationCap className="w-5 h-5 mr-2 text-teal-500 dark:text-teal-400" />
//             <span className="text-gray-600 dark:text-gray-300">{entry.university}</span>
//           </div>
//           {entry.achievements && (
//             <ul className="mt-4 space-y-2">
//               {entry.achievements.map((achievement, i) => (
//                 <li key={i} className="flex items-start">
//                   <Award className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-1" />
//                   <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// const Education: React.FC = () => {
//   return (
//     <section className="py-16 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
//         >
//           Education
//         </motion.h2>
//         <div className="max-w-3xl mx-auto">
//           {educationData.map((entry, index) => (
//             <EducationCard key={index} entry={entry} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Education


"use client"

import type React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { GraduationCap, Calendar, Award } from "lucide-react"

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
    degree: "Master's",
    major: "Computer Science",
    university: "Stanford University",
    year: "2022",
    achievements: ["Specialized in Artificial Intelligence", "Published 2 research papers in machine learning"],
  },
  {
    id: 2,
    degree: "Bachelor's",
    major: "Software Engineering",
    university: "MIT",
    year: "2020",
    achievements: ["Graduated with honors", "Led a team project that won the university's innovation award"],
  },
  {
    id: 3,
    degree: "Associate's",
    major: "Web Development",
    university: "Community College of San Francisco",
    year: "2018",
  },
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
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
        {entry.degree} in {entry.major}
      </h3>
      <div className="flex items-center mb-2">
        <GraduationCap className="w-5 h-5 mr-2 text-primary " />
        <span className="text-gray-600 dark:text-gray-300">{entry.university}</span>
      </div>
      <div className="flex items-center mb-4">
        <Calendar className="w-5 h-5 mr-2 text-primary" />
        <span className="text-gray-600 dark:text-gray-300">{entry.year}</span>
      </div>
      {entry.achievements && (
        <ul className="mt-4 space-y-2">
          {entry.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start">
              <Award className="w-5 h-5 mr-2 text-accent flex-shrink-0 mt-1" />
              <span className="text-gray-600 dark:text-gray-300">{achievement}</span>
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
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800 dark:text-white"
        >
          Education
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="sticky top-24">
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Timeline</h3>
              <div className="space-y-4">
                {educationData.map((entry) => (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedEducation(entry)}
                    className={`w-full text-left p-2 rounded-lg transition-colors duration-200 flex items-center ${
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
      </div>
    </section>
  )
}

export default Education

