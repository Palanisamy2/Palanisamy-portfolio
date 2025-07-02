import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, Briefcase, User } from 'lucide-react'

const About = () => {
  const [activeTab, setActiveTab] = useState('education')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'achievements', label: 'Achievements', icon: User }
  ]

  const educationData = [
    {
      degree: "B.Tech - Information Technology",
      institution: "R P Sarathy Institute of Technology, Salem",
      period: "2021 - 2025",
      percentage: "81.7%",
      board: "Anna University"
    },
    {
      degree: "Higher Secondary",
      institution: "SRV Matric Higher Secondary School, Salem",
      period: "2020 - 2021",
      percentage: "87.64%",
      board: "State Board"
    },
    {
      degree: "10th Standard",
      institution: "SRV Matric Higher Secondary School, Salem",
      period: "2018 - 2019",
      percentage: "88%",
      board: "State Board"
    }
  ]

  const certifications = [
    {
      title: "HTML Basic to Advanced Frontend Development",
      provider: "Udemy",
      date: "Sept 9, 2022",
      description: "Comprehensive HTML fundamentals including forms, tables, and media embedding."
    },
    {
      title: "CSS Basic to Advanced Frontend Development",
      provider: "Udemy",
      date: "May 8, 2023",
      description: "Advanced CSS concepts including Flexbox, Grid, and responsive design."
    },
    {
      title: "Full Stack Web Development",
      provider: "Udemy",
      date: "Oct 31, 2023",
      description: "Complete course covering HTML, CSS, JavaScript, and modern frameworks."
    },
    {
      title: "PHP and MySQL Backend Development",
      provider: "Udemy",
      date: "Sept 9, 2023",
      description: "Server-side scripting and database management with PHP and MySQL."
    }
  ]

  const experience = [
    {
      title: "Full Stack Development Intern",
      company: "MARCELLO TECH",
      period: "2023",
      description: "Developed web applications using modern technologies and frameworks."
    },
    {
      title: "Web Design Intern",
      company: "IDB TECHPARK",
      period: "2023",
      description: "Created responsive web designs and user interfaces."
    },
    {
      title: "UI/UX Design Intern",
      company: "FGI Academy",
      period: "2023",
      description: "Designed user-friendly interfaces and improved user experience."
    }
  ]

  const achievements = [
    {
      title: "Handball Winner",
      description: "Zone level championships in 2018, 2019, 2020"
    },
    {
      title: "Football Runner-up",
      description: "Zone level competition in 2023"
    },
    {
      title: "NSS Volunteer",
      description: "Active participation in social service activities"
    },
    {
      title: "Blood Donation",
      description: "Regular donor in various blood donation camps"
    }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'education':
        return (
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">{edu.degree}</h3>
                    <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-dark-500 text-sm mb-2">{edu.board} • {edu.period}</p>
                    <span className="inline-block px-3 py-1 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium">
                      {edu.percentage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'certifications':
        return (
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Award className="text-secondary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">{cert.title}</h3>
                    <p className="text-secondary-600 font-medium mb-1">{cert.provider}</p>
                    <p className="text-dark-500 text-sm mb-2">{cert.date}</p>
                    <p className="text-dark-600">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'experience':
        return (
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">{exp.title}</h3>
                    <p className="text-primary-600 font-medium mb-1">{exp.company}</p>
                    <p className="text-dark-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-dark-600">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      case 'achievements':
        return (
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <User className="text-secondary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-dark-800 mb-2">{achievement.title}</h3>
                    <p className="text-dark-600">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-6"
          >
            Get to Know <span className="gradient-text">More About Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-dark-600 max-w-3xl mx-auto"
          >
            I'm a passionate web developer with expertise in modern technologies and a hunger for learning. 
            I bring fresh perspectives and creativity to every project I work on.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="glass-effect p-8 rounded-2xl text-center sticky top-24">
              <div className="relative mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white shadow-xl"
                >
                  <img
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Palanisamy M"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <h3 className="text-2xl font-bold text-dark-800 mb-2">Palanisamy M</h3>
              <p className="text-primary-600 font-medium mb-4">Full Stack Developer</p>
              <p className="text-dark-600 text-sm mb-6">
                Passionate about creating engaging user experiences with modern web technologies.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full"
              >
                Download Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
            className="lg:col-span-2"
          >
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'glass-effect text-dark-600 hover:bg-primary-50'
                  }`}
                >
                  <tab.icon size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[400px]">
              {renderTabContent()}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About