import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import skillBlue from './assert/image/skill_blue.png'
import skillRed from './assert/image/skill_red.png'
import skillGreen from './assert/image/skill_green.png'
import skillYellow from './assert/image/skill_yellow.png'

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section id="skills" className="relative w-full bg-[#fcfcfc] dark:bg-[#0a0a0a] font-sans antialiased overflow-hidden py-24 md:py-32 transition-colors duration-500" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 lg:px-24 relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col items-start gap-10 mb-20 md:mb-24"
        >
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-black dark:bg-white" />
            <span className="text-xs md:text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-[0.2em]">Technical Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-normal tracking-[-0.03em] text-black dark:text-white leading-[1.1]">
            Expertise & <br/> Modern Stack
          </h2>
        </motion.div>

        {/* Bento Grid Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 md:auto-rows-[140px]"
        >
          {/* Card 1: Frontend (Large, Spans 3 cols, 3 rows) */}
          <motion.div variants={itemVariants} className="md:col-span-3 md:row-span-3 bg-white dark:bg-[#111] rounded-[2.5rem] p-10 border border-gray-100 dark:border-white/5 shadow-sm group relative overflow-hidden flex flex-col justify-between">
             <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 block">Professional</span>
                <h3 className="text-3xl font-normal text-black dark:text-white mb-4">Frontend Development</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["React.js", "Tailwind CSS", "JavaScript", "TypeScript"].map(s => (
                    <span key={s} className="px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full text-[11px] font-medium text-gray-500 dark:text-gray-400">{s}</span>
                  ))}
                </div>
             </div>
             <div className="absolute top-1/2 -right-16 -translate-y-1/2 w-64 h-64 opacity-20 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <img src={skillBlue} alt="frontend" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
             </div>
          </motion.div>

          {/* Card 2: UI/UX (Spans 2 cols, 2 rows) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 bg-white dark:bg-[#111] rounded-[2.5rem] p-10 border border-gray-100 dark:border-white/5 shadow-sm group relative overflow-hidden flex flex-col justify-between">
             <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 block">Creative Architecture</span>
                <h3 className="text-2xl font-normal text-black dark:text-white mb-2">UI/UX Design</h3>
                <p className="text-[11px] text-gray-400 dark:text-gray-500 font-medium tracking-tight">Figma, Photoshop, Adobe XD, Branding</p>
             </div>
             <div className="absolute -right-8 -bottom-8 w-40 h-40 opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <img src={skillGreen} alt="uiux" className="w-full h-full object-contain group-hover:rotate-12 transition-transform duration-700" />
             </div>
          </motion.div>

          {/* Card 3: Backend (Wide, Spans 4 cols, 2 rows) */}
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-2 bg-white dark:bg-[#111] rounded-[2.5rem] p-10 border border-gray-100 dark:border-white/5 shadow-sm group relative overflow-hidden flex items-center gap-10">
             <div className="w-1/2 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4 block">Scalable Systems</span>
                <h3 className="text-4xl font-normal text-black dark:text-white mb-6 leading-tight">Backend Engineering</h3>
                <div className="flex flex-wrap gap-3">
                  {["Node.js", "Express", "MySQL", "PostgreSQL"].map(s => (
                    <span key={s} className="text-[10px] font-bold uppercase tracking-tighter text-black dark:text-white border-b border-black/10 dark:border-white/10 pb-0.5">{s}</span>
                  ))}
                </div>
             </div>
             <div className="absolute right-0 bottom-0 w-[240px] h-[240px] group-hover:scale-105 transition-transform duration-700">
                <img src={skillRed} alt="backend" className="w-full h-full object-contain" />
             </div>
          </motion.div>

          {/* Card 4: Tools (Small Square, Spans 2 cols, 2 rows) */}
          <motion.div variants={itemVariants} className="md:col-span-2 md:row-span-2 bg-black dark:bg-white rounded-[2.5rem] p-10 flex flex-col justify-between group">
             <h3 className="text-2xl font-normal text-white dark:text-black">DevOps & <br/> Modern Tools</h3>
             <div className="flex justify-between items-end">
                <div className="flex flex-col gap-1.5 leading-none">
                   <span className="text-[9px] font-bold text-white/50 dark:text-black/50 tracking-widest">GIT / GITHUB</span>
                   <span className="text-[9px] font-bold text-white/50 dark:text-black/50 tracking-widest">DOCKERHUB</span>
                   <span className="text-[9px] font-bold text-white/50 dark:text-black/50 tracking-widest">VITE / GSAP</span>
                </div>
                <img src={skillYellow} alt="tech" className="w-16 h-16 object-contain opacity-50 group-hover:opacity-100 transition-opacity" />
             </div>
          </motion.div>

          {/* Card 5: Languages (Horizontal Wide, Spans 4 cols, 1 row) */}
          <motion.div variants={itemVariants} className="md:col-span-4 md:row-span-1 bg-white dark:bg-[#111] rounded-[2rem] px-10 border border-gray-100 dark:border-white/5 shadow-sm flex items-center justify-between group">
             <div className="flex items-center gap-6">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-black dark:text-white">Expert Languages</span>
                <div className="w-8 h-[1px] bg-gray-200 dark:bg-white/10" />
             </div>
             <div className="flex gap-8 group-hover:gap-12 transition-all duration-500">
                {["JAVA", "SQL", "PHP", "TYPESCRIPT"].map(lang => (
                   <span key={lang} className="text-[10px] font-black tracking-widest text-gray-300 dark:text-gray-700 group-hover:text-black dark:group-hover:text-white transition-colors uppercase whitespace-nowrap">
                      {lang}
                   </span>
                ))}
             </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default Skills