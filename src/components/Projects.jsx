import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { Tilt } from 'react-tilt'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const projects = [
    {
      title: "Stripe Payment Integration",
      description: "Integrated Stripe payment processing in a Spring Boot microservices backend, enabling seamless transactions, secure API communication, and robust error handling.",
      technologies: ["Java", "Spring Boot", "MySQL","JDBC Template", "Stripe API"],
      // github: "https://github.com/rambaburonte/ecommerce-backend",
      live: "#"
    },
    {
      title: "Group Expenditure Management",
      description: "Built a Group Expense Manager in Spring Boot with Spring Security for role-based access, Spring Data JPA for efficient data handling, and an intuitive UI using JSTL, JSP, HTML, and CSS for seamless expense tracking",
      technologies: ["Java", "Spring Boot", "Sprin Boot Data JPA", "Oracle"],
      github: "https://github.com/rambaburonte/ExpenditureManagement",
      live: "#"
    }
    // {
    //   title: "Inventory System",
    //   description: "Microservices-based inventory management system with real-time stock updates and automated reordering.",
    //   technologies: ["Java", "Spring Cloud", "MySQL", "Docker"],
    //   github: "https://github.com/rambaburonte/inventory-system",
    //   live: "#"
    // }
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
    <section id="projects" className="py-20 px-4">
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
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-16">
            {projects.map((project, index) => (
              <Tilt
                key={index}
                options={{
                  max: 15,
                  scale: 1.05,
                  speed: 300
                }}
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-700
                           hover:border-blue-500/50 transition-all duration-300"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaExternalLinkAlt size={20} />
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects