import React from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Instagram, Twitter, Zap } from 'lucide-react'
import resume from './assert/pdf/Palanisamy_M.pdf'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section id="home" className="relative w-full min-h-[100vh] mt-16 md:mt-20 bg-[#0d0d0d] font-sans antialiased overflow-hidden flex items-center justify-center border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10 flex flex-col items-center justify-center h-full pt-10 pb-20">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full relative"
        >
          {/* Main Huge Typography */}
          <motion.div variants={itemVariants} className="text-center w-full mb-16 md:mb-[15vh]">
            <h1 className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-black text-white leading-[1] tracking-wider font-mono">
              PALANISAMY M
            </h1>
          </motion.div>

          {/* Bottom Row Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-end w-full">
            
            {/* Left Column - Core Skills */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <div className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3">
                <span className="text-[#ceef00] font-mono">=&gt;</span> Backend Dev
              </div>
              <div className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3">
                <span className="text-[#ceef00] font-mono">=&gt;</span> Web Development
              </div>
              <div className="text-white text-xl md:text-2xl font-bold tracking-wide flex items-center gap-3">
                <span className="text-[#ceef00] font-mono">=&gt;</span> Frontend Architecture
              </div>
              
              {/* Social Links under skills */}
              <div className="flex items-center gap-5 mt-6">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/palanisamy-m-23a5a72b7/" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://github.com/Palanisamy2" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                <a href="mailto:palanisamy20044@gmail.com" className="text-[#888] hover:text-white transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>

            {/* Middle Column - Placeholder for balance, where the image technically was */}
            <div className="hidden md:block" />

            {/* Right Column - Status and Button */}
            <motion.div variants={itemVariants} className="flex flex-col justify-end right-col items-start md:items-end text-left md:text-right">
              <p className="text-[#aaaaaa] text-sm font-semibold tracking-widest max-w-[300px] uppercase leading-relaxed mb-6">
                FULL STACK DEVELOPER CRAFTING ROBUST WEB APPLICATIONS EXCELLING IN SCALABLE FRONT-END & BACK-END SOLUTIONS
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#ceef00] flex items-center justify-center text-[#ceef00]">
                  <Zap size={20} fill="currentColor" />
                </div>
                
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = resume;
                    link.download = "Palanisamy_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="bg-[#ceef00] hover:bg-white text-black px-8 py-3.5 rounded-full font-bold text-sm tracking-widest transition-colors duration-300 uppercase"
                >
                  DOWNLOAD CV
                </button>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero