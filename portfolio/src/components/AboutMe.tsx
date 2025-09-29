"use client"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { Autoplay, Keyboard, Mousewheel, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import HeaderLine from "./HeaderLine"
import MainPadding from "./MainPadding"

export default function AboutMe() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const aboutTexts = [
    "I'm a passionate fullstack developer with expertise in building modern web applications. With a strong foundation in Next.js and TypeScript, I create efficient, scalable, and user-friendly interfaces that deliver exceptional user experiences.",
    "My journey in web development started 2 years ago, and since then, I've been constantly learning and adapting to new technologies. I believe in writing clean, maintainable code and creating intuitive user interfaces.",
    "When I'm not coding, you can find me exploring the great outdoors, reading books, or playing video games. I'm always looking for new challenges and opportunities to grow as a developer and as an individual.",
    "I'm currently seeking new opportunities to work on exciting projects and collaborate with talented individuals. If you're interested in working together, feel free to reach out to me via email or LinkedIn.",
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="about">
      <MainPadding>
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Image Column */}
          <motion.div
            className="w-full md:w-1/2 h-[400px] 2xl:h-[550px]"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Image
              src="/real_profile.jpg"
              alt="Kyaw Thet Htwe"
              width={600}
              height={600}
              priority
              className="rounded-lg shadow-lg object-cover object-center w-full h-full" 
            />
          </motion.div>

          {/* Text Column */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HeaderLine title="About Me" />
            <Swiper
              modules={[Pagination, Mousewheel, Autoplay, Keyboard]}
              spaceBetween={50}
              slidesPerView={1}
              mousewheel={{
                invert: false,
                forceToAxis: true,
              }}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              autoplay={{ 
                delay: 6000,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              className="mb-6 cursor-pointer"
              a11y={{
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
              }}
            >
              {aboutTexts.map((text, index) => (
                <SwiperSlide key={index}>
                  <p className="text-lg 2xl:text-xl text-gray-600 dark:text-gray-300 mb-6">{text}</p>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Social links */}
            <div className="flex space-x-4 mt-6">
              <Link href="https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/" target="_blank" rel="noopener noreferrer" 
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors">
                <FaLinkedin className="w-6 h-6" aria-label="LinkedIn Profile" />
              </Link>
              <Link href="https://github.com/kyawthethtwe" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                <FaGithub className="w-6 h-6" aria-label="GitHub Profile" />
              </Link>
              <Link href="mailto:kyawthethtwe595@gmail.com"
                className="text-gray-600 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
                <FaEnvelope className="w-6 h-6" aria-label="Email Me" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </MainPadding>
    </section>
  )
}

