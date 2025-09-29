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
  SiNestjs,
  SiExpress,
  SiMongodb,
  SiPostgresql
} from "react-icons/si"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"

const TechIcons = ({ Icon, name, description }: { Icon: React.ElementType; name: string; description: string }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-12 h-12 2xl:w-14 2xl:h-14 text-primary mb-2" />
          <span className="text-sm xl:text-base 2xl:text-lg text-gray-600 dark:text-gray-400">{name}</span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent className="w-[200px] 2xl:w-[250px] bg-white">
        <p className="text-sm text-black">{description}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
)

export default function Techstacks() {
  const techs = [
    {
        Icon: SiNextdotjs,
        name: "Next.js",
        description: "I build fast and scalable web applications using Next.js for React.",
    },
    {
        Icon: SiTypescript,
        name: "TypeScript",
        description: "I write type-safe JavaScript using TypeScript for scalable and maintainable codebases.",
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
    },
    {
        Icon: SiExpress,
        name: "Express.js",
        description: "I create robust RESTful APIs using Express.js for server-side applications.",
    },
    {
        Icon: SiNestjs,
        name: "Nest.js",
        description: "I develop scalable and maintainable server-side applications using Nest.js framework.",
    },
    {
        Icon: SiMongodb,
        name: "MongoDB",
        description: "I design flexible NoSQL databases using MongoDB for modern web applications.",
    },
    {
        Icon: SiPostgresql,
        name: "PostgreSQL",
        description: "I manage relational databases using PostgreSQL for data integrity and complex queries.",
    },
  ]

  return (
    <MainPadding
      className="py-16  dark:bg-gray-900"
    >
      <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      >
        <HeaderLine title="Tech Stack" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8">
          {techs.map((tech, index) => (
            <TechIcons key={index} Icon={tech.Icon} name={tech.name} description={tech.description} />
          ))}
        </div>
      </motion.div>
    </MainPadding>
  )
}

