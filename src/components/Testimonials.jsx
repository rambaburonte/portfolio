import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const testimonials = [
    {
      text: "Rambabu demonstrated exceptional skills in Java development during his internship. His ability to quickly grasp complex concepts and deliver quality code was impressive.",
      author: "Tausif S",
      position: "Tech Lead, HulkHire Tech"
    },
    {
      text: "Working with Rambabu was a pleasure. His dedication to writing clean, maintainable code and his enthusiasm for learning new technologies made him a valuable team member.",
      author: "Rameez Shaikh",
      position: "Senior Developer, HulkHire Tech"
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16"
          >
            Testimonials
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl
                         border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
              >
                <FaQuoteLeft className="text-blue-400 text-4xl mb-6" />
                <p className="text-gray-300 text-lg mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-blue-400">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials