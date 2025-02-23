"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LinkedinIcon as LinkedIn, GitlabIcon as GitHub, Mail, Loader2 } from "lucide-react"

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulating an API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      setSubmitStatus("error")
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            Get in Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-teal-500  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary  dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </div>
            {submitStatus === "success" && (
              <p className="text-green-600 dark:text-green-400 text-center">Message sent successfully!</p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 dark:text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
            >
              <LinkedIn className="h-8 w-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
            >
              <GitHub className="h-8 w-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:your.email@example.com"
              className="text-gray-600 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
            >
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

