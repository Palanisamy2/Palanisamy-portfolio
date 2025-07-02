import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Smartphone, Globe, Zap } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces using modern frameworks like React, Vue, and Angular.",
      features: [
        "Responsive Web Design",
        "Single Page Applications",
        "Progressive Web Apps",
        "Cross-browser Compatibility"
      ],
      color: "primary"
    },
    {
      icon: Server,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs using Node.js, Express, and various databases.",
      features: [
        "RESTful API Development",
        "Database Design & Management",
        "Authentication & Security",
        "Performance Optimization"
      ],
      color: "secondary"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user interfaces that provide excellent user experiences.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Wireframing",
        "Design Systems"
      ],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Full Stack Development",
      description: "End-to-end web application development from concept to deployment with modern technologies.",
      features: [
        "Complete Web Solutions",
        "Technology Consulting",
        "Project Architecture",
        "Deployment & Maintenance"
      ],
      color: "secondary"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Creating mobile-optimized experiences that work seamlessly across all devices and screen sizes.",
      features: [
        "Mobile Optimization",
        "Touch-friendly Interfaces",
        "Performance Optimization",
        "App-like Experiences"
      ],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing websites and applications for speed, SEO, and overall performance.",
      features: [
        "Speed Optimization",
        "SEO Implementation",
        "Code Splitting",
        "Caching Strategies"
      ],
      color: "secondary"
    }
  ]

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
    <section id="services" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium mb-4">
            What I Offer
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            I provide comprehensive web development services to help bring your ideas to life 
            with modern technologies and best practices.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-effect p-8 rounded-2xl group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-${service.color}-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`text-${service.color}-600`} size={32} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-dark-800 mb-4 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-dark-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3 text-sm text-dark-600">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${service.color}-500/5 to-${service.color}-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div variants={itemVariants} className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-dark-800 mb-4">My Development Process</h3>
            <p className="text-dark-600 max-w-2xl mx-auto">
              I follow a structured approach to ensure quality deliverables and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your requirements and project goals"
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating detailed project roadmap and timeline"
              },
              {
                step: "03",
                title: "Development",
                description: "Building your solution with modern technologies"
              },
              {
                step: "04",
                title: "Delivery",
                description: "Testing, deployment, and ongoing support"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-dark-800 mb-2">{process.title}</h4>
                <p className="text-dark-600 text-sm">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-dark-800 mb-4">Ready to Start Your Project?</h3>
          <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your ideas and create something amazing together. 
            I'm here to help bring your vision to life.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-block"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Services