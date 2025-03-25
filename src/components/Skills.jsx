import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const skillCategories = {
    'Programming Languages': ['Java'],
    'Frameworks & Libraries': [
      'Spring',
      'Spring Boot',
      'Spring Boot Data JPA',
      'Spring Boot Web',
      'JUnit',
      'Mockito',
      'Log4J',
      'SLF4J',
    ],
    'Databases': ['Oracle', 'MySQL'],
    'Web Technologies': ['HTML', 'CSS'],
    'Tools & Platforms': ['GitHub', 'Maven', 'JIRA'],
    'Methodologies': ['Agile', 'Scrum'],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Technical Skills
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, skills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm 
                               text-white px-4 py-2 rounded-full text-sm font-medium
                               border border-blue-500/30 hover:border-blue-500/50
                               transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills