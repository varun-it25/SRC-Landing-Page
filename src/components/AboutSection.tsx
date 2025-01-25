import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { motion } from "framer-motion"

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <main className="container mx-auto py-8 sm:py-16 bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <motion.h2 variants={childVariants} className="text-center font-bold text-4xl sm:text-5xl mb-12 text-gray-800">
          About <span className="text-blue-600">SRC</span>
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div variants={childVariants} className="lg:w-1/2">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img
                src="https://blackhattalent.com/wp-content/uploads/2023/08/BK-shivani-1.jpg"
                alt="Group yoga class"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </motion.div>
          <motion.div variants={childVariants} className="lg:w-1/2">
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              The Spiritual Research Cell (SRC) at Jaipur Engineering College and Research Centre (JECRC) is dedicated
              to promoting spiritual awareness, mental well-being, and personal growth among our students and faculty.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              By seamlessly integrating academic learning with spiritual development, SRC offers a diverse range of
              activities. These include meditation sessions, yoga workshops, inspirational talks, and thought-provoking
              discussions on self-awareness, stress management, and life goals.
            </p>
            <p className="text-lg mb-6 text-gray-700 leading-relaxed">
              Our mission is to empower students to balance academic pressures with inner peace, fostering essential
              qualities such as leadership, emotional intelligence, and resilience.
            </p>
            <p className="text-lg mb-8 text-gray-700 leading-relaxed">
              We invite you to join us on this transformative journey of holistic development, where intellectual growth
              harmoniously meets spiritual enlightenment.
            </p>
            <Button className="px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Learn More
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

export default AboutSection