import { motion, useAnimation } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const About: React.FC = () => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      borderRadius: [
        '42% 58% 36% 64% / 55% 41% 59% 45%',
        '60% 50% 60% 50% / 50% 70% 40% 70%',
        '70% 30% 72% 20% / 30% 70% 20% 72%',
        '52% 43% 64% 34% / 65% 45% 55% 46%',
        '50% 50% 50% 50% / 50% 50% 50% 50%',
        '60% 40% 60% 40% / 60% 60% 60% 40%',
        '30% 60% 50% 50% / 70% 40% 60% 30%',
        '55% 65% 45% 55% / 60% 40% 50% 50%',
        '42% 58% 36% 64% / 55% 41% 59% 45%',
      ],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    })
  }, [controls])

  const { ref, inView } = useInView()
  const [isAnimate, setIsAnimate] = useState(false)
  const controls2 = useAnimation()

  useEffect(() => {
    if (inView) {
      setIsAnimate(true)
    }
  }, [inView])

  useEffect(() => {
    if (inView) {
      const sequence = async () => {
        setIsAnimate(true)
        await controls2.start({
          width: 120,
          transition: { duration: 0.3, delay: 0.2 },
        })
        await controls2.start({
          width: 64,
          transition: { duration: 0.3, delay: 0.5 },
        })
      }
      sequence()
    }
  }, [controls2, inView])

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div ref={ref} className="text-center mb-16">
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
              About Me
            </motion.h1>
          </div>
          <motion.div
            initial={{ width: 0 }}
            animate={controls2}
            exit={{ width: 0 }}
            className=" h-1 bg-black mx-auto"
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isAnimate ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center items-center"
        >
          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              animate={controls}
              className="absolute w-150 h-145 -top-10 bg-gray-200 opacity-70 mix-blend-multiply z-0"
              style={{
                borderRadius: '42% 58% 36% 64% / 55% 41% 59% 45%',
              }}
            />
            <div className="relative max-w-100 z-10">
              <h3 className="text-2xl font-bold mb-4 ">
                Junior Full-Stack Developer
              </h3>
              <p className=" mb-6 leading-relaxed">
                I’m a 16-year-old full-stack developer who loves building
                modern, user-friendly web applications. I’m passionate about
                coding and constantly learning new technologies by working on
                real projects for practice and my portfolio.
              </p>
              <p className=" mb-8 leading-relaxed">
                I'm interested in both frontend and backend development, and I
                aim to create websites and apps that not only look great but
                also solve real problems. I'm always improving my skills and
                growing as a developer every day.
              </p>

              <div className="space-y-4 mb-8 ">
                <div className="flex items-center justify-center">
                  <Calendar size={20} className="mr-4" />
                  <div>
                    <span>Age:</span>
                    <span className="font-bold ml-2">16</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin size={20} className="mr-4" />
                  <div>
                    <span>Location:</span>
                    <span className="font-bold ml-2">
                      Taldykorgan, Kazakhstan
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Briefcase size={20} className="mr-4" />
                  <div>
                    <span>Experience:</span>
                    <span className="font-bold ml-2">
                      No professional experience yet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
