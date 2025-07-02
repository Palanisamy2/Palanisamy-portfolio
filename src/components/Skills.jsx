import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Palette, Server, Lightbulb } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 80 },
        { name: "Tailwind CSS", level: 85 }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "secondary",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express.js", level: 70 },
        { name: "PHP", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      title: "Design Tools",
      icon: Palette,
      color: "primary",
      skills: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "Adobe Illustrator", level: 80 },
        { name: "Figma", level: 75 },
        { name: "Adobe XD", level: 70 },
        { name: "UI/UX Design", level: 80 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Lightbulb,
      color: "secondary",
      skills: [
        { name: "Java", level: 80 },
        { name: "C", level: 75 },
        { name: "Python", level: 70 },
        { name: "SQL", level: 85 },
        { name: "Git/GitHub", level: 80 }
      ]
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
    <section id="skills" className="section-padding bg-gradient-to-b from-gray-50 to-white">
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
            My Skills
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-dark-800 mb-6">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-dark-600 max-w-3xl mx-auto">
            I'm passionate about learning new technologies and constantly improving my skills. 
            Here's what I bring to the table.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="glass-effect p-8 rounded-2xl card-hover"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-${category.color}-100 rounded-lg flex items-center justify-center`}>
                  <category.icon className={`text-${category.color}-600`} size={24} />
                </div>
                <h3 className="text-2xl font-bold text-dark-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-dark-700 font-medium">{skill.name}</span>
                      <span className="text-dark-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${
                          category.color === 'primary' 
                            ? 'from-primary-400 to-primary-600' 
                            : 'from-secondary-400 to-secondary-600'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div variants={itemVariants} className="mt-16">
          <div className="glass-effect p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-dark-800 mb-6">Additional Skills & Interests</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving", "Critical Thinking", "Team Collaboration", 
                "Communication", "Adaptability", "Project Management",
                "Responsive Design", "API Integration", "Version Control",
                "Testing & Debugging", "Performance Optimization", "SEO"
              ].map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-dark-700 rounded-full text-sm font-medium cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Skills