import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye, Filter } from 'lucide-react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      id: 1,
      title: "Tourist Places in Tamil Nadu",
      category: "fullstack",
      description: "A comprehensive website helping travelers plan trips with interactive maps and detailed information about tourist attractions in Tamil Nadu.",
      image: "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Interactive map with tourist attractions",
        "Detailed destination information",
        "User-friendly search functionality",
        "Responsive design"
      ],
      liveUrl: "https://palanisamy2.github.io/Trip-project/trip/index.html",
      githubUrl: "#",
      duration: "Mar 2024 - Present"
    },
    {
      id: 2,
      title: "Personal Portfolio",
      category: "frontend",
      description: "A modern, responsive portfolio website showcasing my skills, projects, certifications, and services with an elegant design.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      features: [
        "Responsive design",
        "Interactive animations",
        "Contact form integration",
        "Modern UI/UX"
      ],
      liveUrl: "https://palanisamy2.github.io/palani-portfolio/portfolio-palanisamy/index.html",
      githubUrl: "#",
      duration: "Oct 2023 - Dec 2023"
    },
    {
      id: 3,
      title: "Calculator App",
      category: "frontend",
      description: "A fully functional calculator with a clean interface, supporting basic arithmetic operations and error handling.",
      image: "https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Basic arithmetic operations",
        "Error handling",
        "Responsive design",
        "Clean user interface"
      ],
      liveUrl: "https://palanisamy2.github.io/claculator-js/calculator/index.html",
      githubUrl: "#",
      duration: "Mar 2024 - Jun 2024"
    },
    {
      id: 4,
      title: "E-commerce Platform",
      category: "fullstack",
      description: "A modern e-commerce platform with user authentication, product management, and payment integration.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      features: [
        "User authentication",
        "Product catalog",
        "Shopping cart",
        "Payment integration"
      ],
      liveUrl: "#",
      githubUrl: "#",
      duration: "Coming Soon"
    }
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'design', label: 'Design' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="projects" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            My Work
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative web solutions.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filterItem) => (
            <motion.button
              key={filterItem.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(filterItem.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                filter === filterItem.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'glass-effect text-dark-600 hover:bg-primary-50'
              }`}
            >
              <Filter size={18} />
              <span>{filterItem.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all"
                      >
                        <Eye size={18} />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30 transition-all"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-dark-800">{project.title}</h3>
                    <span className="text-sm text-dark-500">{project.duration}</span>
                  </div>
                  
                  <p className="text-dark-600 mb-4 line-clamp-3">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-dark-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-dark-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary text-center"
                    >
                      <ExternalLink size={18} className="inline mr-2" />
                      View Project
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 glass-effect rounded-xl text-dark-600 hover:text-primary-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/Palanisamy2"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary-500 text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300"
          >
            <Github size={20} />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Projects