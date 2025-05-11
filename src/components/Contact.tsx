import { Github, Mail, MapPin, Phone } from 'lucide-react'
import { motion, useAnimation } from 'motion/react'
import React, { useEffect, useState } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'

const Contact: React.FC = () => {
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
    <section id="contact" className="py-20 bg-white">
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
              Contact Me
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
              Have a project in mind or want to collaborate? Feel free to reach
              out!
            </motion.p>
          </div>
        </div>

        <div className="flex justify-center gap-8 ">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center w-80"
            >
              <div className="bg-black p-3 rounded-md text-white mr-4">
                <Mail size={20} />
              </div>

              <div>
                <h4 className="text-lg font-bold text-black mb-1">Email</h4>
                <a
                  href="mailto:zakharb713@gmail.com"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  zakharb713@gmail.com
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center w-80"
            >
              <div className="bg-black p-3 rounded-md text-white mr-4">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Phone</h4>
                <a
                  href="tel:+77762181399"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  +7 (776) 218 13 99
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center w-80"
            >
              <div className="bg-black p-3 rounded-md text-white mr-4">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Location</h4>
                <a
                  href="https://www.google.com/maps/place/Taldykorgan,+Kazakhstan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  Taldykorgan, Kazakhstan
                </a>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.4 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center w-80"
            >
              <div className="bg-black p-3 rounded-md text-white mr-4">
                <Github size={20} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">GitHub</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/zborodayev1"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  zborodayev1
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isAnimate ? 1 : 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 1.6 }}
              className="bg-gray-50 p-6 rounded-lg flex items-center w-80"
            >
              <div className="bg-black p-3 rounded-md text-white mr-4">
                <FaTelegramPlane className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-black mb-1">Telegram</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://t.me/MarketNestTg"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  @MarketNestTg
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
