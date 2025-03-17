"use client"

import type React from "react"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, MapPinIcon, Loader2, Send } from "lucide-react"
import HeaderLine from "./HeaderLine"
import MainPadding from './MainPadding';
import Link from "next/link"
import emailjs from '@emailjs/browser';
const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    if(!formRef.current) return
    // Simulating an API call
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! 
      )
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
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="contact">
      <MainPadding>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
                  <label htmlFor="name" className="block text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="user_name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm md:text-base lg:text-lg xl:text-xl font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full text-sm md:text-base lg:text-lg xl:text-xl px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
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
                <h3 className="text-xl 2xl:text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MailIcon className="w-5 h-5 2xl:w-7 2xl:h-7 mr-3 text-primary" />
                    <Link
                      href="mailto:kyawthethtwe595@gmail.com"
                      className="text-gray-600 dark:text-gray-300 transition-colors text-base 2xl:text-lg"
                    >
                      kyawthethtwe595@gmail.com
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 2xl:w-7 2xl:h-7 mr-3 text-teal-500 dark:text-teal-400" />
                    <Link
                      href="tel:0612736866"
                      className="text-gray-600 dark:text-gray-300 transition-colors text-base 2xl:text-lg"
                    >
                      0612736866
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="w-5 h-5 2xl:w-7 2xl:h-7 mr-3 text-teal-500 dark:text-teal-400" />
                    <span className="text-gray-600 dark:text-gray-300 text-base 2xl:text-lg">Bangkok, Thailand</span>
                  </div>
                </div>
                <div className="mt-6 flex space-x-4">
                  <Link
                    href="https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-color "
                  >
                    <LinkedinIcon className="h-6 w-6 2xl:w-8 2xl:h-8" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="https://github.com/kyawthethtwe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary transition-colors"
                  >
                    <GithubIcon className="h-6 w-6 2xl:h-8 2xl:w-8" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link 
                    href="mailto:kyawthethtwe595@gmail.com"
                    className="text-primary transition-colors"
                  >
                    <MailIcon className="h-6 w-6 2xl:h-8 2xl:w-8" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

export default Contact

