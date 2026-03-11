import React, { useState, useEffect } from 'react'

const Footer = () => {
  const [time, setTime] = useState('')

  useEffect(() => {
    // Basic clock for the bottom right corner
    const updateTime = () => {
      const now = new Date()
      const formattedTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      })
      setTime(`Tamil Nadu ${formattedTime}`)
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <footer className="relative w-full bg-[#050505] text-white pt-10 pb-6 px-4 md:px-10 overflow-hidden min-h-[600px] flex flex-col justify-between items-center z-0 border-t border-[#111]">
      
      {/* Abstract Glowing Background Shape */}
      <div className="absolute bottom-0 inset-x-0 h-full w-full pointer-events-none z-0 flex justify-center items-end opacity-60">
        <div className="w-[120%] h-[70%] max-w-[1200px] bg-gradient-to-t from-[#ceef00] via-[#009fb2] to-transparent bg-opacity-40 blur-[120px] rounded-t-full transform translate-y-1/4 scale-y-150" />
      </div>

      <div className="w-full max-w-[1400px] relative z-10 flex flex-col h-full flex-grow">
        
        {/* TOP ROW - Social Links & Email */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#222] pb-6 mb-12 gap-6">
          <div className="flex items-center gap-6">
            <a href="https://github.com/Palanisamy2" className="text-[#888] font-semibold text-sm hover:text-white transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/palanisamy-m-23a5a72b7/" className="text-[#888] font-semibold text-sm hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="text-[#888] font-semibold text-sm hover:text-white transition-colors">X</a>
            <a href="#" className="text-[#888] font-semibold text-sm hover:text-white transition-colors">Instagram</a>
          </div>
          <a href="mailto:palanisamy20044@gmail.com" className="text-[#888] font-medium text-sm hover:text-white transition-colors">
            palanisamy20044@gmail.com
          </a>
        </div>

        {/* MIDDLE SECTION - Logo, Nav Stack, Description */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 w-full mb-20 md:mb-32">
          
          {/* Logo */}
          <div className="w-full md:w-1/3">
            <a href="#home" className="flex items-center gap-1 group">
              <span className="text-white font-bold text-2xl tracking-tight">Palani</span>
              <span className="text-[#ceef00] text-sm mb-3">&reg;</span>
            </a>
          </div>

          {/* Navigation Stack */}
          <div className="w-full md:w-1/3 flex flex-col gap-1 items-start md:items-center">
            <a href="#home" className="text-[#ddd] text-2xl hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-[#666] text-2xl hover:text-white transition-colors">Work</a>
            <a href="#about" className="text-[#666] text-2xl hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-[#666] text-2xl hover:text-white transition-colors">Contact</a>
          </div>

          {/* Short Bio / Location text */}
          <div className="w-full md:w-1/3 flex md:justify-end">
            <p className="text-[#666] text-sm md:text-right max-w-[200px] leading-relaxed">
              Developer based in Tamil Nadu, We engineer obsessions.
            </p>
          </div>
        </div>

      </div>

      {/* HUGE TYPOGRAPHY & FOOTER BOTTOM */}
      <div className="w-full relative z-10 flex flex-col justify-end mt-auto">
        <div className="w-full flex justify-center w-full overflow-hidden leading-none select-none mb-10 md:mb-16">
          <h2 className="text-[18vw] md:text-[14vw] font-bold text-white tracking-tighter mix-blend-overlay">
            Get in Touch
          </h2>
        </div>

        <div className="w-full max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-center text-[#888] font-medium text-xs uppercase tracking-widest px-4 gap-4">
          <span className="text-center sm:text-left">Palani &ndash; Portfolio &copy; {new Date().getFullYear()}</span>
          <span className="text-center sm:text-right font-mono text-[10px] sm:text-xs">
            {time || 'Loading time...'}
          </span>
        </div>
      </div>
      
    </footer>
  )
}

export default Footer