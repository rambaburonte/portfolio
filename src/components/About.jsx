import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="py-20 px-4">
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
            About Me
          </motion.h2>

          <motion.div 
            variants={itemVariants}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              Aspiring Java Developer with a strong foundation in backend development
              and valuable internship experience at HulkHire Tech. Passionate about
              building secure, efficient applications using Java, Spring Boot, and
              Microservices architecture.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <FaGraduationCap className="text-blue-400 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium">Bachelor of Science in Mechanical Engineering</h4>
                <p className="text-blue-400">Minor in Computer Science and Engineering (AI & ML)</p>
                <p className="text-gray-400">Vaagdevi College of Engineering</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <FaCertificate className="text-green-400 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold">Certification</h3>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium">Programming using Java</h4>
                <p className="text-gray-400">Infosys Springboard</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About