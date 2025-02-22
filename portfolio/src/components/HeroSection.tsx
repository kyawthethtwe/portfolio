"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-center px-4">
        <div className="absolute inset-0  opacity-20 dark:opacity-30">
        <svg
          className="w-full h-full "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 600"
          fill="none"
        >
          <path
            d="M200 300c100-150 300-150 400 0s100 250-50 300-350-100-350-250z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F46E5" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey, I&apos;m Kyaw Thet Htwe 👋
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        Frontend Developer | Next.js & TypeScript Enthusiast
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        <Button className="">View My Work</Button>
        <Button >Download Resume</Button>
      </motion.div>
    </section>
  )
}


