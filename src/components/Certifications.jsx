import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { FaJava } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

const Certifications = () => {
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
         
{/* ///////////////////////////////// */}
              <motion.h2 
                          variants={itemVariants}
                          className="text-4xl font-bold text-center mb-16"
                        >
                          Certification
                        </motion.h2>
{/* /////////////////////////////// */}
          <div className="grid md:grid-cols-2 gap-8">
          

            
            
            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
                <FaJava className="text-green-400 text-6xl mr-4" />
               
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium">Programming using Java</h4>
                <p className="text-gray-400">Infosys Springboard</p>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
            >
              <div className="flex items-center mb-6">
          
                <GrMysql className="text-green-400 text-6xl mr-4" />
               
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-medium">SQL</h4>
                <p className="text-gray-400">HackerRank</p>
              </div>
            </motion.div>

          
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications