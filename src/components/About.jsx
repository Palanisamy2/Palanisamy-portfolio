import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Hexagon, Layers, Activity, Award, Network, Star } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('experience')
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  const tabs = [
    { id: 'experience', label: 'Work Experience' },
    { id: 'education', label: 'My Education' },
    { id: 'certifications', label: 'Certifications' }
  ]

  const dataMap = {
    experience: [
      {
        leftTitle: "MARCELLO TECH",
        leftSubtitle: "[ 2023 ]",
        leftIcon: <Hexagon className="text-purple-400" size={24} />,
        leftColor: "from-purple-500/20 to-purple-900/20 border-purple-500/30",
        rightTitle: "Full Stack Development Intern",
        rightDesc: "Developed web applications using modern technologies and frameworks. Focused on creating responsive and scalable solutions.",
        rightExtra: "Modern web stack architecture"
      },
      {
        leftTitle: "IDB TECHPARK",
        leftSubtitle: "[ 2023 ]",
        leftIcon: <Layers className="text-orange-400" size={24} />,
        leftColor: "from-orange-500/20 to-orange-900/20 border-orange-500/30",
        rightTitle: "Web Design Intern",
        rightDesc: "Created responsive web designs and user interfaces. Improved usability across large scale products, built design systems.",
        rightExtra: "Responsive design & usability"
      },
      {
        leftTitle: "FGI Academy",
        leftSubtitle: "[ 2023 ]",
        leftIcon: <Activity className="text-blue-400" size={24} />,
        leftColor: "from-blue-500/20 to-blue-900/20 border-blue-500/30",
        rightTitle: "UI/UX Design Intern",
        rightDesc: "Designed user-friendly interfaces and improved user experience. Created visual language foundations, refined typography.",
        rightExtra: "UI/UX & Visual language"
      }
    ],
    education: [
      {
        leftTitle: "R P Sarathy Institute",
        leftSubtitle: "[ 2021 - 2025 ]",
        leftIcon: <Award className="text-emerald-400" size={24} />,
        leftColor: "from-emerald-500/20 to-emerald-900/20 border-emerald-500/30",
        rightTitle: "B.Tech - Information Technology",
        rightDesc: "Anna University • 81.7%. Developed a strong foundation in computer science principles and software engineering practices.",
      },
      {
        leftTitle: "SRV Matric Higher Sec",
        leftSubtitle: "[ 2020 - 2021 ]",
        leftIcon: <Network className="text-rose-400" size={24} />,
        leftColor: "from-rose-500/20 to-rose-900/20 border-rose-500/30",
        rightTitle: "Higher Secondary",
        rightDesc: "State Board • 87.64%. Focus on core sciences and mathematics, building analytical and problem-solving skills.",
      },
      {
        leftTitle: "SRV Matric Higher Sec",
        leftSubtitle: "[ 2018 - 2019 ]",
        leftIcon: <Star className="text-yellow-400" size={24} />,
        leftColor: "from-yellow-500/20 to-yellow-900/20 border-yellow-500/30",
        rightTitle: "10th Standard",
        rightDesc: "State Board • 88%. General school curriculum with an emphasis on continuous learning and extracurriculars.",
      }
    ],
    certifications: [
      {
        leftTitle: "Udemy",
        leftSubtitle: "[ Oct 31, 2023 ]",
        leftIcon: <Layers className="text-purple-400" size={24} />,
        leftColor: "from-purple-500/20 to-purple-900/20 border-purple-500/30",
        rightTitle: "Full Stack Web Development",
        rightDesc: "Complete course covering HTML, CSS, JavaScript, and modern frameworks. Gained hands-on experience by building projects.",
      },
      {
        leftTitle: "Udemy",
        leftSubtitle: "[ Sept 9, 2023 ]",
        leftIcon: <Activity className="text-sky-400" size={24} />,
        leftColor: "from-sky-500/20 to-sky-900/20 border-sky-500/30",
        rightTitle: "PostgreSQL and MySQL Backend",
        rightDesc: "Server-side scripting and database management with PostgreSQL and MySQL. Mastered complex queries and relational database design.",
      },
      {
        leftTitle: "Udemy",
        leftSubtitle: "[ May 8, 2023 ]",
        leftIcon: <Hexagon className="text-amber-400" size={24} />,
        leftColor: "from-amber-500/20 to-amber-900/20 border-amber-500/30",
        rightTitle: "CSS Basic to Advanced",
        rightDesc: "Advanced CSS concepts including Flexbox, Grid, and responsive design methodologies for modern web applications.",
      }
    ]
  }

  const currentData = dataMap[activeTab]

  return (
    <section id="about" className="relative w-full bg-[#0d0d0d] font-sans antialiased overflow-hidden py-20 md:py-32 border-b border-[#222]">
      <div className="max-w-[1400px] w-full mx-auto px-6 md:px-12 xl:px-20 relative z-10" ref={ref}>
        {/* Central dividing line (desktop only) */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#262626] -translate-x-1/2 pointer-events-none">
          {/* Top Crosshair */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[#555] font-light text-2xl leading-none">+</div>
          {/* Bottom Crosshair */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 text-[#555] font-light text-2xl leading-none">+</div>
        </div>

        {/* HEADER ROW */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Header Left Pane */}
          <div className="p-8 md:p-16 md:pl-24 xl:pl-32 xl:pr-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              className="inline-flex items-center gap-2 border border-[#333] bg-[#141414] rounded-full px-5 py-2 w-max shadow-lg mb-8 md:mb-0"
            >
              <span className="text-[#00e599] text-[10px] leading-none">◈</span>
              <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mt-0.5">My Story</span>
            </motion.div>
          </div>

          {/* Header Right Pane */}
          <div className="p-8 pb-4 md:p-16 md:pt-16 md:pr-24 xl:pl-24 xl:pr-32 pt-0">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-tight text-white mb-10 leading-[1.05]"
            >
              The Story Behind My Work <span className="text-[#666] font-normal">and the Experiences That Shaped My Craft</span>
            </motion.h2>

            {/* Toggle Tabs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 p-1.5 bg-[#141414] border border-[#262626] rounded-2xl w-max shadow-xl"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#00e599] text-black shadow-[0_0_20px_rgba(0,229,153,0.2)]'
                      : 'text-gray-400 hover:text-white hover:bg-[#222]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ITEMS LIST */}
        <div className="pb-16 md:pb-24 pt-8 md:pt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col"
            >
              {currentData.map((item, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 relative group mb-16 md:mb-0">
                  {/* Left Pane (Company/School Info) */}
                  <div className="px-8 pb-4 md:py-16 md:pl-24 xl:pl-32 xl:pr-24 flex items-start md:items-center">
                    <div className="flex items-center gap-5 w-full">
                      {/* Logo Placeholder */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.leftColor} border flex justify-center items-center flex-shrink-0 shadow-lg`}>
                        {item.leftIcon}
                      </div>
                      <div>
                        <h3 className="text-[#f4f4f4] text-[1.35rem] font-bold mb-1 tracking-tight">{item.leftTitle}</h3>
                        <p className="text-[#666] text-sm font-mono tracking-wider">{item.leftSubtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Pane (Role/Degree Info) */}
                  <div className="px-8 md:py-16 md:pr-24 xl:pl-24 xl:pr-32 relative">
                    {/* Vertical Timeline segment connecting dots (only show if not the last item) */}
                    {index !== currentData.length - 1 && (
                      <div className="hidden md:block absolute top-[88px] bottom-[-88px] left-[39px] w-px bg-[#262626] z-0" />
                    )}

                    <div className="relative z-10 flex ml-0 md:ml-0 pt-2 md:pt-0">
                      {/* Timeline Dot with Glow */}
                      <div className="hidden md:block mr-8 relative pt-2 flex-shrink-0">
                        <div className="w-3 h-3 bg-[#00e599] rounded-full shadow-[0_0_12px_rgba(0,229,153,0.8)] z-10 relative" />
                        <div className="absolute top-[3px] left-[-5px] w-[22px] h-[22px] border border-[#00e599]/30 rounded-full z-0" />
                      </div>

                      {/* Content */}
                      <div>
                        {/* Mobile Dot (visible only on small screens) */}
                        <div className="md:hidden flex items-center gap-3 mb-3">
                           <div className="relative">
                             <div className="w-2.5 h-2.5 bg-[#00e599] rounded-full shadow-[0_0_10px_rgba(0,229,153,0.8)]" />
                             <div className="absolute -top-1 -left-1 w-[18px] h-[18px] border border-[#00e599]/30 rounded-full" />
                           </div>
                           <h3 className="text-white text-[1.4rem] font-bold leading-tight">{item.rightTitle}</h3>
                        </div>

                        <h3 className="hidden md:block text-white text-[1.5rem] font-bold mb-3 tracking-tight leading-tight">
                          {item.rightTitle}
                        </h3>
                        <p className="text-[#888] text-[1.05rem] leading-relaxed mb-5 max-w-[90%] md:max-w-[480px]">
                          {item.rightDesc}
                        </p>

                        {item.rightExtra && (
                          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#2a2a2a] bg-[#141414]/80 backdrop-blur-sm">
                            <span className="text-[#00e599]">
                              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                            </span>
                            <span className="text-[#a1a1aa] text-xs font-mono tracking-wide">{item.rightExtra}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default About