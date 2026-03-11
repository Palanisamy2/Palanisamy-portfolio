import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-4 md:pt-6 pointer-events-none"
    >
      {/* Liquid Glass Pill Container */}
      <motion.div 
        className={`pointer-events-auto flex items-center justify-between px-3 md:px-4 py-2.5 rounded-full backdrop-blur-2xl transition-all duration-500 w-full max-w-6xl ${
          scrolled 
            ? 'bg-[#141414]/70 border border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
            : 'bg-[#1a1a1a]/40 border border-white/10 shadow-lg'
        }`}
      >
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-2 pl-2 lg:pl-4 group">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#ceef00] group-hover:scale-110 transition-transform" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M11 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H11C16.5228 22 21 17.5228 21 12C21 6.47715 16.5228 2 11 2ZM10 6C13.3137 6 16 8.68629 16 12C16 15.3137 13.3137 18 10 18V6Z" fill="currentColor"/>
            </svg>
            <span className="text-white font-bold tracking-widest uppercase text-sm hidden sm:block mt-0.5">PALANI</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-3">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[#aaaaaa] hover:text-white hover:bg-white/5 px-4 py-2 rounded-full font-medium text-[0.95rem] transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* RIGHT ACTIONS */}
        <div className="hidden md:flex items-center gap-3 pr-1">
          {/* Outline Button Effect */}
          <button 
            onClick={toggleTheme} 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-[#aaaaaa] hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          
          {/* Solid Call-to-Action Button */}
          <a
            href="#contact"
            className="px-6 py-2.5 bg-[#ceef00] hover:bg-white text-black font-bold text-sm tracking-wide rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <div className="md:hidden flex items-center gap-2 pr-2">
           <button onClick={toggleTheme} className="text-[#aaa] hover:text-white p-2">
             {isDark ? <Sun size={20} /> : <Moon size={20} />}
           </button>
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="text-white p-2"
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
        </div>
      </motion.div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-[#141414]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl md:hidden pointer-events-auto flex flex-col gap-4"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium border-b border-white/5 pb-4 last:border-0"
              >
                {item.name}
              </a>
            ))}
            
            <div className="pt-4 mt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full block text-center px-6 py-3.5 bg-[#ceef00] text-black font-bold text-sm tracking-wider rounded-full"
              >
                LET'S TALK
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar