import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Smartphone, Globe, Zap, Cpu, Monitor } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const services = [
    {
      icon: Code,
      title: "Product Design",
      description: "This includes everything from initial concept development to final design execution."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually engaging interfaces that enhance user experiences."
    },
    {
      icon: Monitor,
      title: "User Research & Testing",
      description: "User research and usability testing to gather insights and validate design decisions."
    },
    {
      icon: Server,
      title: "Design Consultation",
      description: "Expert advice and strategic guidance to navigate complex design challenges."
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      description: "Crafting seamless mobile experiences that perform perfectly on every handheld device."
    },
    {
      icon: Zap,
      title: "Fast Prototyping",
      description: "Rapidly iterating and building functional prototypes to test ideas and workflows."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.1 } 
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="services" className="relative w-full bg-[#f6f6f6] dark:bg-[#0a0a0a] font-sans antialiased overflow-hidden py-24 md:py-32 transition-colors duration-500 border-b border-gray-100 dark:border-white/5" ref={ref}>
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header Section - Matches provided image */}
          <div className="flex flex-col items-center text-center mb-20 md:mb-28">
            <motion.div variants={itemVariants} className="flex items-center gap-2 mb-8 bg-white dark:bg-white/5 px-4 py-2 rounded-full border border-gray-100 dark:border-white/5 shadow-sm">
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Services</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-normal tracking-[-0.03em] text-black dark:text-white leading-[1.1] mb-8 max-w-4xl mx-auto">
              Design Services Tailored to Your Needs
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-400 dark:text-gray-500 max-w-2xl font-medium">
              Explore a range of tailored UI/UX and product design services designed to meet your 
              unique needs and goals. From initial research and strategy to wireframing and prototyping.
            </motion.p>
          </div>

          {/* Services Grid - Exact Card Style from Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-[#111] p-10 md:p-12 pt-14 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] flex flex-col items-start border border-gray-100/50 dark:border-white/5 group"
              >
                {/* Circular Icon - Black in Image */}
                <div className="w-16 h-16 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black mb-10 transform group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={26} strokeWidth={1.5} />
                </div>

                <h3 className="text-2xl md:text-3xl font-normal mb-5 text-black dark:text-white tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-sm md:text-[1.05rem] leading-relaxed text-gray-500 dark:text-gray-400 font-medium">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Minimalist CTA Footer */}
          <motion.div variants={itemVariants} className="mt-24 md:mt-32 flex flex-col items-center">
             <div className="h-[1px] w-24 bg-gray-200 dark:bg-white/10 mb-10" />
             <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 dark:text-gray-500">
               Ready to collaborate?
             </p>
             <a href="#contact" className="mt-4 text-sm font-bold text-black dark:text-white underline underline-offset-8 decoration-gray-200 dark:decoration-white/10 hover:decoration-black dark:hover:decoration-white transition-all uppercase tracking-widest">
                Contact Now
             </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default Services