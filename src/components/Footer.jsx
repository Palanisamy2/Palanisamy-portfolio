import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Services', href: '#services' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Frontend Development', href: '#services' },
      { name: 'Backend Development', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Full Stack Development', href: '#services' }
    ],
    connect: [
      { name: 'GitHub', href: 'https://github.com/Palanisamy2' },
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/palanisamy-m-23a5a72b7/' },
      { name: 'Email', href: 'mailto:palanisamy.dev@gmail.com' },
      { name: 'Resume', href: '#' }
    ]
  }

  return (
    <footer className="bg-dark-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-display font-bold gradient-text mb-4">
                  Palanisamy M
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Full Stack Developer passionate about creating innovative web solutions 
                  that make a difference. Let's build something amazing together.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <span>Made with</span>
                  <Heart size={16} className="text-red-500 animate-pulse" />
                  <span>in Tamil Nadu, India</span>
                </div>
              </motion.div>
            </div>

            {/* Navigation Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Navigation</h4>
                <ul className="space-y-3">
                  {footerLinks.navigation.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Services</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Connect Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold mb-6">Connect</h4>
                <ul className="space-y-3">
                  {footerLinks.connect.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : '_self'}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                        whileHover={{ x: 5 }}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                © {new Date().getFullYear()} Palanisamy M. All rights reserved.
              </motion.p>
              
              <div className="flex items-center space-x-6">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300"
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-400 hover:text-primary-400 text-sm transition-colors duration-300"
                >
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary-500 hover:bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer