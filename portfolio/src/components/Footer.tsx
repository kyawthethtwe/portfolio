"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import MainPadding from "./MainPadding";

export default function Footer() {
  return (
    <MainPadding className="bg-[#0F172A] text-gray-300 py-8 px-6 md:px-12">
      <div className=" flex flex-col md:flex-row justify-between items-center">
        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl 2xl:text-2xl font-semibold text-primary"
        >
          Kyaw Thet Htwe
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0 text-base 2xl:text-lg">
          {["Home", "About", "Projects", "Experience", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="hover:text-accent transition-colors"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-5 mt-4 md:mt-0 ">
          <Link href="https://github.com/Cee-X" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl 2xl:text-3xl hover:text-accent transition-colors" />
          </Link>
          <Link href="https://www.linkedin.com/in/kyaw-thet-htwe-856b59201/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl 2xl:text-3xl hover:text-accent transition-colors" />
          </Link>
          <Link href="mailto:kyawthethtwe595@gmail.com">
            <FaEnvelope className="text-2xl 2xl:text-3xl  hover:text-accent transition-colors" />
          </Link>
        </div>

      </div>

      {/* Copyright & Back to Top */}
      <div className="text-center text-sm mt-6 2xl:text-base">
        <p>© {new Date().getFullYear()} Kyaw Thet Htwe. All Rights Reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="mt-4 text-primary hover:text-pink-400 transition-colors"
        >
          Back to Top ↑
        </button>
      </div>
    </MainPadding>
  );
}
