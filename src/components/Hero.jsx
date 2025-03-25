import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { Parallax } from 'react-parallax'

const Hero = () => {
  return (
    <Parallax
      blur={0}
      bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072"
      bgImageAlt="hero background"
      strength={200}
      className="min-h-screen"
    >
      <div className="absolute inset-0 bg-black opacity-60" />
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-4">
              {/* Welcome to my portfolio */}
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Rambabu Ronte
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 h-20">
              <TypeAnimation
                sequence={[
                  'Java Developer',
                  2000,
                  'Backend Specialist',
                  2000,
                  'Spring Boot Expert',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            <p>
              Transforming ideas into robust, scalable backend solutions with Java and Spring Boot.
              Passionate about clean code and microservices architecture.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="https://github.com/rambaburonte"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/rambaburonte"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </motion.a>
            </div>

            <div className="flex justify-center space-x-6">
              <Link
                to="about"
                smooth={true}
                duration={500}
                style={{cursor:'pointer'}}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-block transition-colors duration-300"
              >
                Learn More
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                style={{cursor:'pointer'}}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-full inline-block transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white animate-bounce cursor-pointer"
          >
            <FaArrowDown size={24} />
          </Link>
        </motion.div>
      </section>
    </Parallax>
  )
}

export default Hero