"use client"

import type React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, GithubIcon, GlobeIcon } from "lucide-react"
import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"
import Link from "next/link"
import { projects, Project } from "@/lib/projectsData"

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
  >
    <div className="relative overflow-hidden group">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={`${project.name} project screenshot`}
        width={500}
        height={300}
        className="w-full h-56 object-cover object-center transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
         <Button asChild variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Link href={`/projects/${project.slug}`}>View Details</Link>
         </Button>
      </div>
    </div>
    
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2 dark:text-white line-clamp-1" title={project.name}>{project.name}</h3>
      <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3 flex-grow">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.slice(0, 4).map((tech, index) => (
          <Badge
            key={index}
            variant="outline"
            className="text-xs"
          >
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 4 && (
             <Badge variant="outline" className="text-xs">+{project.techStack.length - 4}</Badge>
        )}
      </div>
      
      <div className="flex gap-3 mt-auto">
         <Button asChild variant="default" className="flex-1" size="sm">
            <Link href={`/projects/${project.slug}`}>
              Details <ArrowRight className="ml-2 w-4 h-4"/>
            </Link>
         </Button>
        {project.liveDemo && (
          <Button asChild variant="outline" size="icon" title="Live Demo">
            <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
              <GlobeIcon className="w-4 h-4" />
            </Link>
          </Button>
        )}
        {project.githubRepo && (
          <Button asChild variant="outline" size="icon" title="GitHub Repo">
            <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-4 h-4" />
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

