import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Briefcase, AlertCircle, HeartHandshake, Box, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  }

  const contactCards = [
    {
      icon: Briefcase,
      title: "Project Inquiry",
      description: "Looking to build something great?",
      buttonText: "Let's Talk",
      action: "mailto:palanisamy20044@gmail.com",
      delay: 0.1
    },
    {
      icon: AlertCircle,
      title: "Technical Support",
      description: "Need help with existing software?",
      buttonText: "Get Help",
      action: "mailto:palanisamy20044@gmail.com",
      delay: 0.2
    },
    {
      icon: HeartHandshake,
      title: "Collaborations",
      description: "Partner with me on open source.",
      buttonText: "Collaborate",
      action: "https://github.com/Palanisamy2",
      delay: 0.3
    },
    {
      icon: Mail,
      title: "General Message",
      description: "Just want to say hi? Reach out.",
      buttonText: "Send Email",
      action: "mailto:palanisamy20044@gmail.com",
      delay: 0.4
    }
  ]

  return (
    <section id="contact" className="relative w-full bg-[#0d0d0d] font-sans antialiased overflow-hidden py-20 md:py-32 border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="w-full flex flex-col items-center"
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="text-center mb-16 max-w-2xl">
            <h2 className="text-[3.5rem] md:text-[4.5rem] font-bold tracking-tight text-white leading-none mb-4 md:mb-6">
              Contact
            </h2>
            <p className="text-[#888] text-[1.2rem] md:text-[1.4rem] tracking-wide leading-relaxed">
              Get help from support, <br className="hidden md:block"/> sales, or experts.
            </p>
          </motion.div>

          {/* MAIN WIDE CARD (Product Support / Main CTA) */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ borderColor: '#444' }}
            className="w-full bg-[#121212] border border-[#222] rounded-[1.5rem] p-8 md:p-12 mb-6 group transition-colors duration-300 relative overflow-hidden"
          >
            {/* Subtle radial glow inside card on hover */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-[#ceef00]/5 to-transparent blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative z-10 flex flex-col h-full min-h-[160px]">
              <div className="mb-4">
                <Box size={32} strokeWidth={1.5} className="text-[#ceef00]" />
              </div>
              
              <div className="mt-8">
                <h3 className="text-[1.8rem] font-bold text-white tracking-tight mb-2">My Services</h3>
                <p className="text-[#888] text-[1.1rem]">Get help from an expert developer.</p>
              </div>

              <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <a href="mailto:palanisamy20044@gmail.com" className="bg-white hover:bg-gray-200 text-black px-6 py-2.5 rounded-full font-bold text-sm transition-colors">
                    Start Chat
                  </a>
                  <span className="text-[#666] text-sm hidden md:block">For serious inquiries on paid products</span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] shadow-[0_0_10px_#00e5ff]" />
                  <span className="text-white text-sm font-semibold tracking-wide">All systems operational</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4-GRID SECONDARY CARDS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ borderColor: '#444', y: -4 }}
                className="bg-[#121212] border border-[#222] rounded-[1.5rem] p-8 flex flex-col group transition-all duration-300"
              >
                <div className="mb-8">
                  <card.icon size={28} strokeWidth={1.5} className="text-white group-hover:text-[#ceef00] transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-2">{card.title}</h3>
                <p className="text-[#888] text-[0.95rem] leading-relaxed mb-10 flex-grow">
                  {card.description}
                </p>

                <a 
                  href={card.action}
                  className="inline-flex mt-auto items-center justify-center bg-[#1a1a1a] hover:bg-white hover:text-black border border-[#2a2a2a] text-[#ddd] px-5 py-2 rounded-full font-medium text-sm transition-all duration-300 self-start"
                >
                  {card.buttonText}
                </a>
              </motion.div>
            ))}
          </div>

          {/* Social Links Footer within Contact Section */}
          <motion.div variants={itemVariants} className="mt-20 pt-10 border-t border-[#222] w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-[#666] text-sm">
              &copy; {new Date().getFullYear()} Palanisamy M. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <a href="https://github.com/Palanisamy2" className="text-[#666] hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/palanisamy-m-23a5a72b7/" className="text-[#666] hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-[#666] hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  )
}

export default Contact