"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"
import Link from "next/link"

interface Project {
  id: number
  name: string
  description: string
  image: string
  techStack: string[]
  liveDemo?: string
  githubRepo?: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product catalog, and payment integration.",
    image: "/Ecommerce.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "React Hook Form", "React Query"],
    githubRepo: "https://github.com/kyawthethtwe/E-commerce",
  },
  {
    id: 2,
    name: "RMUTI University Website",
    description: "A university website for RMUTI university showcasing programs, events, and student activities. The website is built during my internship at App Intouch CO., Ltd. The website is not finished yet and still in development.",
    image: "/rmuti.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Swiper.js"],
    liveDemo: "https://ba-rmuti-website.vercel.app/",
  },
  {
    id: 3,
    name: "Room Rental Website Frontend",
    description: "A platform for renting rooms and apartments, allowing users to search and book accommodations. I've built this project to practice integrating APIs and working with various libraries.",
    image: "/s-project.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Axios", "Shadcn Ui"],
    githubRepo: "https://github.com/Cee-X/Room-Rental-Frontend",
  },
  {
    id: 4,
    name: "Room Rental Website Backend",
    description: "The backend server for the room rental website project. It handles user authentication, room booking, and data management.",
    image: "/s-project.jpg",
    techStack: ["Express.js", "TypeScript", "MongoDB", "JWT", "Bcrypt", "Google Cloud Storage"],
    githubRepo: "https://github.com/Cee-X/Room-Rental-Backend",
  },
  {
    id: 5,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills (the one you're looking at right now!).",
    image: "/r_portfolio.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://portfolio-kyawthethtwe595-gmailcoms-projects.vercel.app/",
    githubRepo: "https://github.com/kyawthethtwe/portfolio",
  },
]

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
  >
    <Image
      src={project.image || "/placeholder.svg"}
      alt={`${project.name} project screenshot`}
      width={500}
      height={300}
      className="w-full h-72 object-cover object-center"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2  dark:text-white">{project.name}</h3>
      <p className=" mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <Badge
            key={index}
            className=""
          >
            {tech}
          </Badge>
        ))}
      </div>
      <div className="flex space-x-4">
        {project.liveDemo && (
          <Button asChild>
            <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              Live Demo
            </Link>
          </Button>
        )}
        {project.githubRepo && (
          <Button asChild>
            <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </Link>
          </Button>
        )}
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <MainPadding >
        <HeaderLine title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </MainPadding>
    </section>
  )
}

