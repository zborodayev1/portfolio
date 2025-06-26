import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl flex gap-3 font-bold tracking-tight text-black transition-all duration-300"
        >
          Portfolio
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <motion.a
              href={item.href}
              key={item.name}
              className="relative text-gray-800 font-medium"
              initial="rest"
              whileHover="hover"
              animate="rest"
            >
              {item.name}
              <motion.span
                variants={{
                  rest: { width: '0%' },
                  hover: { width: '100%' },
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute bottom-0 left-0 h-[2px] bg-black"
                style={{ display: 'block' }}
              />
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
