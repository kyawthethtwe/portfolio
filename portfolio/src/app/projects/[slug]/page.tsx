
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, GithubIcon, GlobeIcon, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import MainPadding from '@/components/MainPadding';
import { projects } from '@/lib/projectsData';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Project Details`,
    description: project.description,
  };
}

export default async function ProjectDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <MainPadding>
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="pl-0 hover:pl-2 transition-all">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Image & Quick Links */}
          <div className="space-y-8">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div className="flex flex-wrap gap-4">
              {project.liveDemo && (
                <Button asChild size="lg" className="flex-1">
                  <Link href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <GlobeIcon className="mr-2 h-5 w-5" />
                    Live Demo
                  </Link>
                </Button>
              )}
              {project.githubRepo && (
                <Button asChild variant="outline" size="lg" className="flex-1">
                  <Link href={project.githubRepo} target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="mr-2 h-5 w-5" />
                    Source Code
                  </Link>
                </Button>
              )}
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="px-3 py-1 text-sm">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column: Details */}
          <div className="space-y-10">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {project.name}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {project.features && project.features.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 gap-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-green-500 mr-3 shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenges && project.challenges.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Challenges & Learnings
                </h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, idx) => (
                    <div key={idx} className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-amber-500 shadow-sm">
                      <p className="text-gray-700 dark:text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Other Projects Section */}
        <div className="mt-24 border-t border-gray-200 dark:border-gray-800 pt-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((otherProject) => (
                <Link 
                  href={`/projects/${otherProject.slug}`} 
                  key={otherProject.id}
                  className="group block"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={otherProject.image}
                        alt={otherProject.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                        {otherProject.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {otherProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </MainPadding>
    </main>
  );
}
