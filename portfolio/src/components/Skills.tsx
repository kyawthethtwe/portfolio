// "use client"

// import type React from "react"
// import { motion } from "framer-motion"
// import {
//   SiNextdotjs,
//   SiTypescript,
//   SiReact,
//   SiReactquery,
//   SiTailwindcss,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiRedux,
// } from "react-icons/si"

// const SkillIcon = ({ Icon, name }: { Icon: React.ElementType; name: string }) => (
//   <motion.div className="flex flex-col items-center" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
//     <Icon className="w-12 h-12 text-gray-700 dark:text-gray-300 mb-2" />
//     <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
//   </motion.div>
// )

// export default function Skills() {
//   const skills = [
//     { Icon: SiNextdotjs, name: "Next.js" },
//     { Icon: SiTypescript, name: "TypeScript" },
//     { Icon: SiReact, name: "React" },
//     { Icon: SiRedux, name: "Zustand" },
//     { Icon: SiReactquery, name: "React Query" },
//     { Icon: SiTailwindcss, name: "Tailwind CSS" },
//     { Icon: SiJavascript, name: "JavaScript" },
//     { Icon: SiHtml5, name: "HTML5" },
//     { Icon: SiCss3, name: "CSS3" },
//   ]

//   return (
//     <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
//       <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">My Skills</h3>
//       <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
//         {skills.map((skill, index) => (
//           <SkillIcon key={index} Icon={skill.Icon} name={skill.name} />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

"use client"

import type React from "react"
import { motion } from "framer-motion"
import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiRedux,
  SiReactquery,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAxios,
  SiZod,
  SiReacthookform,
  SiNodedotjs,
} from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import HeaderLine from "./HeaderLine"

const SkillIcon = ({ Icon, name, description }: { Icon: React.ElementType; name: string; description: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-12 h-12 text-primary mb-2" />
          <span className="text-sm text-gray-600 dark:text-gray-400">{name}</span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="w-[200px] bg-white">
        <p className="text-sm">{description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function Skills() {
  const skills = [
    {
        Icon: SiNextdotjs,
        name: "Next.js",
        description: "I use Next.js for server-side rendering and creating fast, SEO-friendly React applications.",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        description: "I leverage TypeScript to write more robust and maintainable JavaScript code.",
    },
    {
        Icon: SiAxios,
        name: "Axios",
        description: "I make HTTP requests and handle responses using Axios for RESTful APIs.",
    },
    {
        Icon: SiReact,
        name: "React",
        description: "I build interactive user interfaces using React's component-based architecture.",
    },
    {
        Icon: SiRedux,
        name: "Zustand",
        description: "I utilize Zustand for simple and efficient state management in React applications.",
    },
    {
        Icon: SiReactquery,
        name: "React Query",
        description: "I implement React Query for managing and caching server state in React applications.",
    },
    {
        Icon: SiZod,
        name: "Zod",
        description: "I validate and parse data using Zod for TypeScript applications.",
    },
    {
        Icon: SiReacthookform,
        name: "React Hook Form",
        description: "I create flexible and performant forms using React Hook Form for React applications.",
    },
    {
        Icon: SiTailwindcss,
        name: "Tailwind CSS",
        description: "I use Tailwind CSS to rapidly build custom user interfaces with utility-first CSS.",
    },
    {   Icon: SiHtml5, 
        name: "HTML5", 
        description: "I structure web content semantically and accessibly using HTML5." },
    {
        Icon: SiCss3,
        name: "CSS3",
        description: "I style web applications using modern CSS3 features for responsive and attractive designs.",
    },
    {
        Icon: SiNodedotjs,
        name: "Node.js",
        description: "I build scalable server-side applications using Node.js, Express.js and Nest.js.",
    }
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <HeaderLine title="Tech Stack" />
      <div className="grid grid-cols-3 md:grid-cols-5 gap-8">
        {skills.map((skill, index) => (
          <SkillIcon key={index} Icon={skill.Icon} name={skill.name} description={skill.description} />
        ))}
      </div>
    </motion.div>
  )
}

