import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import palanisamyImg from './assert/image/palanisamy-img.png'
import resume from './assert/pdf/Palanisamy_M.pdf'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Palanisamy_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <section id="home" className="relative w-full h-screen bg-[#F9F9F9] dark:bg-[#0d0d0d] overflow-hidden flex text-[#111] dark:text-gray-100 font-sans antialiased transition-colors duration-500">
      
      {/* Sidebar Info - Match Image Aesthetic */}
      <div className="hidden lg:flex absolute left-0 top-0 bottom-0 w-20 flex-col justify-between items-center py-20 z-20">
        <div className="rotate-180 [writing-mode:vertical-rl] text-[9px] uppercase tracking-[0.3em] font-medium text-gray-400 dark:text-gray-500">
          Full Stack Developer
        </div>
        <div className="h-32 w-[0.5px] bg-gray-200 dark:bg-white/10"></div>
        <div className="text-[9px] uppercase tracking-[0.3em] font-medium text-gray-400 dark:text-gray-500">
          2024
        </div>
      </div>

      {/* Main Content Layout */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 relative z-10 flex flex-col justify-between px-6 md:px-16 lg:pl-44 pt-24 pb-16 h-full"
      >
        
        {/* Top Section - Stats */}
        <motion.div variants={itemVariants} className="flex gap-16 md:gap-20 items-start">
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 text-black dark:text-white">+200</h3>
            <p className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">
              Project completed
            </p>
          </div>
          <div className="flex flex-col">
            <h3 className="text-3xl md:text-5xl font-medium tracking-tight mb-2 text-black dark:text-white">+50</h3>
            <p className="text-[10px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">
              Startup raised
            </p>
          </div>
        </motion.div>

        {/* Middle Section - Typography */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="relative mb-6 md:mb-10">
            <motion.h1 
              variants={itemVariants}
              className="text-[28vw] md:text-[20vw] lg:text-[16vw] font-normal leading-[0.7] tracking-[-0.03em] mb-10 pointer-events-none text-black dark:text-white"
            >
              Hello
            </motion.h1>
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[1px] bg-black/20 dark:bg-white/20"></div>
                <p className="text-sm md:text-base font-medium tracking-tight text-gray-500 dark:text-gray-400 lowercase">
                   — It's Palanisamy M a full stack developer
                </p>
              </div>
              <button 
                onClick={handleDownload}
                className="text-[10px] font-bold tracking-[0.2em] text-gray-400 hover:text-black dark:hover:text-white transition-colors uppercase underline underline-offset-8"
              >
                Get CV
              </button>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Interaction */}
        <motion.div variants={itemVariants} className="flex items-center">
          <a href="#about" className="group flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-black dark:text-white hover:text-gray-500 transition-all duration-300">
            Scroll down 
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.div>
          </a>
        </motion.div>

      </motion.div>

      {/* Hero Image Section - Monochrome Portrait Style */}
      <div className="absolute right-0 bottom-0 top-0 w-full md:w-[60%] lg:w-[50%] h-full z-0 flex items-end justify-end overflow-hidden pointer-events-none">
        <motion.img 
          initial={{ opacity: 0, x: 50, scale: 1.02 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          src={palanisamyImg} 
          alt="Palanisamy Portrait" 
          className="h-[85%] md:h-[105%] w-full md:w-auto object-cover object-bottom grayscale contrast-[1.15] brightness-[1.02] dark:brightness-85 dark:contrast-125"
        />
        {/* Grayscale Fade for smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F9F9F9] dark:from-[#0d0d0d] via-transparent to-transparent md:hidden pointer-events-none" />
        <div className="hidden md:block absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-[#F9F9F9] dark:from-[#0d0d0d] to-transparent pointer-events-none opacity-90" />
      </div>

    </section>
  )
}

export default Hero