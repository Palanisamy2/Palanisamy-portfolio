import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, Github } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      id: 1,
      title: "Tamil Nadu Tourism",
      location: "Full Stack Web App",
      duration: "2023 - 2024",
      description: "Interactive trip planner with dynamic mapping and attraction insights.",
      category: "fullstack",
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveUrl: "https://palanisamy2.github.io/Trip-project/trip/index.html",
    },
    {
      id: 2,
      title: "Digital Portfolio",
      location: "Frontend Excellence",
      duration: "2024 - Present",
      description: "High-performance React portfolio with brutalist and minimalist logic.",
      category: "frontend",
      technologies: ["React", "GSAP", "Tailwind"],
      liveUrl: "https://palanisamy2.github.io/palani-portfolio/portfolio-palanisamy/index.html",
    },
    {
      id: 3,
      title: "Precision Calculator",
      location: "Utility Tool",
      duration: "2023",
      description: "Clean logic-driven calculator supporting complex arithmetic operations.",
      category: "frontend",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://palanisamy2.github.io/claculator-js/calculator/index.html",
    },
    {
      id: 4,
      title: "E-Commerce Suite",
      location: "MERN Prototype",
      duration: "2023 - 2024",
      description: "Scale-ready platform with auth, product management, and cart logic.",
      category: "fullstack",
      technologies: ["React", "Express", "Node"],
      liveUrl: "#",
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const rowVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="projects" className="relative w-full bg-[#fcfcfc] dark:bg-[#0a0a0a] font-sans antialiased overflow-hidden py-24 md:py-32 transition-colors duration-500" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Header Section - Match Image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-24 md:mb-32"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
              <span className="text-xs md:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Projects</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-normal tracking-[-0.03em] text-black dark:text-white leading-[1.1]">
              Explore My Development Journey
            </h2>
          </div>
          <div className="lg:max-w-md pt-8 lg:pt-20">
            <p className="text-base md:text-[1.05rem] leading-relaxed text-gray-500 dark:text-gray-400 font-medium mb-8">
              Over the past 4+ years, I've had the opportunity to build a 
              wide range of digital products, collaborating with various 
              frameworks and tools to bring creative visions to life.
            </p>
            <a href="https://github.com/Palanisamy2" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-black dark:text-white underline underline-offset-8 decoration-gray-200 dark:decoration-white/10 hover:decoration-black dark:hover:decoration-white transition-all">
              Explore GitHub <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Filters - Minimalist subtle tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="flex gap-8 mb-12 border-b border-gray-100 dark:border-white/5 pb-4"
        >
          {['all', 'frontend', 'fullstack'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors ${
                filter === f ? 'text-black dark:text-white' : 'text-gray-400 hover:text-black dark:hover:text-white'
              }`}
            >
              {f === 'all' ? 'All Work' : f}
            </button>
          ))}
        </motion.div>

        {/* Projects List Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                key={project.id}
                layout
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, x: -20 }}
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 items-center border-b border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
              >
                {/* Title & Info */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <h3 className="text-2xl md:text-3xl font-normal text-black dark:text-white group-hover:translate-x-2 transition-transform duration-500">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    <span>{project.location}</span>
                    <span>•</span>
                    <span>{project.duration}</span>
                  </div>
                </div>

                {/* Description snippet */}
                <div className="lg:col-span-5">
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium max-w-md">
                    {project.description}
                  </p>
                </div>

                {/* Technology Tags */}
                <div className="lg:col-span-3 flex justify-start lg:justify-end gap-2 flex-wrap">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  <div className="w-10 h-10 rounded-full border border-gray-100 dark:border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity ml-4 hidden lg:flex">
                    <ArrowUpRight size={18} className="text-black dark:text-white" />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          variants={rowVariants}
          className="mt-20 flex justify-center lg:justify-start"
        >
          <a href="https://github.com/Palanisamy2" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] transform hover:scale-105 transition-all shadow-xl">
             <Github size={18} />
             View All Repository
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects