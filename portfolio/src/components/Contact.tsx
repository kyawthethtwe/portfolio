"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, MapPinIcon, Loader2, Send } from "lucide-react"
import HeaderLine from "./HeaderLine"

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
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <HeaderLine title="Contact" />
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact Form Column */}
            <div className="md:w-2/3">
              <motion.form
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
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
                    className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                    className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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
                    className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className=" bg-primary hover:bg-primary_dark text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
                {submitStatus === "success" && (
                  <p className="text-primary text-center">Message sent successfully!</p>
                )}
                {submitStatus === "error" && (
                  <p className="text-red-600 dark:text-red-400 text-center">
                    Failed to send message. Please try again.
                  </p>
                )}
              </motion.form>
            </div>
            {/* Contact Info Column */}
            <div className="md:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-full"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailIcon className="w-5 h-5 mr-3 text-primary" />
                    <a
                      href="mailto:kyawthethtwe595@gmail.com"
                      className="text-gray-600  transition-colors"
                    >
                      kyawthethtwe595@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-3 text-teal-500 dark:text-teal-400" />
                    <a
                      href="tel:+1234567890"
                      className="text-gray-600 dark:text-gray-300 transition-colors"
                    >
                      0612736866
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 mr-3 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-600 dark:text-gray-300">Bangkok, Thailand</span>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors"
                  >
                    <LinkedinIcon className="h-6 w-6" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/kyawthethtwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors"
                  >
                    <GithubIcon className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="mailto:kyawthethtwe595@gmail.com"
                    className="text-primary transition-colors"
                  >
                    <MailIcon className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

