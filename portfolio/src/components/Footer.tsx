"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-gray-300 py-8 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo / Name */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-primary"
        >
          Kyaw Thet Htwe
        </motion.div>

        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 md:mt-0">
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
        <div className="flex space-x-5 mt-4 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-accent transition-colors" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-accent transition-colors" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="text-2xl hover:text-accent transition-colors" />
          </a>
        </div>

      </div>

      {/* Copyright & Back to Top */}
      <div className="text-center text-sm mt-6">
        <p>© {new Date().getFullYear()} Kyaw Thet Htwe. All Rights Reserved.</p>
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
          className="mt-4 text-primary hover:text-pink-400 transition-colors"
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
