import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      id: 1,
      title: "Tourist Places in Tamil Nadu",
      category: "fullstack",
      description: "A comprehensive website helping travelers plan trips with interactive maps and detailed information about tourist attractions.",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["JavaScript", "PHP", "MySQL"],
      liveUrl: "https://palanisamy2.github.io/Trip-project/trip/index.html",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      category: "frontend",
      description: "A modern, responsive portfolio showcasing my skills, projects, and services with an elegant dark-theme design.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Tailwind CSS"],
      liveUrl: "https://palanisamy2.github.io/palani-portfolio/portfolio-palanisamy/index.html",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Calculator App",
      category: "frontend",
      description: "A fully functional calculator with a clean interface, supporting arithmetic operations and safe error handling.",
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://palanisamy2.github.io/claculator-js/calculator/index.html",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "A modern e-commerce platform with user authentication, product management, and a shopping cart integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Express", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" className="relative w-full bg-[#0d0d0d] font-sans antialiased overflow-hidden py-20 md:py-32 border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* HEADER SECTION */}
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <motion.div variants={itemVariants} className="inline-block border border-[#333] bg-[#141414] rounded-full px-5 py-2 mb-8">
              <span className="text-[#a1a1aa] text-sm font-medium tracking-wide">Featured Projects</span>
            </motion.div>
            
            <motion.h2 variants={itemVariants} className="text-[3rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-6 max-w-5xl mx-auto">
              Bringing visions into <br className="hidden md:block"/> stunning realties.
            </motion.h2>
            
            <motion.p variants={itemVariants} className="text-[#888] text-[1.1rem] md:text-[1.2rem] max-w-2xl mx-auto mb-12">
              Unlock powerful web experiences. Here's a selection of my latest and greatest works across various domains.
            </motion.p>

            {/* FILTERS */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === filterItem.id
                      ? 'bg-white text-black shadow-lg'
                      : 'bg-transparent text-[#888] border border-[#333] hover:border-[#666] hover:text-white'
                  }`}
                >
                  {filterItem.label}
                </button>
              ))}
            </motion.div>
          </div>

          {/* PROJECTS GRID */}
          <div className="mt-12 md:mt-16">
            <AnimatePresence mode="wait">
              <motion.div
                key={filter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    className="group relative flex flex-col h-[520px] rounded-[2rem] bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a] border border-[#334155]/50 overflow-hidden"
                  >
                    {/* Inner soft glow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Project Info */}
                    <div className="p-8 md:p-10 pb-0 z-10 flex flex-col items-start">
                      <h3 className="text-white text-[1.6rem] font-bold tracking-tight mb-4">
                        {project.title}
                      </h3>
                      <p className="text-[#94a3b8] text-base leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.technologies.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-[#1e293b] border border-[#334155] rounded-full text-[#cbd5e1] text-[0.7rem] uppercase tracking-wider font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Image Mockup Area */}
                    <div className="relative mt-auto pt-10 px-6 sm:px-10 h-[260px] w-full flex justify-center">
                      <div className="w-full h-full relative z-10 rounded-t-[1.5rem] overflow-hidden border-t border-x border-[#334155]/50 shadow-[0_0_30px_rgba(0,0,0,0.5)] transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top"
                        />
                        
                        {/* Hover Overlay Buttons */}
                        <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                          <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg"
                          >
                            <Eye size={20} />
                          </a>
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full bg-[#334155] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg border border-[#475569]"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CALL TO ACTION */}
          <motion.div variants={itemVariants} className="mt-20 md:mt-28 flex justify-center">
            <a
              href="https://github.com/Palanisamy2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-[#333] hover:border-[#666] hover:bg-[#141414] text-white rounded-full font-medium transition-all duration-300"
            >
              <Github size={20} />
              <span>Explore My GitHub Repo</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects