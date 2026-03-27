import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Globe, ArrowUpRight, Sparkles, MoveRight } from 'lucide-react'
import palanisamyImg from './assert/image/palanisamy-img.png'

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
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

  return (
    <section id="about" className="relative w-full bg-[#f6f6f6] dark:bg-[#0a0a0a] overflow-hidden py-24 md:py-32 font-sans transition-colors duration-500" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24"
        >
          {/* Column 1 - Introduction */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between pt-4">
            <div>
              <h2 className="text-5xl md:text-6xl font-normal tracking-[-0.03em] mb-10 text-black dark:text-white">About Me</h2>
              <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-500 dark:text-gray-400 font-medium max-w-sm">
                I specialize in turning complex problems into elegant solutions. 
                My approach blends creativity with strategic thinking to deliver 
                designs that not only look great but work seamlessly. 
                Ready to start your next project?
              </p>
            </div>
            {/* Decorative Arrow (matches image) */}
            <div className="hidden lg:block mt-16 ml-4 opacity-50 dark:opacity-20 translate-y-10">
              <svg width="240" height="120" viewBox="0 0 240 120" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                <path d="M10 110 C 100 110, 150 10, 230 15" strokeLinecap="round" strokeDasharray="4 4"/>
                <path d="M220 5 L 235 15 L 225 30" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </motion.div>

          {/* Column 2 - Main Stats Card */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white dark:bg-[#111] rounded-[2.5rem] p-10 md:p-12 w-full max-w-[420px] shadow-[0_20px_60px_rgba(0,0,0,0.02)] dark:shadow-none flex flex-col items-center text-center space-y-10 border border-gray-100/50 dark:border-white/5">
              <div className="w-16 h-16 rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center text-black dark:text-white">
                <Globe size={28} strokeWidth={1.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-6xl md:text-7xl font-normal tracking-tighter text-black dark:text-white">120%</h3>
                <p className="text-xs md:text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-relaxed">
                  Average increase in client <br/> engagement in the first 6 months
                </p>
              </div>
              <div className="w-full aspect-[4/5] rounded-[1.5rem] overflow-hidden grayscale contrast-[1.1] shadow-2xl">
                <img src={palanisamyImg} alt="Portrait" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </motion.div>

          {/* Column 3 - Features & Image */}
          <motion.div variants={itemVariants} className="flex flex-col justify-between space-y-16">
            {/* Small Top Image with Link Action */}
            <div className="relative group self-center lg:self-end">
              <div className="w-48 h-48 rounded-[2rem] overflow-hidden grayscale contrast-[1.15] brightness-[1.05] dark:brightness-90 shadow-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0">
                <img src={palanisamyImg} alt="Thumbnail Portrait" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-white dark:bg-[#111] rounded-full flex items-center justify-center shadow-xl cursor-pointer">
                  <ArrowUpRight size={20} className="text-black dark:text-white" />
                </div>
              </div>
            </div>

            {/* Feature Points */}
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0 text-white dark:text-black">
                  <Sparkles size={16} />
                </div>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                  With 4+ years of dedicated learning and internship experience, 
                  I specialize in creating intuitive, user-focused designs that 
                  solve real-world problems and deliver seamless digital experiences.
                </p>
              </div>
              <div className="flex gap-6">
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center flex-shrink-0 text-white dark:text-black">
                  <Sparkles size={16} />
                </div>
                <p className="text-sm md:text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-300 font-medium">
                  I thrive on working closely with clients, blending creativity with 
                  strategy to bring their vision to life through thoughtful, 
                  impactful development and design solutions.
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#fcfcfc] dark:bg-[#0b0b0b] z-0 -skew-x-12 translate-x-1/2 pointer-events-none" />
    </section>
  )
}

export default About