import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaBriefcase, FaCheck } from 'react-icons/fa'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const experiences = [
    {
      title: "Full Stack Web Developer",
      company: "General Logic Pvt Ltd",
      duration: "September 2025 - Present",
      achievements: [
        "Developed and maintained a full-stack Conference Management System using ReactJS, JavaScript, HTML, and CSS on the frontend, with Java, Spring Boot, and MySQL on the backend",
        "Designed and implemented RESTful APIs using Spring Boot for user registration, event management, and participant workflows",
        "Integrated multiple payment gateways (Stripe, PayPal, Razorpay) end-to-end, covering backend transaction processing and frontend validation",
        "Optimized MySQL queries for efficient data retrieval and transaction management",
        "Built responsive, semantic UI components and debugged issues across the full stack",
        "Collaborated with the team in an Agile development environment"
      ]
    },
    {
      title: "Java Developer Intern",
      company: "HulkHire Tech",
      duration: "2 months",
      achievements: [
        "Designed and developed scalable backend services using Java, Spring Boot, and Microservices",
        "Integrated third-party APIs securely and efficiently",
        "Implemented RESTful APIs following industry best practices",
        "Developed payment processing modules with Stripe integration",
        "Implemented authentication mechanisms and encryption for security compliance",
        "Utilized AWS services for deployment and infrastructure management",
        "Conducted unit testing with JUnit and Mockito",
        "Applied design patterns for modular and maintainable applications"
      ]
    }
  ]

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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="py-20 px-4 bg-gray-800/30">
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
            Experience
          </motion.h2>

          {experiences.map((exp, expIndex) => (
            <motion.div 
              key={expIndex}
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-8">
                <div className="bg-blue-600/20 p-4 rounded-full mr-6">
                  <FaBriefcase className="text-blue-400 text-3xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{exp.title}</h3>
                  <p className="text-blue-400 mt-1">{exp.company} | {exp.duration}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {exp.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 bg-gray-700/30 rounded-lg p-4"
                  >
                    <span className="flex-shrink-0 bg-blue-600/20 p-2 rounded-full">
                      <FaCheck className="text-blue-400" />
                    </span>
                    <span className="text-gray-300">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience