import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Lightbulb } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="text-emerald-400" size={24} />,
      color: "emerald",
      bgGradient: "from-emerald-500/20 to-emerald-900/20 border-emerald-500/30",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "HTML5/CSS3", level: 95 }
      ]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-blue-400" size={24} />,
      color: "blue",
      bgGradient: "from-blue-500/20 to-blue-900/20 border-blue-500/30",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Design Tools",
      icon: <Palette className="text-purple-400" size={24} />,
      color: "purple",
      bgGradient: "from-purple-500/20 to-purple-900/20 border-purple-500/30",
      skills: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 }
      ]
    },
    {
      title: "Languages & Others",
      icon: <Lightbulb className="text-orange-400" size={24} />,
      color: "orange",
      bgGradient: "from-orange-500/20 to-orange-900/20 border-orange-500/30",
      skills: [
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "Git/GitHub", level: 80 },
        { name: "TypeScript", level: 70 }
      ]
    }
  ]

  const additionalSkills = [
    "Problem Solving", "Critical Thinking", "Team Collaboration", 
    "Communication", "Adaptability", "Project Management",
    "Responsive Design", "API Integration", "Version Control",
    "Testing & Debugging", "Performance Optimization", "SEO"
  ]

  return (
    <section id="skills" className="relative w-full bg-[#0d0d0d] font-sans antialiased overflow-hidden py-20 md:py-32 border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10" ref={ref}>
        {/* Central dividing line (desktop only) */}
        <div className="hidden lg:block absolute top-[180px] bottom-0 left-1/2 w-px bg-[#262626] -translate-x-1/2 pointer-events-none">
          {/* Top Crosshair */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#555] font-light text-2xl leading-none">+</div>
        </div>

        {/* HEADER SECTION */}
        <div className="p-8 pb-4 md:p-16 md:px-24 xl:px-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="inline-flex items-center gap-2 border border-[#333] bg-[#141414] rounded-full px-5 py-2 w-max shadow-lg mb-8 mx-auto"
          >
            <span className="text-[#00e599] text-[10px] leading-none">◈</span>
            <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mt-0.5">My Arsenal</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.1 }}
            className="text-[2.5rem] md:text-[3.5rem] xl:text-[4rem] font-bold tracking-tight text-white mb-6 leading-[1.05]"
          >
            Technical <span className="text-[#666] font-normal">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="text-[#888] text-[1.1rem] leading-relaxed mx-auto max-w-2xl"
          >
            I'm passionate about learning new technologies and constantly improving my toolkit. Here is the stack I use to build scalable and robust solutions.
          </motion.p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 md:mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-8 md:p-16 ${categoryIndex % 2 === 0 ? 'lg:pl-24 xl:pl-32 lg:pr-16' : 'lg:pr-24 xl:pr-32 lg:pl-16'} border-t lg:border-t-0 border-[#262626] relative`}>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.2 + (categoryIndex * 0.1) }}
                className="group h-full p-8 md:p-10 rounded-[2rem] bg-[#141414] border border-[#2a2a2a] hover:border-[#444] transition-colors duration-500 relative overflow-hidden"
              >
                {/* Subtle Glow Overlay on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                     style={{ background: `radial-gradient(circle at center, var(--tw-gradient-from), transparent 70%)` }} />

                <div className="flex items-center gap-5 mb-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.bgGradient} border flex justify-center items-center shadow-lg flex-shrink-0`}>
                    {category.icon}
                  </div>
                  <h3 className="text-white text-[1.5rem] font-bold tracking-tight">{category.title}</h3>
                </div>

                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="relative">
                      <div className="flex mb-2">
                        <span className="text-[#ccc] text-lg font-medium tracking-wide">{skill.name}</span>
                      </div>
                      
                      {/* Premium Progress Bar */}
                      <div className="w-full bg-[#222] rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: 0.5 + (skillIndex * 0.1), ease: "easeOut" }}
                          className={`h-full rounded-full bg-gradient-to-r ${
                            category.color === 'emerald' ? 'from-emerald-600 to-emerald-400' :
                            category.color === 'blue' ? 'from-blue-600 to-blue-400' :
                            category.color === 'purple' ? 'from-purple-600 to-purple-400' :
                            'from-orange-600 to-orange-400'
                          } shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>

        {/* ADDITIONAL SKILLS CHIPS */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
          className="p-8 md:p-16 xl:px-32 mt-4"
        >
          <div className="p-8 md:p-12 rounded-[2rem] bg-[#1a1a1a]/50 border border-[#262626] relative overflow-hidden text-center">
            
            <h3 className="text-white text-[1.4rem] font-bold tracking-tight mb-8">Additional Skills & Interests</h3>
            
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 relative z-10">
              {additionalSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="px-5 py-2.5 bg-[#141414] border border-[#333] hover:border-[#00e599]/50 hover:bg-[#00e599]/5 transition-all text-[#aaa] hover:text-white rounded-xl text-sm font-medium cursor-default shadow-sm"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Skills