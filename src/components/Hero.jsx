import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50"></div>
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                👋 Welcome to my portfolio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-dark-800 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Palanisamy M</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-xl sm:text-2xl text-dark-600 font-medium mb-4">
                <span className="typing-animation">Full Stack Developer</span>
              </div>
              <p className="text-lg text-dark-500 max-w-2xl">
                Passionate about creating engaging user experiences with modern web technologies. 
                Specializing in React, Node.js, and UI/UX design.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary inline-flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-primary-500 text-primary-600 rounded-xl font-medium hover:bg-primary-50 transition-all duration-300"
              >
                <Download size={20} />
                <span>Download CV</span>
              </motion.button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex space-x-6 justify-center lg:justify-start">
              {[
                { icon: Github, href: "https://github.com/Palanisamy2", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/palanisamy-m-23a5a72b7/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:your.email@example.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-dark-600 hover:text-primary-600"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400 to-secondary-400 opacity-20 blur-xl"
              ></motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Palanisamy M"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-dark-400 hover:text-primary-600 transition-colors"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown size={24} />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero