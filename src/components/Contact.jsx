import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const contactItems = [
    {
      icon: FaPhone,
      href: "tel:+919347818857",
      text: "+91 9347818857",
      color: "from-green-600/20 to-emerald-600/20",
      borderColor: "border-green-500/30 hover:border-green-500/50"
    },
    {
      icon: FaEnvelope,
      href: "mailto:ronterambabu@gmail.com",
      text: "ronterambabu@gmail.com",
      color: "from-blue-600/20 to-cyan-600/20",
      borderColor: "border-blue-500/30 hover:border-blue-500/50"
    },
    {
      icon: FaGithub,
      href: "https://github.com/rambaburonte",
      text: "GitHub Profile",
      color: "from-purple-600/20 to-pink-600/20",
      borderColor: "border-purple-500/30 hover:border-purple-500/50"
    },
    {
      icon: FaLinkedin,
      href: "https://linkedin.com/in/rambaburonte",
      text: "LinkedIn Profile",
      color: "from-indigo-600/20 to-blue-600/20",
      borderColor: "border-indigo-500/30 hover:border-indigo-500/50"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="contact" className="py-20 px-4 bg-gray-800/30">
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
            Get In Touch
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {contactItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.icon !== FaPhone && item.icon !== FaEnvelope ? "_blank" : undefined}
                rel={item.icon !== FaPhone && item.icon !== FaEnvelope ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center space-x-4 bg-gradient-to-r ${item.color} 
                           backdrop-blur-sm rounded-2xl p-6 shadow-xl border ${item.borderColor}
                           transition-all duration-300`}
              >
                <div className="bg-gray-900/50 p-4 rounded-full">
                  <item.icon className="text-white text-2xl" />
                </div>
                <span className="text-white text-lg">{item.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact