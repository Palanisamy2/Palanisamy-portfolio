import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Instagram, ArrowRight, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#0a0a0a] text-white pt-24 pb-12 transition-colors duration-500 overflow-hidden px-6 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top Header Section - Matches provided image */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-24 md:mb-32">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-normal tracking-[-0.03em] leading-tight text-white mb-10 md:mb-0"
          >
            Let's Connect <br/> There
          </motion.h2>

          {/* Hire Me Now Pill Button */}
          <motion.a 
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex items-center bg-[#1a1a1a] rounded-full p-2 pr-10 border border-white/5 shadow-2xl transition-all"
          >
            <div className="w-16 h-16 rounded-full bg-[#222] flex items-center justify-center mr-6 group-hover:bg-white group-hover:text-black transition-colors duration-500">
               <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </div>
            <span className="text-xl font-medium tracking-tight">Hire Me Now!</span>
          </motion.a>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-20" />

        {/* Main Footer Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-10 mb-24">
           
           {/* Column 1: Logo & Socials */}
           <div className="lg:col-span-4 flex flex-col items-start gap-8">
              <div className="flex items-center gap-2">
                 <div className="w-2.5 h-2.5 rounded-full bg-white" />
                 <span className="text-3xl font-normal tracking-tight">Palani</span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                 Developer and Designer focus on high-performance logic and minimalist 
                 aesthetic. Engineering obsessions for global digital products.
              </p>
              <div className="flex items-center gap-6">
                 {[
                   { icon: <Github size={20} />, url: "https://github.com/Palanisamy2" },
                   { icon: <Linkedin size={20} />, url: "https://www.linkedin.com/in/palanisamy-m-23a5a72b7/" },
                   { icon: <Twitter size={20} />, url: "#" },
                   { icon: <Instagram size={20} />, url: "#" }
                 ].map((social, i) => (
                   <a key={i} href={social.url} className="text-gray-600 hover:text-white transition-colors">
                      {social.icon}
                   </a>
                 ))}
              </div>
           </div>

           {/* Column 2: Address */}
           <div className="lg:col-span-3 flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Address</span>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Tamil Nadu, India <br/>
                Digital Space 57292, Remote
              </p>
           </div>

           {/* Column 3: Email */}
           <div className="lg:col-span-3 flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Email Address</span>
              <div className="flex flex-col gap-2">
                 <a href="mailto:palanisamy20044@gmail.com" className="text-sm text-gray-500 hover:text-white transition-colors">palanisamy20044@gmail.com</a>
                 <a href="mailto:palanisamy@portfolio.dev" className="text-sm text-gray-500 hover:text-white transition-colors">palanisamy@work.dev</a>
              </div>
           </div>

           {/* Column 4: Phone */}
           <div className="lg:col-span-2 flex flex-col gap-6">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-600">Phone Number</span>
              <div className="flex flex-col gap-2">
                 <span className="text-sm text-gray-500">+91 131 4564 232</span>
                 <span className="text-sm text-gray-500">+91 82124720342</span>
              </div>
           </div>
        </div>

        {/* Bottom Navigation Row */}
        <div className="flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/5 gap-8">
           <div className="flex gap-10">
              {['Projects', 'Gallery', 'Insights', 'About Me'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-xs font-bold uppercase tracking-widest text-gray-600 hover:text-white transition-colors">
                  {link}
                </a>
              ))}
           </div>
           
           <motion.a 
             href="#home"
             className="flex items-center gap-2 group text-xs font-bold uppercase tracking-[0.2em] text-gray-600 hover:text-white transition-all"
           >
              Back To Top <ArrowUpRight size={14} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
           </motion.a>
        </div>

        {/* Copyright */}
        <div className="flex justify-center pt-8 border-t border-white/5">
           <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-700">
              All rights reserved &copy; {new Date().getFullYear()} @Palani
           </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer