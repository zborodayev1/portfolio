import { motion, useAnimation } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'
import React, { useEffect } from 'react'

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

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Me</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
        </div>

        {/* Центрирование блока с текстом и blob */}
        <div className="flex justify-center items-center">
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
                  <Calendar size={20} className=" mr-4" />
                  <div>
                    <span className="">Age:</span>
                    <span className="font-bold ml-2">16</span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin size={20} className=" mr-4" />
                  <div>
                    <span className="">Location:</span>
                    <span className="font-bold ml-2">
                      Taldykorgan, Kazakhstan
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Briefcase size={20} className=" mr-4" />
                  <div>
                    <span className="">Experience:</span>
                    <span className="font-bold ml-2">
                      No professional experience yet
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
