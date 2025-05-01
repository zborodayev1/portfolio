import { Github, Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <div className="w-16 h-1 bg-black mx-auto"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="flex justify-center gap-8 ">
          <div className="col-span-1">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg flex items-center w-80">
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
              </div>
              <div className="bg-gray-50 p-6 rounded-lg flex items-center w-80">
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
              </div>

              <div className="bg-gray-50 p-6 rounded-lg flex items-center w-80">
                <div className="bg-black p-3 rounded-md text-white mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-black mb-1">
                    Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/Taldykorgan,+Kazakhstan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Taldykorgan, Kazakhstan
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center w-80">
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
            </div>

            <div className="bg-gray-50 p-6 rounded-lg flex items-center w-80">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
