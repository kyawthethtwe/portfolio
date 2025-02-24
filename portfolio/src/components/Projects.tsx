"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import HeaderLine from "./HeaderLine"

interface Project {
  id: number
  name: string
  description: string
  image: string
  techStack: string[]
  liveDemo: string
  githubRepo: string
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product catalog, and payment integration.",
    image: "/s-project.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveDemo: "https://example.com/ecommerce",
    githubRepo: "https://github.com/yourusername/ecommerce",
  },
  {
    id: 2,
    name: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/s-project.jpg",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    liveDemo: "https://example.com/taskapp",
    githubRepo: "https://github.com/yourusername/taskapp",
  },
  {
    id: 3,
    name: "Weather Dashboard",
    description: "A responsive weather dashboard that provides real-time weather information and forecasts.",
    image: "/s-project.jpg",
    techStack: ["React", "OpenWeather API", "Chart.js"],
    liveDemo: "https://example.com/weather",
    githubRepo: "https://github.com/yourusername/weather-dashboard",
  },
  {
    id: 4,
    name: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills (the one you're looking at right now!).",
    image: "/s-project.jpg",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://example.com/portfolio",
    githubRepo: "https://github.com/yourusername/portfolio",
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
      className="w-full h-48 object-cover"
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
        <Button asChild>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
            Live Demo
          </a>
        </Button>
        <Button  asChild>
          <a href={project.githubRepo} target="_blank" rel="noopener noreferrer">
            GitHub Repo
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
)

export default function Projects() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="projects">
      <div className="container mx-auto px-4">
        <HeaderLine title="Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

