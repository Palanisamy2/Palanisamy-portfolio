import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Smartphone, Globe, Zap, ArrowUpRight } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular."
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs using Node.js, Express, and various databases."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces that provide excellent user experiences."
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "End-to-end web application development from concept to deployment with modern technologies."
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites and applications for speed, SEO, and overall performance."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    <section id="services" className="relative w-full bg-[#0d0d0d] font-sans antialiased overflow-hidden py-20 md:py-32 border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* HEADER ROW */}
          <div className="mb-20">
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="text-[#ceef00] drop-shadow-[0_0_8px_rgba(206,239,0,0.5)]">
                {/* Custom geometric logo mark */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2ZM10 6C13.3137 6 16 8.68629 16 12C16 15.3137 13.3137 18 10 18V6Z" fill="currentColor"/>
                </svg>
              </span>
              <span className="text-[#ceef00] text-sm font-bold tracking-[0.15em] uppercase">Our Services</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
              <motion.h2 variants={itemVariants} className="text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white leading-[1.1] max-w-3xl lg:flex-1">
                Boost Your Brand With Powerful Digital Solutions
              </motion.h2>
              
              <motion.div variants={itemVariants} className="lg:w-[450px] pt-2">
                <p className="text-[#aaaaaa] text-lg leading-relaxed">
                  Enhance your brand's visibility and growth using innovative, 
                  bespoke software solutions crafted expertly for modern platforms.
                </p>
              </motion.div>
            </div>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const isActive = hoveredIndex === index;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative p-8 md:p-10 rounded-3xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${
                    isActive 
                      ? 'bg-[#ceef00] shadow-[0_20px_40px_rgba(206,239,0,0.15)] scale-[1.02] z-10' 
                      : 'bg-[#121212] border border-[#222] hover:border-[#333]'
                  }`}
                >
                  {/* Subtle top-right curved button cutout detail effect */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-6 right-6"
                      >
                        <div className="w-12 h-12 bg-[#0d0d0d] rounded-full flex items-center justify-center text-[#ceef00] shadow-lg transform -rotate-45 group-hover:rotate-0 transition-transform">
                          <ArrowUpRight size={22} strokeWidth={2.5} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <div className="mb-14">
                    <service.icon 
                      size={44} 
                      strokeWidth={1.2}
                      className={`transition-colors duration-500 ${isActive ? 'text-[#0d0d0d]' : 'text-white/80'}`} 
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-auto">
                    <h3 className={`text-2xl font-bold mb-4 tracking-tight transition-colors duration-500 ${
                      isActive ? 'text-[#0d0d0d]' : 'text-white'
                    }`}>
                      {service.title}
                    </h3>
                    
                    <p className={`text-[1.05rem] leading-relaxed transition-colors duration-500 ${
                      isActive ? 'text-[#0d0d0d]/80 font-medium' : 'text-[#888888]'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* BOTTOM PILL BANNER */}
          <motion.div variants={itemVariants} className="mt-20 lg:mt-32 flex justify-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-[#141414] border border-[#2a2a2a] rounded-[2rem] p-2 pr-6 shadow-xl w-full sm:w-auto">
              <div className="w-14 h-14 rounded-full bg-[#ceef00] flex items-center justify-center flex-shrink-0 text-black shadow-[0_0_15px_rgba(206,239,0,0.2)]">
                <Zap size={24} fill="currentColor" />
              </div>
              <span className="text-[#aaaaaa] text-[1.1rem] text-center sm:text-left">
                We Strive To Lead The way In The business
              </span>
              <a 
                href="#services" 
                className="text-white text-[1.1rem] font-bold underline decoration-[#555] underline-offset-[6px] hover:decoration-white transition-all duration-300 ml-0 sm:ml-4 pb-4 sm:pb-0"
              >
                Know All Services
              </a>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Services