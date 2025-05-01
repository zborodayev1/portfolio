import { ArrowRight } from 'lucide-react'
import { motion, useAnimation } from 'motion/react'
import React, { useEffect } from 'react'

const Hero: React.FC = () => {
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      borderRadius: [
        '42% 58% 36% 64% / 55% 41% 59% 45%',
        '56% 44% 61% 39% / 40% 68% 32% 60%',
        '46% 54% 49% 51% / 59% 40% 60% 41%',
        '42% 58% 36% 64% / 55% 41% 59% 45%',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'linear',
      },
    })
  }, [controls])
  return (
    <section
      id="home"
      className="min-h-screen bg-white flex items-center pt-16 pb-20"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div>
            <div className="overflow-hidden h-7 mb-3">
              <motion.h4
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                exit={{ y: 40 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  mass: 1.2,
                }}
                className="text-gray-600 text-lg  font-medium"
              >
                Hello, I'm
              </motion.h4>
            </div>
            <div className="mb-4 overflow-hidden h-16">
              <motion.h1
                initial={{ y: 75 }}
                animate={{ y: 0 }}
                exit={{ y: 75 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  mass: 1.2,
                }}
                className="text-6xl font-bold text-black "
              >
                Zakhar Borodayev
              </motion.h1>
            </div>
            <div className="h-9 overflow-hidden mb-6">
              <motion.h2
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  mass: 1.2,
                }}
                className="text-3xl font-medium text-gray-700 "
              >
                Creative Full-Stack Developer
              </motion.h2>
            </div>
            <div className="text-gray-600 mb-8 text-lg max-w-lg">
              <div className="h-7 overflow-hidden">
                <motion.h1
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  exit={{ y: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    mass: 1.2,
                  }}
                >
                  I create beautiful digital experiences that combine elegant
                </motion.h1>
              </div>
              <div className="h-7 overflow-hidden">
                <motion.h1
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  exit={{ y: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    mass: 1.2,
                  }}
                >
                  design with powerful functionality to help brands stand out in
                </motion.h1>
              </div>
              <div className="h-7 overflow-hidden">
                <motion.h1
                  initial={{ y: 40 }}
                  animate={{ y: 0 }}
                  exit={{ y: 40 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.6,
                    type: 'spring',
                    stiffness: 200,
                    damping: 20,
                    mass: 1.2,
                  }}
                >
                  the digital landscape.
                </motion.h1>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-row gap-4"
            >
              <a
                href="#projects"
                className="bg-black text-white py-3 px-8 font-medium inline-flex items-center justify-center rounded-md hover:bg-gray-800 transition-colors duration-300"
              >
                View My Work
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a
                href="#contact"
                className="bg-white text-black border border-black py-3 px-8 font-medium inline-flex items-center justify-center rounded-md hover:bg-gray-100 transition-colors duration-300"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
          <div className="relative md:block">
            <motion.div
              animate={controls}
              className="aspect-[4/4] bg-gray-200 rounded-full"
            />
            <motion.div
              animate={controls}
              className="absolute -top-6 -left-4 w-24 h-24 rounded-full bg-gray-200"
            />
            <motion.div
              animate={controls}
              className="absolute -bottom-6 -right-4 w-24 h-24  rounded-full bg-gray-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
