import { Github } from 'lucide-react'
import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

const socialLinks = [
  { icon: Github, url: 'https://github.com/zborodayev1', label: 'GitHub' },
  {
    icon: FaTelegramPlane,
    url: 'https://t.me/MarketNestTg',
    label: 'Telegram',
  },
]

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Portfolio</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful digital experiences that combine elegant design
              with powerful functionality to help brands stand out.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Taldykorgan, Kazakhstan</li>
              <li>
                <a
                  href="mailto:hello@example.com"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  zakharb713@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  +7 (776) 218 13-99
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>&copy; {currentYear} Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
