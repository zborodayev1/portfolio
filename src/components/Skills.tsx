import clsx from 'clsx'
import { motion, useAnimation } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 65 },
      { name: 'Graphic Design', level: 65 },
      { name: 'Prototyping', level: 70 },
      { name: 'Branding', level: 70 },
    ],
  },
  {
    title: 'Development',
    skills: [
      { name: 'HTML/CSS', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'Node.js', level: 85 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Figma', level: 0 },
      { name: 'Git', level: 60 },
      { name: 'VS Code', level: 85 },
      { name: 'Adobe Suite', level: 0 },
    ],
  },
]

const Skills: React.FC = () => {
  const { ref, inView } = useInView()
  const [isAnimate, setIsAnimate] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      setIsAnimate(true)
    }
  }, [inView])

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        setIsAnimate(true)
        await controls.start({
          width: 120,
          transition: { duration: 0.3, delay: 0.2 },
        })
        await controls.start({
          width: 64,
          transition: { duration: 0.3, delay: 0.5 },
        })
      }
      sequence()
    }
  }, [controls, inView])

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <div ref={ref} className="text-center mb-16 ">
          <div className="overflow-hidden mb-4 h-10">
            <motion.h1
              initial={{ y: 40 }}
              animate={{ y: isAnimate ? 0 : 40 }}
              exit={{ y: 40 }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 20,
                mass: 1.2,
              }}
              className="text-4xl font-bold text-black "
            >
              My Skills
            </motion.h1>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={controls}
            exit={{ width: 0 }}
            className=" h-1 bg-black mx-auto"
          />
          <div className="overflow-hidden h-6 mt-6">
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: isAnimate ? 0 : 30 }}
              exit={{ y: 30 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              I've developed expertise across design and development, allowing
              me to create
            </motion.p>
          </div>
          <div className="overflow-hidden h-6 ">
            <motion.p
              initial={{ y: 30 }}
              animate={{ y: isAnimate ? 0 : 30 }}
              exit={{ y: 30 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              comprehensive solutions from concept to implementation.
            </motion.p>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              key={index}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-black">
                {category.title}
              </h3>
              <div>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span
                        className={clsx(
                          'text-gray-600 text-sm',
                          skill.level > 70 && 'text-green-500',
                          skill.level > 40 &&
                            skill.level <= 70 &&
                            'text-yellow-500',
                          skill.level <= 40 && 'text-red-500'
                        )}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: isAnimate ? `${skill.level}%` : 0,
                        }}
                        exit={{ width: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className={clsx(
                          'h-full transition-all duration-1000 delay-150 ease-out border rounded-full',
                          skill.level > 70 && 'bg-green-200 border-green-500',
                          skill.level > 40 &&
                            skill.level <= 70 &&
                            'bg-yellow-200 border-yellow-500',
                          skill.level <= 40 && 'bg-red-200 border-red-500'
                        )}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
